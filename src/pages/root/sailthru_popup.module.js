import isExisting from '../../support/check/isExisting';
import waitForVisible from '../../support/action/waitForVisible';
module.exports = {
    //sailthru popup
    sailthru_overlay: function(){return '.sailthru-overlay'; },
    sailthru_overlay_close_button : function(){ return this.sailthru_overlay()+' .sailthru-overlay-close'; },
    sailthru_overlay_heading: function() { return this.sailthru_overlay()+ ' .sailthru-overlay-heading'; },
    sailthru_overlay_detail: function() { return this.sailthru_overlay()+ ' .sailthru-overlay-detail'; },
    sailthru_overlay_email_input: function() { return this.sailthru_overlay()+ ' .sailthru-user-acquisition-email'; },
    sailthru_overlay_submit: function() { return this.sailthru_overlay()+ ' .sailthru-overlay-call-to-action'; },

    close_sailthru_overlay: function(){
        try{
            waitForVisible(this.sailthru_overlay(), false, 2000);
            $(this.sailthru_overlay_close_button()).click();
        }catch(err){
            console.log('sailthru popup is not shown..');
        }
        
    }
}