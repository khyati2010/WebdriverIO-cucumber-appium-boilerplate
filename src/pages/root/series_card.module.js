module.exports = {
    //series card
    series: function() {return '[class*="SeriesCard__SeriesCardWrapper"]'},
    series_card_title: function () {return this.series() + ' [class*="CardTitle"]'},
    series_card_subtitle: function() {return this.series() + ' [class*="CardSubtitle"]'},
    series_card_smart_link: function() {return this.series() + ' [class*="SmallLink"]'},
    seriesCardArticles: function() {return this.series()+' .card-item'},
    seriesCard_cardContainer: function() {return this.series()+' [class*="CardsWrapper"]'},
    seriesCardArticle_by_Index: function(index){ return this.seriesCardArticles()+':nth-of-type(' + index + ')'},
    seriesCardArticle_by_Index_link: function(index) {return this.seriesCardArticle_by_Index(index)+' a'},
    seriesCardArticle_by_Index_image: function(index) {return this.seriesCardArticle_by_Index(index)+' img'},
    seriesCardArticle_by_Index_card_count: function(index) {return this.seriesCardArticle_by_Index(index)+' [class*="CardCount"]'},
    seriesCardArticle_by_Index_title: function(index) {return this.seriesCardArticle_by_Index(index)+' h5'},

    getNumberOfArticlesInSeriesCard: function(){
        return $$(this.seriesCardArticles()).length;
    }
}