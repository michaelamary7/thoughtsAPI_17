import { Router } from 'express';   
import { createUser, getUsers, getSingleUser, addFriend, deleteFriend } from '../../controllers/userControllers.js';

const router = Router();

// api/users 
router.route('/').get(getUsers).post(createUser);

// api/users/:id
router.route('/:id').get(getSingleUser);

// api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

export default router;





