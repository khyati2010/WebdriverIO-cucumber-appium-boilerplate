module.exports = {
    article_list: function(){return '.article-list .article, .inline-series'},
    article_list_articles: function(){return '.article-list .article'},
    article_list_series: function(){return '.article-list .inline-series'},
    article_list_loadmore_button: function(){return '[class*="Buttons__PrimaryButton"]'},
    get_article_list_articleCounts: function(){
        return $$(this.article_list()).length;
    }
}