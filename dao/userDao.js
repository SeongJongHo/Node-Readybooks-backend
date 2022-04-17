const db = require('../models');

module.exports = {
    getKakaoUser: async kakaoData=>{
        return await db.User.findOrCreate({
            where:{ kakao_id: kakaoData.id },
            defaults: {
                nickname: kakaoData.kakao_account.profile.nickname,
                profile_img: kakaoData.kakao_account.profile.profile_image_url
            }})
    }
}