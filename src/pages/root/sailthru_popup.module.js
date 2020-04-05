import clickElementWithJS from '../../support/action/clickElementWithJS';
module.exports = {
    //sailthru popup
    sailthru_overlay: function(){return '.sailthru-overlay'; },
    sailthru_overlay_close_button : function(){ return this.sailthru_overlay()+' .sailthru-overlay-close'; },
    sailthru_overlay_heading: function() { return this.sailthru_overlay()+ ' .sailthru-overlay-heading'; },
    sailthru_overlay_detail: function() { return this.sailthru_overlay()+ ' .sailthru-overlay-detail'; },
    sailthru_overlay_email_input: function() { return this.sailthru_overlay()+ ' .sailthru-user-acquisition-email'; },
    sailthru_overlay_submit: function() { return this.sailthru_overlay()+ ' .sailthru-overlay-call-to-action'; },

    close_sailthru_overlay: function(){
       
        if(browser.config['CHECK_SAIL_THRU_POPUP']){
            try{
                $(this.sailthru_overlay()).waitForExist(2000, false, "sailthru pop is not visiblke");
                $(this.sailthru_overlay_close_button()).waitForClickable({ timeout: 3000, });
                clickElementWithJS('click', 'button', this.sailthru_overlay_close_button());
                browser.config['CHECK_SAIL_THRU_POPUP'] = false; 
            }catch(e){
                console.log(e);
            }    
        }else{
                console.log('sailthru popup is not visible...')
            } 
        }
}