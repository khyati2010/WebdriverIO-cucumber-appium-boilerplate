import { HOME_QUERY } from "../doc/graphql-queries";
import * as gqQueries from '../doc/graphql-queries';
const fetch = require("node-fetch");
const gql = require("graphql-tag");
const ApolloBoost = require("apollo-boost");

const ApolloClient = ApolloBoost.default;

class GraphqlHelper {
    constructor(uri=browser.options['graphql_API_URL']) {
        this.client = new ApolloClient({uri, fetch});
    }

    async executeGetQuery(query, fetchPolicy, variables){
        return await this.client.query({query, fetchPolicy, variables});;
    }

    async getHomepagePageModules() {
        let response =  await this.executeGetQuery(gql`{${HOME_QUERY}}`, 'no-cache');
        let data = response.data.homepageCollection.items[0].pageModulesCollection.items.map((module) => {
            return '@'.concat(module.__typename);
        });
        data.push('@HeroCarousel');
        data.push('@InstagramFeed');
        return data;
    }
}

module.exports = GraphqlHelper;