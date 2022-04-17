const asyncHandler = require('./asyncHandler');
const kakaoService = require('../services/userService').kakaoLogin

module.exports = {
    kakaoLogin: asyncHandler(async(req, res, next)=>{
        if(!req.headers.authorization) throw {message: 'KEYERROR_AUTHORIZATION', status: 400}

        const result = kakaoService(req.headers.authorization)
        if(!result) throw {message: 'INVALID_USER', status: 400}

        return res.status(200).json(result)

    })
}