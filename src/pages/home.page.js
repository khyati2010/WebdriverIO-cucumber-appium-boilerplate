import RootPage from './root';

class HomePage extends RootPage {

    //hero carousel slider
    heroCarousel() {return '.hero-carousel .slider'};
    heroCarouselLeft() {return this.heroCarousel()+' .slider-control-bottomleft span.left'};
    heroCarouselRight() {return this.heroCarousel()+' .slider-control-bottomleft span.right'};
    heroCarouselSlides() {return this.heroCarousel()+' .slider-list .slider-slide'};
    heroCarouselSlidesVisible() {return this.heroCarouselSlides()+'.slide-visible'};
    heroCarouselSlide(index) { return this.heroCarouselSlides()+':nth-of-type('+index+')'};

    //Category Card
    categoryCard() { return '[class*="CategoryCard__Articles"]:nth-of-type(1)'};
    categoryCard(index) { return '(.//div[contains(@class,"CategoryCard__Articles")])['+index+']'};
    category_card_ByName(categoryName) { return './/*[contains(@class,"CategoryCard__Articles")]/h2[text()[contains(.,"'+categoryName+'")]]/..'};
    categoryCardHeading(index) { return this.categoryCard(index)+'/h2'};
    category_card_feature_article(index) { return this.categoryCard(index)+'/div[contains(@class,"Featured")]'};
    category_card_feature_article_quote(index){ return this.category_card_feature_article(index) + '/div[contains(@class,"ContentCard")]/h3'};
    category_card_feature_article_image(index){ return this.category_card_feature_article(index) + '/picture'};
    category_card_feature_article_title(index){ return this.category_card_feature_article(index) + '/div[contains(@class,"ContentCard")]//h6'};
    category_card_feature_article_readmore(index){ return this.category_card_feature_article(index) + '/div[contains(@class,"ContentCard")]//label'};
    category_card_article_list(index) { return this.categoryCard(index)+'//div[contains(@class,"article")]'};
    

    //tag Container
    tagContainer() { return '[class*="TagContainer__Container"]'};
    tagContainerHeadline() { return this.tagContainer()+' [class*="Headline"]'};
    tagContainer_articles() { return this.tagContainer()+' .article'};
    tagContainer_article_by_index(index) { return this.tagContainer_articles()+':nth-of-type(' + index + ')'};
    tagContainer_article_by_index_link(index) { return this.tagContainer_article_by_index(index)+' a'};
    tagContainer_article_by_index_image(index) { return this.tagContainer_article_by_index(index)+' img'};
    tagContainer_article_by_index_title(index) { return this.tagContainer_article_by_index(index)+' h2'};
    tagContainer_view_more_link() { return this.tagContainer()+' div a[href^="/tag"]'};
    tagContainer_view_more_text() { return this.tagContainer_view_more_link()+' p'};

    //Tag Searcher
    tagSearcherContainer() {return '[class*="TagSearcher__Row"]'};
    tagSearcherHeading() {return this.tagSearcherContainer()+' h1'};
    tagSearcherTagList() {return this.tagSearcherContainer()+' [class*="TagList"]'};
    tagSearcherTagList_Tags() {return this.tagSearcherContainer()+' [class*="TagList"] li'};
    tagSearcherTagList_Tags_by_index() {return this.tagSearcherTagList_Tags()+':nth-of-type(2)'};
    tagSearcher_article_list() {return this.tagSearcherContainer()+' [class*="Articles"] '};
    tagSearcher_article_list_articles() {return this.tagSearcher_article_list()+' [class*="ArticleCardHalf"]'};

    //Instagram carousel
    instagramFeedContainer() {return '[class*="InstagramFeed__Row"]'};
    
    instagramFeed_Insta_BrandCard() {return '[class*="InstagramFeed__Row"] [class*="InstagramFeed__BrandCard"]:nth-of-type(1)'};
    instagramFeed_Insta_BrandCard_Link() {return '[class*="InstagramFeed__Row"] [class*="InstagramFeed__BrandCard"]:nth-of-type(1) a'};
    instagramFeed_Fb_BrandCard_Link_followText() {return '[class*="InstagramFeed__Row"] [class*="InstagramFeed__BrandCard"]:nth-of-type(1) a .follow'};

    instagramFeed_Fb_BrandCard() {return '[class*="InstagramFeed__Row"] .fb[class*="InstagramFeed__BrandCard"]'};
    instagramFeed_Fb_BrandCard_Link() {return '[class*="InstagramFeed__Row"] .fb[class*="InstagramFeed__BrandCard"] a'};
    instagramFeed_Fb_BrandCard_Link_followText() {return '[class*="InstagramFeed__Row"] .fb[class*="InstagramFeed__BrandCard"] a .follow'};

    instagramFeed_IGFeedCard() {return '[class*="InstagramFeed__Row"] [class*="InstagramFeed__IGCard"]'}
    
    

    
    
    constructor(){
        super();
        this.title = 'Home Page';
    }

    open() {
        super.open('/');
    }

    heroCarouselSlideLeft(){
        $(this.heroCarouselLeft()).click();
    }

    openAnArticle(){

        $$(this.articles_on_page())[3].click();
    }

    heroCarouselSlideRight(){
        $(this.heroCarouselRight()).click();
    }

    goToArticleofHeroCarousel(){
        $(this.heroCarouselSlidesVisible()).$('a').click();        
    }

    get_Number_Of_Articles_In_TagContainer_card(){
        return $$(this.tagContainer_articles()).length - 1;
    }

    getTagSearcherTagCount(){
        return $$(this.tagSearcherTagList_Tags()).length;
    }

    get_TagSearcher_article_count(){
        return $$(this.tagSearcher_article_list_articles()).length;
    }

    get_InstagramFeed_IGFeedCard_Count(){
        return $$(this.instagramFeed_IGFeedCard()).length;
    }

    get_Facebook_Instagram_BrandCard_Link(){
        return browser.call(() => {  return this.gqHelper.get_Facebook_Instagram_BrandCard_Link(); });
    }

    get_InstagramLink_Contentful(){
        let urls = this.get_Facebook_Instagram_BrandCard_Link();
        return urls.instagramUrl;
    }

    get_FacebookLink_Contentful(){
        let fbUrl = this.get_Facebook_Instagram_BrandCard_Link();
        fbUrl = (browser.isMobile) ? fbUrl.facebookUrl.replace('https://www', 'https://m') : fbUrl.facebookUrl;
        return fbUrl;
    }

    get_category_card_article_list_count(indexOfCard){
        return $$(this.category_card_article_list(indexOfCard)).length;
    }
    
    get_category_of_article_category_card(categoryName){
        let articleList = $(this.category_card_ByName(categoryName)).$$('.//div[contains(@class,"article")]/a')
        let category;
        for(let article of articleList){
            let aUrl = article.getAttribute('pathname');
            let cat = browser.call(() => { return this.gqHelper.get_category_of_article({url: aUrl});});
            if(category != undefined && category != cat){ throw new Error(`found different categories in same category card: ${category} and ${cat}`)}
            category = cat;
        }
        return category;
    }
}

export default new HomePage();