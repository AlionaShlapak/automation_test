describe('The Search Page', () => {
    it('successfully loads', () => {
        cy.visit('/search') // change URL to match your dev URL
        cy.contains('Log In').first().click()
        cy.get('[name="email"]').type('alena.shlapak.2000@gmail.com')
        cy.get('[name="password"]').type('Password11+')
        cy.get ('button[type="submit"]').click()
        cy.url().should('not.include', 'login')
        cy.log('Login successful')
        cy.get('.styles_header__searchInput__bz4Gn').type('session')
        cy.get('.styles_header__searchSvg__3ANQa').click()
        cy.get('.styles_eventCardTablet__Cr6Iy').first().should('be.visible')
    })
})
