//add graph ql queries here

export const HOME_QUERY = `
homepageCollection{
    items{
        pageModulesCollection{
            items{
                __typename
            }
        }
    }
}`;

