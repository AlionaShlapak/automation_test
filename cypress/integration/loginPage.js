class LoginPage {
    EmailField = '[name="email"]'
    PasswordField = '[name="password"]'
    SubmitButton = 'button[type="submit"]'


    enterEmailValue (email) {
        cy.get(this.EmailField).type( email )

        return this;
    }

    enterPasswordValue (password) {
        cy.get(this.PasswordField).type( password )

        return this;
    }

    clickSubmitButton () {
        cy.get(this.SubmitButton).click()

        return this;
    }
}
export default LoginPage;