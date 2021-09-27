import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';
// import user from 'src/controllers/user ';


export default class UserRepository{

    public static generateObjectId(){
        return String(new mongoose.Types.ObjectId());
    }
    public findOne(query): mongoose.Query<IUserModel, IUserModel>{
        return userModel.findOne(query).lean();
    }

    public find(query, projextion?: any, options?: any): mongoose.Query<IUserModel[], IUserModel>{
        return userModel.find(query, projection, options)
    }
    
    public count(): mongoose.Query<number, IUserModel>{
        return userModel.count();
    }

    public create (data: any): Promise<IUserModel>{
        console.log('UserRepository:: create' , data);
        const id = UserRepository.generateObjectId();
        const model = new userModel({
            _id: id,
            ...data,
        });
        return model.save();
    }

    public update(data: any): mongoose.UpdateQuery<IUserModel>{
        console.log('UserRepository:: update', data);
        return userModel.updateOne(data);
    }
}