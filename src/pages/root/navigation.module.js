module.exports = {
    navigation: function() { return '[class^="Nav__Navigation"]'; },
    logo: function () { return '[class^="Nav__Navigation"] > a'; },
    burgerIcon: function () { return '[class^="Nav__Navigation"] [class^="Nav__BurgerMenu"]'; },
    navMenu: function () { return '[class^="Nav__Navigation"] [class^="Nav__Menu"]'; },
    navigationLinkList: function () { return '.nav__item > a'; },
    categoryLink(category_text) { return '.nav__item > a[href*="'+category_text+'"]'},
    navigationSuggestedArticleList: function () { return '.nav__item > [class^="Nav__CategoryArticle"]'; },
    

     /**
     * @method openNavigation
     * @returns {void} 
     * @description click on burger icon to open navigation
     *  */
    openNavigation: function () {
        $(this.burgerIcon()).click();
     },
     
      /**
      * @method closeNavigation
      * @returns {void} 
      * @description click on burger icon to close navigation
      *  */
     closeNavigation: function () {
         $(this.burgerIcon).click();
     },
 
     /**
      * @method navigateToCategoty
      * @returns {void}
      * @description click on a category link in navigation
      */
     navigateToCategoty: function (category){
         this.openNavigation();
         $(this.categoryLink(category)).click();
     },
 
     /**
      * @method checkSuggestedArticleInNavigation
      * @returns boolean
      * @description check if suggested article in shown in navigation
      */
     checkSuggestedArticleInNavigation: function (){
         this.openNavigation();
         $$(this.navigationSuggestedArticleList).each((element) => {
         })
         return true;
     }
}