class DashboardPage {

    openHamburgerMenu() {
        cy.get('.styles_unstyled__1uIk4.styles_header__burgerIcon__37eEK').click()

        return this;
    }
}

export default DashboardPage;