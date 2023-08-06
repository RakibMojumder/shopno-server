const jwt = require('jsonwebtoken');
const { promisify } = require('util');
// const jose = require('jose')

module.exports.verifyToken = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(' ')[1];
        // console.log(token);
        if (!token) {
            return res.json({
                success: false,
                error: 'unauthorized'
            })
        }

        const decode = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET);
        // const { payload: decode } = await jose.jwtVerify(
        //     token, new TextEncoder().encode(process.env.TOKEN_SECRET)
        // );

        req.user = decode;
        next();

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            error: error.message
        })
    }

}