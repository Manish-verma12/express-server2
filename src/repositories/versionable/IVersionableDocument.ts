import * as mongoose from 'mongoose';

export default interface IVersionableDocument extends mongoose.Document{
    deleteAt: Date;
    originalId: string;
    createdAt: Date;
}