const {SECRET_KEY,ALGORITHM} = require('../config/config');
const jwt = require('jsonwebtoken');

const signToken = (user_id)=>{
    jwt.sign({id:user_id}, SECRET_KEY, {algorithm:ALGORITHM});
}

const verifyToken = (authorization)=>{
    jwt.verify(authorization, SECRET_KEY, ALGORITHM,
        (err, decoded)=>{
            if(!err) {
                let userId = decoded.id? decoded.id:0;
                return userId
            }
            else {
                throw {message:'invalid token', status: 401}
            }                     
        }
    )
}

module.exports = {
    signToken,
    verifyToken,
}
