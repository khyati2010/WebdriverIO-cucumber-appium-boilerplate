module.exports = { 
    footer_links: function() { return '[class*="Footer__FooterList"] li a'; },
    footer_link_byText: function(link_text) { return './/*[@class[contains(.,"Footer__FooterList")]]//a[contains(text(),"'+link_text+'")]'; },
    
    /* footer newsletter */
    footer_newsletter: function(){ return '[class*="Footer__Form"]'; },
    footer_newsletter_heading: function(){ return '[class*="Footer__Form"] h2'; },
    footer_newsletter_email: function(){ return '[class*="Footer__Form"] #Email'; },
    footer_newsletter_submit: function(){ return '[class*="Footer__Form"] [type="submit"]'; },
    footer_newsletter_thankYouMessage: function(){ return '[class*="Footer__Form"] p[class*="Type"]'; },


    /**
      * @method getFooterNewletterHeading
      * @returns string
      * @description return text of footer newsletter heading
      */
     getFooterNewletterHeading: function(query){
        return $(this.footer_newsletter_heading()).getText();
     }
}