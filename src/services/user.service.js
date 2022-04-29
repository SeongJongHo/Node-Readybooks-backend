const kakaoAPI = require('../middleware/kakaoAPI').kakaoAPI

module.exports ={
    kakaoLogin: async(token)=>{

        return {
            token: token,
            user_id: user.id,
            user_nickname: user.nickname, 
            user_profile_img: user.profile_img,
        }
    }
}