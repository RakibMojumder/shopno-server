const mongoose = require('mongoose');
const { emailValidation } = require('../helper/validate');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ObjetId = mongoose.Types.ObjectId
// const jose = require('jose')


module.exports.register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        if (!username || !email || !phone || !password) {
            return res.json({
                success: false,
                error: 'All the fields are required'
            })
        }

        if (!emailValidation(email)) {
            return res.json({
                success: false,
                error: 'Provide a valid email'
            })
        }

        if (password.length < 6) {
            return res.json({
                success: false,
                error: 'Password should be at least 6 character'
            })
        }


        const isUserExist = await User.findOne({ email })
        if (isUserExist) {
            return res.json({
                success: false,
                error: 'user already exists. Login !'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ ...req.body, password: hashedPassword });

        res.json({
            success: true,
            msg: 'Successfully created account',
        })

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            error: error.message
        })
    }
}




module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({
                success: false,
                error: 'All the fields are required'
            })
        }


        if (!emailValidation(email)) {
            return res.json({
                success: false,
                error: 'Provide a valid email'
            })
        }


        const isValidUser = await User.findOne({ email }).populate('wishList');
        if (!isValidUser) {
            return res.json({
                success: false,
                error: 'User not found. Create a new account'
            })
        }

        const isPassValid = await bcrypt.compare(password, isValidUser.password);
        if (!isPassValid) {
            return res.json({
                success: false,
                error: 'Invalid credentials'
            })
        }

        const payload = {
            id: isValidUser._id,
            name: isValidUser.username,
            email: isValidUser.email,
            role: isValidUser.role
        }


        const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1d' });

        // const token = await new jose.SignJWT(payload)
        //     .setProtectedHeader({ alg: 'HS256' })
        //     .setIssuedAt()
        //     .setExpirationTime('1d')
        //     .sign(new TextEncoder().encode(process.env.TOKEN_SECRET));


        // res.cookie('token', token, {
        //     maxAge: 1 * 24 * 60 * 60 * 1000, // 7d
        //     httpOnly: false,
        // })

        const { password: pass, ...user } = isValidUser.toObject();
        res.json({
            success: true,
            message: 'Successfully login',
            data: { user, token }
        })


    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            error: error.message
        })
    }
}



module.exports.getLoginUser = async (req, res) => {
    try {
        const { email } = req.user;
        const user = await User.findOne({ email }).populate('wishList');

        res.json({
            success: true,
            message: 'successfully user found',
            data: user
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: 'Could not get user'
        })
    }
};


module.exports.addToWishList = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.user.id;
        const user = await User.findById({ _id: userId });
        const isProductExist = user.wishList.find(productId => new ObjetId(productId).valueOf() === id);

        let updatedUser;
        if (isProductExist) {
            updatedUser = await User.updateOne({ _id: userId }, { $pull: { wishList: id } })
        } else {
            updatedUser = await User.updateOne({ _id: userId }, { $push: { wishList: id } });
        }


        if (updatedUser.modifiedCount) {
            return res.json({
                success: true,
                message: 'successfully add wishlist'
            })
        }

        res.json({
            success: false,
            message: 'could not add wishlist'
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
};

