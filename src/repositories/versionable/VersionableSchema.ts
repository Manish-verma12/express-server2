import * as  mongoose from 'mongoose';



class VersionableSchema extends mongoose.Schema {

    constructor(userSchema: any, collections: any) {
        const versionedOptions = Object.assign({
            createdAt: {
                default: Date.now,
                type: Date,
            },
            deletedAt: {
                required: false,
                type: Date,
            },
            originalId: {
                required: true,
                type: String,
            }
        }, userSchema);
        super(versionedOptions, collections);
    }
}

export default VersionableSchema;