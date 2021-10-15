
import SignupPage from "./signupPage";
import SearchPage from "./searchPage";
import SessionDetailsPage from './sessionDetailsPage';
import LoginPage from './loginPage';
describe('The Search page', () => {
    it('successfully loads', () => {
        const signupPage = new SignupPage();
        const searchPage = new SearchPage();
        const sessionDetailsPage = new SessionDetailsPage();
        const loginPage = new LoginPage();

        cy.visit('https://stage.myfitpod.com/search') //
        searchPage.openSessionDetailsPage()
        sessionDetailsPage.bookSession()
        signupPage.assertSignUpUrl ()
        signupPage.openLoginPage()
        loginPage.enterEmailValue('alena.shlapak.2000@gmail.com')
        loginPage.enterPasswordValue('Password11+')
        loginPage.clickSubmitButton()
        searchPage.assertSearchPageIsOpened ()
        searchPage.assertPurchaseSessionModalWindowIsVisible()
    })
})