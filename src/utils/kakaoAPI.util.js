class KakaoAPI {

    constructor(kakao_token){
        this.kakao_token= kakao_token; 
    }

    getKakaoUser(){
        this.kakao_url= "https://kapi.kakao.com/v2/user/me";
        this.headers= {"Authorization":"Bearer " + this.kakao_token};
        
        return new Promise((resolve, reject)=>{
            get({
                method: 'GET',
                url: this.kakao_url,
                headers: this.headers
            },(error, response, body)=>{
                if(!error) {
                    this.kakao_data= JSON.parse(body)
                    resolve(this.kakao_data)
                }
                else{
                    reject(false)
                }
            })
        }) 
    }
}

module.exports = {

}