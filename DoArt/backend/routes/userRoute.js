import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

router.get('/createadmin', async (req, res) => {
    try {

        const user = new User({
            name: "Carolina",
            email: 'nina_duarte_@hotmail.com',
            password: 'negan2019',
            isAdmin: true

        });

        const newUser = await user.save();
        res.send(newUser);

    } catch (error) {
        res.send({ msg: error.message });
    }


});

export default router;