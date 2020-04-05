@homepage @regression 
Feature: HomePage 
    As a user
    I can navigate to home page
    Home page should be loaded correctly
    I can view all modules on Home page

    Background: 
        Given I open the page "homePage"
        When I "close_sailthru_overlay" on current page
        When I "accept_cookie_consent" on current page

    @HeroCarousel @prod_checklist
    Scenario: I can see hero carousel.
        Then I expect that element "heroCarousel" becomes visible
        When I "close_sailthru_overlay" on current page

    @HeroCarousel
    Scenario: I can navigate to slides with left and right arrow button in hero carousel.
        Then I expect that element "heroCarousel" becomes visible
        When I click on the element "heroCarouselRight"
        Then I expect that element "heroCarouselSlide(2)" is within the viewport
        When I click on the element "heroCarouselLeft"
        Then I expect that element "heroCarouselSlide(1)" is within the viewport
    
    @CategoryCard @prod_checklist 
    Scenario: I can see the category cards for all three category body, food, life
        Then I wait on element "categoryCard(1)" for 2000ms to exist
        Then I scroll to element "categoryCard(1)" until its visible
        Then I expect that element "categoryCard(1)" becomes visible
        Then I expect that element "categoryCardHeading(1)" matches the text "/body"
        Then I scroll to element "categoryCard(2)" until its visible
        Then I expect that element "categoryCard(2)" becomes visible
        Then I expect that element "categoryCardHeading(2)" matches the text "/food"
        Then I scroll to element "categoryCard(3)" until its visible
        Then I expect that element "categoryCard(3)" becomes visible
        Then I expect that element "categoryCardHeading(3)" matches the text "/life"

    @CategoryCard
    Scenario: I can see all modules of category card
        Then I wait on element "categoryCard(1)" for 2000ms to exist
        Then I scroll to element "categoryCard(1)" until its visible
        Then I expect that element "categoryCard(1)" becomes visible
        Then I expect that element "categoryCardHeading(1)" is visible
        Then I expect that element "category_card_feature_article(1)" is visible
        Then I expect that element "category_card_feature_article_quote(1)" is visible
        Then I expect that element "category_card_feature_article_title(1)" is visible
        Then I expect that element "category_card_feature_article_readmore(1)" is visible
        Then I expect that element "category_card_feature_article_image(1)" is visible
        Then I expect that "get_category_card_article_list_count(1)" is not less than 2
    
    @CategoryCard
    Scenario: I can verify articles in category card belongs to same category
        Then I wait on element "category_card_ByName(Body)" for 2000ms to exist
        Then I scroll to element "category_card_ByName(Body)" until its visible
        Then I expect that element "category_card_ByName(Body)" becomes visible
        Then I expect that "get_category_of_article_category_card(Body)" is equal to "Body" 
    
    @CategoryCard @this
    Scenario: I can navigate to Category page by clicking title of acategory card
        Then I wait on element "category_card_ByName(Body)" for 2000ms to exist
        Then I scroll to element "categoryCardHeading(1)" until its visible
        Then I expect that element "categoryCardHeading(1)" becomes visible
        When I click on the element "categoryCardHeading(1)"
        When I wait for url path to endswith "/category/body"
        Then I expect that the title contains "Body" 

    @TagContainer @prod_checklist
    Scenario: I can see Tag container.
        Then I wait on element "tagContainer" for 2000ms to exist
        Then I scroll to element "tagContainer" until its visible
        Then I expect that element "tagContainer" becomes visible
        Then I expect that element "tagContainerHeadline" is visible

    @TagContainer @this
    Scenario: I can see all modules of Tag container.
        Then I wait on element "tagContainer" for 2000ms to exist
        Then I scroll to element "tagContainer" until its visible
        Then I expect that element "tagContainer" becomes visible
        Then I expect that element "tagContainerHeadline" is visible
        Then I expect that "tagContainerHeadline" is at left of "tagContainer"
        Then I expect that "tagContainerHeadline" is at top of "tagContainer"
        Then I expect that "get_Number_Of_Articles_In_TagContainer_card" is not less than 1
        Then I expect that element "tagContainer_view_more_link" is visible
        Then I expect that element "tagContainer_view_more_text" matches the text "View more articles"
    
    @TagContainer @this
    Scenario: I can go to lag landing page by clicking 'View More Article' of tag container.
        Then I wait on element "tagContainer" for 2000ms to exist
        Then I scroll to element "tagContainer" until its visible
        Then I expect that element "tagContainer" becomes visible
        When I click on the element "tagContainer_view_more_link"
        When I click on the element "tagContainer_view_more_link"
        When I wait for url path to contains "/tag"
        Given I am on page "tag"
        Then I expect that element "tag_content" becomes visible

    @Series @prod_checklist
    Scenario: I can see Series Card.
        Then I wait on element "series" for 2000ms to exist
        Then I scroll to element "series" until its visible
        Then I expect that element "series" becomes visible
        Then I expect that "getNumberOfArticlesInSeriesCard" is not less than 1
    
    @Series
    Scenario: I can see all modules of Series Card.
        Then I wait on element "series" for 2000ms to exist
        Then I scroll to element "series" until its visible
        Then I expect that element "series" becomes visible
        Then I expect that element "series_card_title" becomes visible
        Then I expect that element "series_card_subtitle" becomes visible
        Then I expect that "series_card_title" is at left of "series"
        Then I expect that "series_card_title" is at top of "series"
        Then I expect that element "series_card_smart_link" becomes visible
        Then I expect that "series_card_smart_link" is at left of "series"
        Then I expect that "series_card_smart_link" is at bottom of "series"
        Then I expect that "getNumberOfArticlesInSeriesCard" is not less than 2

    @Series
    Scenario: I will get redirected to respected article by clicking article card of Series Card.
        Then I wait on element "series" for 2000ms to exist
        Then I scroll to element "series" until its visible
        Then I expect that element "series" becomes visible
        Then I expect that element "seriesCardArticle_by_Index(1)" does exist
        Then I expect that element "seriesCardArticle_by_Index_image(1)" does exist
        Then I expect that element "seriesCardArticle_by_Index_title(1)" does exist
        Then I expect that element "seriesCardArticle_by_Index_card_count(1)" does exist
        When I click on the element "seriesCardArticle_by_Index_link(1)"
        When I wait for url path to contains "/articles"
        Given I am on page "article"
        Then I expect that element "article_hero" becomes visible

    @Series
    Scenario: I will get redirected to respected series page by clicking View Series link of Series Card.
        Then I wait on element "series" for 2000ms to exist
        Then I scroll to element "series" until its visible
        Then I expect that element "series" becomes visible
        Then I expect that element "series_card_smart_link" is visible
        When I click on the element "series_card_smart_link"
        When I wait for url path to contains "/series"
        Given I am on page "series"
        Then I expect that element "series_content" becomes visible

    @TagSearcher @prod_checklist
    Scenario: I can see Tag search.
        Then I wait on element "tagSearcherContainer" for 2000ms to exist
        Then I scroll to element "tagSearcherContainer" until its visible
        Then I expect that element "tagSearcherContainer" becomes visible
        Then I expect that element "tagSearcherHeading" matches the text "Show me more..."
        Then I expect that element "tagSearcherTagList" is visible
        Then I expect that "getTagSearcherTagCount" is not less than 1

    @TagSearcher
    Scenario: I can use all functionality of Tag searcher card.
        Then I wait on element "tagSearcherContainer" for 2000ms to exist
        Then I scroll to element "tagSearcherContainer" until its visible
        Then I expect that element "tagSearcherContainer" becomes visible
        Then I click on the element "tagSearcherTagList_Tags(1)"
        Then I expect that element "tagSearcher_article_list" becomes visible
        Then I expect that "get_TagSearcher_article_count" is not less than 1
        Then I expect that "getTagSearcherTagCount" is not greater than 1
        Then I click on the element "tagSearcherTagList_Tags(1)"
        Then I expect that element "tagSearcher_article_list" becomes not visible
    
    @InstagramFeed @prod_checklist
    Scenario: I can see Instagram Carousel or feed.
        Then I wait on element "instagramFeedContainer" for 2000ms to exist
        Then I scroll to element "instagramFeedContainer"
        Then I expect that element "instagramFeedContainer" becomes visible 
        Then I expect that element "instagramFeed_Insta_BrandCard" is visible
        Then I expect that element "instagramFeed_Fb_BrandCard" is visible
        Then I expect that "get_InstagramFeed_IGFeedCard_Count" is not less than 4
        
    @InstagramFeed @desktop
    Scenario: I can see follow when hover Instagram brand card.
        Then I wait on element "instagramFeedContainer" for 2000ms to exist
        Then I scroll to element "instagramFeedContainer"
        Then I expect that element "instagramFeed_Insta_BrandCard" becomes visible
        When I move to element "instagramFeed_Insta_BrandCard" with an offset of 0,0
        Then I expect that element "instagramFeed_Insta_BrandCard_Link_followText" is visible
        Then I expect that element "instagramFeed_Insta_BrandCard_Link_followText" matches the text "follow"
    
    @InstagramFeed 
    Scenario: I get redirected to Instagram page when i click on brand card.
        Then I wait on element "instagramFeedContainer" for 2000ms to exist
        Then I scroll to element "instagramFeedContainer"
        Then I expect that element "instagramFeed_Insta_BrandCard" becomes visible 
        When I click on the element "instagramFeed_Insta_BrandCard_Link"
        When I wait for url is "get_InstagramLink_Contentful"
        Then I expect that the url is "get_InstagramLink_Contentful"
    
    @InstagramFeed @desktop
    Scenario: I can see follow when hover Facebook brand card.
        Then I wait on element "instagramFeedContainer" for 2000ms to exist
        Then I scroll to element "instagramFeedContainer"
        Then I expect that element "instagramFeed_Fb_BrandCard" is visible
        When I move to element "instagramFeed_Fb_BrandCard" with an offset of 0,0
        Then I expect that element "instagramFeed_Fb_BrandCard_Link_followText" is visible
        Then I expect that element "instagramFeed_Fb_BrandCard_Link_followText" matches the text "follow"

    @InstagramFeed 
    Scenario: I get redirected to Facebook page when click on brand card.
        Then I wait on element "instagramFeedContainer" for 2000ms to exist
        Then I scroll to element "instagramFeedContainer"
        Then I expect that element "instagramFeed_Fb_BrandCard" becomes visible 
        When I click on the element "instagramFeed_Fb_BrandCard_Link"
        When I wait for url is "get_FacebookLink_Contentful"
        Then I expect that the url is "get_FacebookLink_Contentful"