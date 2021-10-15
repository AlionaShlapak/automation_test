class PackagesPage {

    openPackagesPage() {
        cy.contains('Subscriptions').click()

        return this;
    }
}

export default PackagesPage;