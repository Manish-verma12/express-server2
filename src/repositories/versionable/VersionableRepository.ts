import { query } from 'express';
import * as mongoose from 'mongoose';
import { version } from 'typescript';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>{

private model;
constructor(model){
    this.model = model;
}

    public static generateObjectId(){
        return String(new mongoose.Types.ObjectId());
    }
    public findOne(query): mongoose.Query<D, D>{
        const finalQuery = {deleteAt: null, ...query};
        return this.model.findOne(query)
    }

    protected find(query, projextion?: any, options?: any): mongoose.Query<D[], D>{
        const finalQuery = {deleteAt: null, ...query};
        return this.model.find(finalQuery, projection, options)
    }
    
    protected count(): mongoose.Query<number,  D>{
        const finalQuery = {deletedAt: null, ...query};
        return this.model.count(finalQuery);
    }

    protected create (data: any): Promise<D>{
        console.log('UserRepository:: create' , data);
        const id = VersionableRepository.generateObjectId();
        console.log(id);
        const model = new this.model({
            _id: id,
            originalId: id,
            ...data,
        });
        return model.save();
    }

   protected softDelete(filter, data): mongoose.UpdateQuery<D>
{
   return this.model.updateOne(filter, data);
}

protected async update(data: any): Promise<D>{
    console.log('userRepository:: update', data);
    const previousRecord = await this.find({originalId: data.original});
    if(previousRecord){
        await this.softDelete({originalId: data.originalId, deleteAt: null}, {deleteAt: Date.now()});
    }else{
            return null;
        }
        const newData = { ...previousRecord, ...data};
        newData._id = VersionableRepository.generateObjectId();
        delete newData.deleteAt;
        const model = new this.model(newData);
        return model.save();



    }
}

























}