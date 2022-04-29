const jwt = require('jsonwebtoken');

const {SECRET_KEY,ALGORITHM} = require('../config/config');
const db = require('../models');

const loginRequired = async(req, res, next)=>{
    if(!req.headers.authorization) throw {message:'KEYERROR_AUTHORIZATION', status: 401}

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
const publicAuth = async(req, res, next)=>{
    if(req.headers.authorization){
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
}
module.exports = {
    loginRequired,
    publicAuth,
}
