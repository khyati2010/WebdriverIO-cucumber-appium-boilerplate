import sailthru from "sailthru-client";

class SailthruHelper{
    constructor(_api_key = browser.options['SAIL_API_KEY'], _secret_key = browser.options['SAIL_SECRET_KEY']){
        this.api_key = _api_key;
        this.secret_key = _secret_key;
        this.sailthru_client =  sailthru.createSailthruClient(this.api_key, this.secret_key);
    }

    async getUser(user_id){

        return new Promise(
            (resolve, reject) => {
                this.sailthru_client.getUserBySid(user_id, (err,res)=>{
                    if(err){
                        reject(err)
                    }else{
                        if(res.errormsg){
                            reject(res.errormsg)
                        }
                        resolve(res);
                    }
                })
            });
    }
}

module.exports = SailthruHelper;