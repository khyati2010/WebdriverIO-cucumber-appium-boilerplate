import checkContainsAnyText from '../support/check/checkContainsAnyText';
import checkIsEmpty from '../support/check/checkIsEmpty';
import checkContainsText from '../support/check/checkContainsText';
import checkCookieContent from '../support/check/checkCookieContent';
import checkCookieExists from '../support/check/checkCookieExists';
import checkDimension from '../support/check/checkDimension';
import checkElementExists from '../support/check/checkElementExists';
import checkEqualsText from '../support/check/checkEqualsText';
import checkEquals from '../support/check/checkEquals';
import checkModal from '../support/check/checkModal';
import checkOffset from '../support/check/checkOffset';
import checkProperty from '../support/check/checkProperty';
import checkSelected from '../support/check/checkSelected';
import checkTitle from '../support/check/checkTitle';
import checkUrl from '../support/check/checkURL';
import closeAllButFirstTab from '../support/action/closeAllButFirstTab';
import compareText from '../support/check/compareText';
import isEnabled from '../support/check/isEnabled';
import isVisible from '../support/check/isVisible';
import openWebsite from '../support/action/openWebsite';
import resizeScreenSize from '../support/action/resizeScreenSize';
import clearInputField from '../support/action/clearInputField';
import clickElement from '../support/action/clickElement';
//import clickElementWithJS from '../support/action/clickElementWithJS';
import closeLastOpenedWindow from '../support/action/closeLastOpenedWindow';
import deleteCookie from '../support/action/deleteCookie';
import dragElement from '../support/action/dragElement';
import focusLastOpenedWindow from '../support/action/focusLastOpenedWindow';
import handleModal from '../support/action/handleModal';
import moveToElement from '../support/action/moveToElement';
import pause from '../support/action/pause';
import pressButton from '../support/action/pressButton';
import {scroll, scrollUp, scrollDown, scrollUntilVisible} from '../support/action/scroll';
import selectOption from '../support/action/selectOption';
import selectOptionByIndex from '../support/action/selectOptionByIndex';
import setCookie from '../support/action/setCookie';
import setInputField from '../support/action/setInputField';
import setPromptText from '../support/action/setPromptText';
import submitForm from '../support/action/submitForm';
import checkClass from '../support/check/checkClass';
import checkFocus from '../support/check/checkFocus';
import checkInURLPath from '../support/check/checkInURLPath';
import checkIsOpenedInNewWindow from '../support/check/checkIsOpenedInNewWindow';
import checkModalText from '../support/check/checkModalText';
import checkNewWindow from '../support/check/checkNewWindow';
import checkFontProperty from '../support/check/checkFontProperty';
import checkTitleContains from '../support/check/checkTitleContains';
import checkURL from '../support/check/checkURL';
import checkURLPath from '../support/check/checkURLPath';
import checkWithinViewport from '../support/check/checkWithinViewport';
import isExisting from '../support/check/isExisting';
import waitFor from '../support/action/waitFor';
import waitForVisible from '../support/action/waitForVisible';
import checkIfElementExists from '../support/lib/checkIfElementExists';
import { checkGreaterThan, checkLessThan } from "../support/check/checkCompare";

/** Utility*/
import { wait, waitForURL, waitForURLPath, checkPositionInModule, checkItemInList } from "../support/lib/utils";

/** pages*/
import pages from '../pages/pageList';

const { Given,  Then, When } = require('cucumber');

var pageInView = 'homePage';

var getElement = function(element){
    let args = element.substring(element.indexOf('(')+1, element.indexOf(')')).split(',');
    return pages[pageInView][element.split('(')[0]](...args);
};

/**
 * Given Methods
 * 
 * 
 */
Given(
    /^I open the page "([^"]*)?"$/,
    ((pageName) => {
        pages[pageName].open();
        pageInView = pageName;
    })
)

Given(
    /^I am on page "([^"]*)?"$/,
    ((pageName) => {
        pageInView = pageName;
    })
)

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);

Given(
    /^the element "([^"]*)?" is( not)* visible$/,
    ((element, falseCase) => {
        isVisible(getElement(element), falseCase);
    })
);

Given(
    /^the element "([^"]*)?" is( not)* enabled$/,
    isEnabled
);

Given(
    /^the element "([^"]*)?" is( not)* selected$/,
    checkSelected
);

Given(
    /^the checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
);

Given(
    /^there is (an|no) element "([^"]*)?" on the page$/,
    checkElementExists
);

Given(
    /^the title is( not)* "([^"]*)?"$/,
    checkTitle
);

Given(
    /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
    compareText
);

Given(
    /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
);

Given(
    /^the (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
);

Given(
    /^the (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
);

Given(
    /^the (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
);

Given(
    /^the (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);

Given(
    /^the page url is( not)* "([^"]*)?"$/,
    ((falseCase, expectedUrl)=>{
        checkUrl(falseCase, expectedUrl);
    })
);

Given(
    /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
);

Given(
    /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
    checkCookieContent
);

Given(
    /^the cookie "([^"]*)?" does( not)* exist$/,
    checkCookieExists
);

Given(
    /^the element "([^"]*)?"( not)* have ([\d]+)px (width|height)$/,
    checkDimension
);

Given(
    /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
    checkOffset
);

Given(
    /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
    resizeScreenSize
);

Given(
    /^I have closed all but the first (window|tab)$/,
    closeAllButFirstTab
);

Given(
    /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
    checkModal
);

 /**
  * When Methods
  * 
  */
// When(
//     /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
//     clickElement
// );

When(
    /^I wait for debug$/,
    (() => {
        browser.debug();
    })
);

When(
    /^I "([^"]*)?" on current page$/,
    ((command) => {
        getElement(command);
    })
);

When(
    /^I refresh the page$/,
    (() => {
        browser.refresh();
    })
);


When(
    /^I navigate to "([^"]*)?" category$/,
    ((category) => {
        pages[pageInView].navigateToCategoty(category);
        pageInView = 'category';
        waitForURLPath('endswith', 'category/'+category);
    })
);

When(
    /^I wait for url path to (contains|endswith) "([^"]*)?"$/,
    ((command, path) => {
        waitForURLPath(command, path);
    })
);

When(
    /^I wait for url is( not)* "([^"]*)?"$/,
    ((falseCase, path) => {
        waitForURL(falseCase, getElement(path));
    })
);

When(
    /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
    ((method, type, element) => {
        clickElement(method, type, getElement(element));
    })
);

When(
    /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
    ((method ,value, element) => {
       setInputField(method, value, getElement(element));
    })
);

When(
    /^I clear the inputfield "([^"]*)?"$/,
    clearInputField
);

When(
    /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
    dragElement
);

When(
    /^I submit the form "([^"]*)?"$/,
    submitForm
);

When(
    /^I pause for (\d+)ms$/,
    pause
);

When(
    /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
    setCookie
);

When(
    /^I delete the cookie "([^"]*)?"$/,
    deleteCookie
);

When(
    /^I press "([^"]*)?"$/,
    pressButton
);

When(
    /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
    handleModal
);

When(
    /^I enter "([^"]*)?" into the prompt$/,
    setPromptText
);

When(
    /^I scroll to element "([^"]*)?"(?: with an offset of ([-+]?\d+),([-+]?\d+))*$/,
    ((selector, x, y) => {scroll(getElement(selector, x, y))})
);

When(
    /^I scroll to element "([^"]*)?" until its visible$/,
    ((selector) => {scrollUntilVisible(getElement(selector))})
);

When(
    /^I scroll (up|down)$/,
    ((position) => {
        switch(position){
            case 'up':
                scrollup()
                break;
            case 'down':
                scrollDown()
                break;
        }
    })
    
);

When(
    /^I close the last opened (window|tab)$/,
    closeLastOpenedWindow
);

When(
    /^I focus the last opened (window|tab)$/,
    focusLastOpenedWindow
);

When(
    /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
    selectOptionByIndex
);

When(
    /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
    selectOption
);

When(
    /^I move to element "([^"]*)?"(?: with an offset of ([-+]?\d+),([-+]?\d+))*$/,
    ((element, x, y) => {
        moveToElement(getElement(element), x, y);
    })
    
);

When(
    /^I wait for (\d+) (milliseconds|seconds|minuts)$/,
    ((time, unit) => {
        wait(time, unit);
    })
);

/**
 * Then Methods
 * 
 */

Then(
    /^I expect that list "([^"]*)?" does(not)* contains "([^"]*)?"$/,
    ((listOfElements, falseCase , itemsToCheck) => {
       checkItemInList(getElement(listOfElements), falseCase , itemsToCheck);
    })
)

Then(
    /^I expect that "([^"]*)?" is at (top|bottom|left|right) of "([^"]*)?"$/,
    ((innerModule, position, outerModule) => {
        checkPositionInModule(getElement(innerModule), position, (outerModule == 'site' || outerModule == 'page' ) ? outerModule :  getElement(outerModule));
    })
)

Then(
    /^I expect that the title is( not)* "([^"]*)?"$/,
    ((falseCase, expectedTitle) => {
    checkTitle(falseCase, expectedTitle)
    })
);

Then(
    /^I expect that the title( not)* contains "([^"]*)?"$/,
    ((falseCase, expectedTitle) => {
        checkTitleContains(falseCase, expectedTitle)
    })
);

Then(
    /^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,
    checkIfElementExists
);

Then(
    /^I expect that element "([^"]*)?" is( not)* visible$/,
    ((element, falseCase) => {
        isVisible(getElement(element), falseCase);
    })
);

Then(
    /^I expect that element "([^"]*)?" becomes( not)* visible$/,
    ((element, falseCase) => {
        waitForVisible(getElement(element), falseCase);
    })
);

Then(
    /^I expect that element "([^"]*)?" is( not)* within the viewport$/,
    ((element, falseCase) => {
        checkWithinViewport(getElement(element), falseCase);
    })  
);

Then(
    /^I expect that element "([^"]*)?" does( not)* exist$/,
    ((element, falseCase)=>{
        isExisting(getElement(element), falseCase);
    })
);

Then(
    /^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/,
    ((elementType, element, falseCase, expectedText) => {
        compareText(elementType, getElement(element), falseCase, expectedText)
    })
    
);

Then(
    /^I expect that (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    ((elementType, element, falseCase, expectedText) => {
        checkEqualsText(elementType, getElement(element), falseCase, expectedText)
    })
);

Then(
    /^I expect that (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
);

Then(
    /^I expect that (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?" on page "([^"]*)?"$/,
    ((type, element, not,valueToCheck, page) => {
        checkContainsText(type, getElement(element), not, valueToCheck);
    })
);

Then(
    /^I expect that (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
);

Then(
    /^I expect that "([^"]*)?" is( not)* equal to "([^"]*)?"$/,
    ((actual, falseCase, expected) => {
        checkEquals( getElement(actual), falseCase, expected);
    })
);

Then(
    /^I expect that "([^"]*)?" is( not)* equal to (\d+)$/,
    ((actual, falseCase, expected) => {
        checkEquals( getElement(actual), falseCase, expected);
    })
);

Then(
    /^I expect that "([^"]*)?" is( not)* less than (\d+)$/,
    ((actual, falseCase, expected) => {
        checkLessThan(getElement(actual), falseCase, expected);
    })
);

Then(
    /^I expect that "([^"]*)?" is( not)* greater than (\d+)$/,
    ((actual, falseCase, expected) => {
        checkGreaterThan(getElement(actual), falseCase, expected);
    })
);

Then(
    /^I expect that (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);

Then(
    /^I expect that the url is( not)* "([^"]*)?"$/,
    ((falseCase, expectedUrl)=>{
        checkUrl(falseCase, getElement(expectedUrl));
    })
);

Then(
    /^I expect that the path is( not)* "([^"]*)?"$/,
    ((falseCase, expectedPath)=>{
        checkURLPath(falseCase, expectedPath);
    })
);

Then(
    /^I expect the url to( not)* contain "([^"]*)?"$/,
    ((falseCase, expectedUrlPart) => {
        checkInURLPath(falseCase, expectedUrlPart);
    })
);

Then(
    /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
);

Then(
    /^I expect that the font( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkFontProperty
);

Then(
    /^I expect that checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
);

Then(
    /^I expect that element "([^"]*)?" is( not)* selected$/,
    checkSelected
);

Then(
    /^I expect that element "([^"]*)?" is( not)* enabled$/,
    isEnabled
);

Then(
    /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
    checkCookieContent
);

Then(
    /^I expect that cookie "([^"]*)?"( not)* exists$/,
    checkCookieExists
);

Then(
    /^I expect that element "([^"]*)?"( not)* have ([\d]+)px (width|height)$/,
    checkDimension
);

Then(
    /^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
    checkOffset
);

Then(
    /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
    checkClass
);

Then(
    /^I expect a new (window|tab) has( not)* been opened$/,
    checkNewWindow
);

Then(
    /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
    checkIsOpenedInNewWindow
);

Then(
    /^I expect that element "([^"]*)?" is( not)* focused$/,
    checkFocus
);

Then(
    /^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
    {
        wrapperOptions: {
            retry: 3,
        },
    },
    ((elem, ms, falseState, state)=>{
        waitFor(getElement(elem), ms, falseState, state)
    })
);

Then(
    /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
    checkModal
);

Then(
    /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
    checkModalText
);

Then(/^I expect that all content of page module in contentful are visible$/,
    (() => {
        pages[pageInView]['verify_pagemodule_content_from_contentful'](pageInView)
    })
);

