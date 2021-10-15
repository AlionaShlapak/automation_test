class SignupPage {
    openLoginPageButton = 'Log In Now'

    openLoginPage() {
        cy.contains(this.openLoginPageButton).click()

        return this;
    }

    assertSignUpUrl () {
        cy.url().should('include', 'signup').and('include','trainee')
    }
}

export default SignupPage;
