//import DashboardPage from './DashboardPage';
//import PackagesPage from './PackagesPage';
describe('The Subscriptions page', () => {
    before(() => {
        cy.visit('/') // change URL to match your dev URL
        cy.get('[name="email"]').type('alena.shlapak.2000@gmail.com')
        cy.get('[name="password"]').type('Password11+')
        cy.get ('button[type="submit"]').click()
        cy.url().should('include','search')
        cy.log('Login successful')
    })
    beforeEach (() => {
        cy.get('.styles_unstyled__1uIk4.styles_header__burgerIcon__37eEK').click()
        cy.contains('Subscriptions').click()
    })

    it('successfully loads', () => {
        //const dashboard = new DashboardPage();
        //const packages = new PackagesPage();
        // cy.get('.styles_unstyled__1uIk4.styles_header__burgerIcon__37eEK').click()
        //dashboard.openHamburgerMenu()
        //cy.contains('Subscriptions').click()
        //packages.openPackagesPage()
        // comment
        cy.url().should('include', 'packages')
        cy.get('.styles_marketplaceButton__imageTablet__2hf5y').click()
        //cy.get('.styles_header__searchToggleImage__2frvW').click()
        //cy.get('input[name=\'On Demand\']').check({force: true})
        //cy.get('button[class*=\'Apply\']').click()
        //cy.get('.styles_button__1ee1i.undefined.undefined.styles_bordered__2RwPe').should('be.visible').and('form-horizontal')
    })

    it ('has BookSession buttons', () => {
        cy.get('.styles_button__1ee1i.styles_subscriptions__headerBtn__3nYfB').first().should('be.visible')
        cy.get('.styles_marketplaceButton__imageTablet__2hf5y').click()
    })

    it ('directs podder to podpros sessions', () => {
        cy.get('.styles_button__1ee1i.styles_subscriptions__headerBtn__3nYfB').first().click()
        cy.url().should('include', 'upcoming')

    })
})