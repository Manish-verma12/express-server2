import * as mongoose from  'mongoose';

import UserSchema from './UserSchema';
import IUserModel from './IUserModel';

export const userSchema = new UserSchema({
    collection: 'user',
});

// export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>
// {
//     'User',
//     userSchema,
//     'User',
//     true,
// };

export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>(
    'User',
    userSchema,
)

// const returnArr = <T>(arr: T[]): T[]=>{          // generic type
//     return arr;
// }

// const arr1 = returnArr([1,2,3,4,5]);
// const arr2 = returnArr(['a','b']);
