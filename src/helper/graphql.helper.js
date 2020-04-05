import { HOME_QUERY, FB_INSTA_CARD_QUERY,
        _404_COLLECTION_TITLE_AND_COPY,
        ARTICLE_COUNT_BETWEEN_DATES,
        CATEGORY_OF_ARTICLE,
        PAGE_MODULE_OF_CATEGORY_PAGE, 
        ARTICLE_META_INFO, 
        PAGE_MODULE_OF_ARTICLE_PAGE,
        TAGS_OF_ARTICLE } from "../doc/graphql-queries";
import * as gqQueries from '../doc/graphql-queries';
import ApolloClient from 'apollo-boost';

const fetch = require("node-fetch");
const gql = require("graphql-tag");



class GraphqlHelper {
    constructor(uri=browser.config['graphql_API_URL']) {
        this.client = new ApolloClient({uri, fetch});
    }

    /**
     * @description execute graphql queries
     */
    executeGetQuery(query, fetchPolicy, variables){
        return browser.call(()=>{
            return this.client.query({query, fetchPolicy, variables});
        });
    }

    /**
     * @description fetch all modules of homepage
     * @returns {Array} array contains tags for each module
     */
    getHomepagePageModules() {
        let response = this.executeGetQuery(gql`{${HOME_QUERY}}`, 'no-cache');
        let data = response.data.homepageCollection.items[0].pageModulesCollection.items.map((module) => {
            return '@'.concat(module.__typename);
        });
        data.push('@HeroCarousel');
        data.push('@InstagramFeed');
        return data;
    }

    /**
     * @description fetch link for instagram and facebook furthermore page for brandcard
     * @returns {Object} {instagramUrl, facebookUrl}
     */
    get_Facebook_Instagram_BrandCard_Link(){
        let response = this.executeGetQuery(gql`{${FB_INSTA_CARD_QUERY}}`, 'no-cache');
        let data = {
            instagramUrl: response.data.homepageCollection.items[0].instagramCard.instagramUrl,
            facebookUrl: response.data.homepageCollection.items[0].facebookCard.facebookUrl
        }
        return data;
    }

    /**
     * @description fetch title and copy of 404 collection
     * @returns {Object} {title, copy}
     */
    get_404_collecion_title_and_copy(){
        let response = this.executeGetQuery(gql`{${_404_COLLECTION_TITLE_AND_COPY}}`, 'no-cache');
        let data = {
            title: response.data.contentType404Collection.items[0].title,
            copy: response.data.contentType404Collection.items[0].copy
        }
        return data;
    }

    /**
     * @description fetch total count of articles between dates
     * @param {string} date greater than eqaul
     * @param {string} date less than eqaul
     */
    get_article_count_bw_dates(date1, date2){
        let response = this.executeGetQuery(gql`${ARTICLE_COUNT_BETWEEN_DATES}`, 'no-cache',{d1: date1, d2: date2});
        let data = response.data.publicArticleCollection.total;
        return data;
    }

    /**
     * @description fetch category of an article
     * @param {string} condition condition to fetch article
     */
    get_category_of_article(condition){
        let response = this.executeGetQuery(gql`${CATEGORY_OF_ARTICLE}`, 'no-cache',{condition: condition});
        let data = response.data.publicArticleCollection.items[0].category.name;
        return data;
    }

    /**
     * @description fetch page modules of category page
     * @param {string} condition condition to fetch article
     */
    get_page_module_of_category_page(condition){
        let response = this.executeGetQuery(gql`${PAGE_MODULE_OF_CATEGORY_PAGE}`, 'no-cache',{condition: condition});
        let data = response.data.categoryCollection.items[0].pageModulesCollection.items.map(item => {
            return item.__typename;
        });
        return data;
    }

    /**
     * @description get article meta info from contentful
     * @param {string} url url to article
     */
    get_article_meta_info(url){
        let response = this.executeGetQuery(gql`${ARTICLE_META_INFO}`, 'no-cache',{url: url});
        let pubArticle = response.data.publicArticleCollection.items[0];
        let data = {
            written_by: pubArticle.authorsCollection.items[0].firstName,
            date: pubArticle.goLiveDate,
            category: pubArticle.category.name,
            tags: pubArticle.tagsCollection.items.map(tag => {return tag.name;}),
            article_content: pubArticle.article
        }
        return data;
    }

     /**
     * @description fetch ingredients of recipe
     * @param {string} url of recipe article
     */
    get_ingredient_of_recipe(url){
        let response = this.executeGetQuery(gql`${gqQueries.INGREDIENTS_OF_RECIPE}`, 'no-cache',{url: url});
        let data = response.data.publicArticleCollection.items[0].article.pageModulesCollection.items.filter(item => {
            return (item.ingredientCollection);
        })
        .map(item => {
            return {
                ingredientCollection: item.ingredientCollection.items,
                title: item.title
            }

        });
        return data;
    }

    /**
     * @description fetch page modules of article page
     * @param {string} url url to fetch article
     */
    get_page_module_of_article_page(url){
       let response = this.executeGetQuery(gql`${PAGE_MODULE_OF_ARTICLE_PAGE}`, 'no-cache',{url: url});
       let data = response.data.publicArticleCollection.items[0].article.pageModulesCollection.items.map(item => {
           return item.__typename;
       });
       return data;
    }

    /**
     * @description fetch tags of an article
     * @param {string} condition condition to filter article
     */
    get_tags_of_article(condition){
        let response = this.executeGetQuery(gql`${TAGS_OF_ARTICLE}`, 'no-cache',{condition: condition});
        let data = response.data.publicArticleCollection.items[0].tagsCollection.items.map(tag => tag['name']);
        return data;
    }
}

module.exports = GraphqlHelper;