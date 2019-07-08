
@homepage @functional 
Feature: HomePage 
    As a user
    I can navigate to home page
    Home page should be loaded correctly
    I can view all modules on Home page

    Background: 
        Given I open the page "homePage"
       # When I "close_sailthru_overlay" on current page

    @HeroCarousel @prod_checklist
    Scenario: I can see hero carousel.
        Then I expect that element "heroCarousel" becomes visible

    @HeroCarousel
    Scenario: I can navigate to slides with left and right arrow button in hero carousel.
        Given the element "heroCarousel" is visible
        When I click on the element "heroCarouselRight"
        Then I expect that element "heroCarouselSlide(2)" is within the viewport
        When I click on the element "heroCarouselLeft"
        Then I expect that element "heroCarouselSlide(1)" is within the viewport
