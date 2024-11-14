import { Schema, model, Document, ObjectId } from 'mongoose';

interface IUser extends Document {
    _id: ObjectId;
    username: string;
    email: string;
    thoughts: ObjectId[];
    friends: ObjectId[];
}

const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
});

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
}
);

const User = model<IUser>('User', UserSchema);


export default User;
