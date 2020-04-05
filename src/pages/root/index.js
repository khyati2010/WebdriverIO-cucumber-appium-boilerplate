import SailthruHelper from "../../helper/sailthru.helper";
import GraphqlHelper  from "../../helper/graphql.helper";
import navigationModule  from "./navigation.module";
import sailthruPopupModule  from "./sailthru_popup.module";
import cookieConsentModule from "./cookie_consent.module";
import searchModule  from "./search.module";
import footerModule  from "./footer.module";
import featuredArticleModule  from "./featured_article.module";
import articleBlockModule from "./article_block.module";
import seariesCardModule from "./series_card.module";
import articleListModule from "./article_list.module";
import commonModule from "./common.module";

export default class RootPage{
    
    /*header */
    header() { return '[class*="Header"]'; }
        
    /* footer */
    footer() { return '[class*="Footer__Row"]';}

    /* articles on page */
    articles_on_page(){return 'a[href^="/articles"]'};

    constructor() {
        this.stHelper = new SailthruHelper();
        this.gqHelper = new GraphqlHelper();
    }

    baseUrl(){
        return browser.options.baseUrl
    }

    open(path) {
        browser.url(path);
    }

    /**
      * @method getUserFromSailthru
      * @returns string
      * @description fetch user from sailthru
      */
    verifyUserInSailthru(email){
        let user = browser.call(()=>{
            return this.stHelper.getUser(email);
        })

        if(user != null && user.keys.email == email){
            return user.keys.email;
        }
        return user.errormsg;
     }

    /** 
     * @method verify_Pagemodule_content_from_contentful()
     * @param {string} pageInView 
     * @return {void}
     * @description verify that all the content added in page module of current page is existing on FE
    */
    verify_pagemodule_content_from_contentful(pageInView){
       switch(pageInView){
           case 'category':
                {
                    let pageModules = this.gqHelper.get_page_module_of_category_page({"name":"Body"});
                    this.verify_pagemodule_content(pageModules);
                }
           break;
           case 'article':
                {
                    let urlOfArticle = '/' + browser.getUrl().split(browser.options.baseUrl)[1];
                    let pageModules = this.gqHelper.get_page_module_of_article_page(urlOfArticle);
                    this.verify_pagemodule_content(pageModules);
                }
           break;
           default:
           throw new Error('invalid page: '+pageInView);
       }
    }

    /** 
     * @method verify_pagemodule_content()
     * @param {Array<String>} modulesToVerify
     * @return Void
     * @throws {Error} When a module is not visible on page
     * @description verify that all the content added in page module of current page is existing on FE
    */
    verify_pagemodule_content(modulesToVerify){
        let module_map = new Map();
        modulesToVerify.forEach(mod => {
            if(module_map.get(mod)){
                module_map.set(mod, module_map.get(mod) + 1);
            }else{
                module_map.set(mod,1)
            }
        })

        if(this.title == 'Article Page'){module_map.set("Advertisement", (module_map.get("Advertisement")) ? module_map.get("Advertisement")+2 : 2);}
        if(this.title == 'Category Page'){module_map.set("Advertisement", (module_map.get("Advertisement")) ? module_map.get("Advertisement")+1 : 1);}
        for(let [module, count] of module_map){
            let countMatch = (count == $$(this[module.replace(/^\w/, c => c.toLowerCase())].call()).length)
           //let isVisible = browser.isVisible(this[module.replace(/^\w/, c => c.toLowerCase())].call())
           expect(countMatch).to
            .equal(true, `${count}:: ${module}  Expected element "${module}" to be matched with contentful`);
        }
    }

    /** 
     * @method get_category_of_any_article_on_page()
     * @return {string} name of category
     * @description fetch category name for an article on page
    */
    get_category_of_any_article_on_page(){
        let aUrl = $$(this.articles_on_page())[3].getAttribute('pathname');
        let cat = this.gqHelper.get_category_of_article({url: aUrl});
        return cat;
    }

    /** 
     * @method get_tags_of_any_article_on_page()
     * @return {Array[string]} name of tags
     * @description fetch tags list name for an article on page
    */
    get_tags_of_any_article_on_page(){
        let aUrl = $$(this.articles_on_page())[3].getAttribute('pathname');
        let tags = this.gqHelper.get_tags_of_article({url: aUrl}); 
        return tags;
    }
}

Object.assign(RootPage.prototype,
    navigationModule,
    searchModule,
    footerModule,
    featuredArticleModule,
    articleBlockModule,
    seariesCardModule,
    articleListModule,
    commonModule,
    sailthruPopupModule,
    cookieConsentModule);