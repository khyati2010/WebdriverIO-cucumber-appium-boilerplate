module.exports = {
    search_icon: function() { return '.icon-search'; },
    search_close_icon: function() { return '.icon-search'; },
    search_container: function() { return '#SearchContainer'; },
    search_input: function(){ return '#search'; },

    search_suggested_articles: function(){ return '.article-list > div'; },
    search_suggested_article_by_index: function(index){ return '.article-list > div:nth-of-type('+index+')'; },
    search_suggested_article_by_index_title: function(index){ return this.search_suggested_article_by_index(index)+' [class*="Title"]'; },

    filter_and_sort_link: function(){ return './/h5[contains(text(),"Filter & Sort")]'},
    filter_module: function(){ return '.filter'},
    filter_module_heading: function(){ return this.filter_module()+'>p'},
    filter_module_options: function(){ return this.filter_module()+' [class*="Search__Option-"]'},
    sort_module: function(){ return '.sort'},
    sort_module_heading: function(){ return this.sort_module()+'>p'},
    sort_module_options: function(){ return this.sort_module()+' [class*="Search__Option-"]'},
    
    search__error_text: function(){ return '.search__error-text'},

    topic_card_container: function() {return '[class*="SearchTopics__Topics"]';},

    search_result_count: function() { return '[class*="Search__Results"] h5'},

     /**
      * @method getSearchResultCount
      * @returns void
      * @description click on search icon and open search container
      */
     getSearchResultCount: function(){
        return parseInt($(this.search_result_count()).getText().split(' ')[0]);
    },

    /**
      * @method getSearchResultCount
      * @returns void
      * @description Enter search query and press
      */
     enterSearchQuery: function(query){
        $(this.search_input()).setValue(query);
        
    },

     /**
      * @method get_search_suggested_articles_count
      * @returns void
      * @description get count of search articles card at bottom
      */
    get_search_suggested_articles_count: function(){ return $$(this.search_suggested_articles()).length; },

    /**
     * @method get_search_error_text
     * @return {String}
     * @description get error message when no search result is found
     */
    get_search_error_text: function(){ return $(this.search__error_text()).getText().replace(/[\n\r]/g, "");}
}