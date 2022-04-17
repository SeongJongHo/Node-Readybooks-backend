const jwt = require('jsonwebtoken');

const kakaoAPI = require('../middleware/kakaoAPI').kakaoAPI
const { getKakaoUser } = require('../dao/userDao')
const SECRET_KEY = require('../config/config.js').SECRET_KEY;
const ALGORITHM = require('../config/config.js').ALGORITHM;

module.exports ={
    kakaoLogin: async(token)=>{
        const kakao = kakaoAPI(token);
        const kakao_data = await kakao.getKakaoAPI();
        const user = await getKakaoUser(kakao_data)
        const token = jwt.sign({id:user.id}, SECRET_KEY, {algorithm:ALGORITHM});

        return {
            token: token,
            user_id: user.id,
            user_nickname: user.nickname, 
            user_profile_img: user.profile_img,
        }
    }
}