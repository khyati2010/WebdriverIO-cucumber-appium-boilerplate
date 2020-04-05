
module.exports = {
    //cookie consent box
    consent_container: function(){return '.consentContainer'; },
    consent_container_button : function(){ return this.consent_container()+' .consentButton'; },
    
    accept_cookie_consent: function(){
       
        if(browser.config['COOKIE_CONSENT']){
            try{
                $(this.consent_container()).waitForExist(2000, false, "cookie consent is not visiblke");
                $(this.consent_container_button()).waitForClickable({ timeout: 3000, });
                $(this.consent_container_button()).click();
                browser.config['COOKIE_CONSENT'] = false; 
            }catch(e){
                console.log(e);
            }    
        }else{
                console.log('cookie consent is not visible...')
            } 
        }
        
    
}