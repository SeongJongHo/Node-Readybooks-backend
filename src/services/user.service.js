const kakaoAPI = require('../middleware/kakaoAPI').kakaoAPI

const kakaoSignIn = ()=>{
    try{
        return {
            token: token,
            user_id: user.id,
            user_nickname: user.nickname, 
            user_profile_img: user.profile_img,
        }
    }
    catch(err){

    }
}
module.exports = {
    kakaoSignIn
}