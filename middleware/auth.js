const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../config/config.js').SECRET_KEY;
const ALGORITHM = require('../config/config.js').ALGORITHM;
const db = require('../models')
const asyncHandler = require('./asyncHandler');

module.exports = {
    login_required : asyncHandler(async(req, res, next)=>{
        if(req.headers.authorization){
            const payload = {}
            jwt.verify(req.headers.authorization, SECRET_KEY, ALGORITHM,
                (err, decoded)=>{
                    if(!err) {
                        payload.id = decoded.id
                    }
                    else {
                        throw {message:'INVALID_TOKEN', status: 401}
                    }                     
                }
            )
            await db.User.findOne({where: {id: payload.id}})
                .then(result=>{
                    if(result){
                        req.user = result.id
                        next()
                    }
                    else {
                        throw {message:'INVALID_USER', status: 401}
                    }
                })
        }
        else {
            throw {message:'KEYERROR_AUTHORIZATION', status: 401}
        }
    }),
    public_authorization: asyncHandler(async(req, res, next)=>{
        if(req.headers.authorization){
            const payload = {}
            jwt.verify(req.headers.authorization, SECRET_KEY, ALGORITHM,
                (err, decoded)=>{
                    if(!err) {
                        payload.id = decoded.id
                    }
                    else {
                        throw {message:'INVALID_TOKEN', status: 401}
                    }                     
                }
            )
            await db.User.findOne({where: {id: payload.id}})
                .then(result=>{
                    if(result){
                        req.user = result.id
                        next()
                    }
                    else {
                        throw {message:'INVALID_USER', status: 401}
                    }
                })
        }
        else {
            req.user = null;
            next()
        }
    })
}
