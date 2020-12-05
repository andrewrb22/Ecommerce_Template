import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();
router.post('/signin', async (req,res) => {
    const singinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if(singinUser){
res.send({
    _id: singinUser.id,
    name: singinUser.name,
    email: singinUser.email,
    isAdmin: singinUser.isAdmin,
    token: getToken(user)
})
    } else{
        res.status(401).send({msg:'Invalid Email or Password'})
    }
})

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