const jwt = require('jsonwebtoken');

const secret = 'thereisaplace';
const expiration = '2h';

module.exports = {
    authMiddlewear: function (req , res , next) {
        let token = req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = toekn.split(' ').pop().trim();
        }

        if (!token){
            return req;
        }

        try {
            const {data} = jwt.verify(token , secret , {maxAge: expiration});
            req.user = data;
        } catch {
            console.log('Invalid Token');
        }
        return req;
    },
    signToken: function ({ username , email , _id}) {
        const payload = { username , email , _id };

        return jwt.sign( { data : payload} , secret , {expiresIn: expiration});
    },
};