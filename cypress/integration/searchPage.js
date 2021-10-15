class SearchPage {
    openSessionDetailsPageButton = '(//button[text()="Show Details"])[2]'
    purchaseSessionModalWindow = '.styles_eventBuy__h6__1n8yW'

    openSessionDetailsPage() {
        cy.xpath(this.openSessionDetailsPageButton).click()

        return this;
    }

    assertPurchaseSessionModalWindowIsVisible() {
        cy.get(this.purchaseSessionModalWindow).should('be.visible')

        return this;
    }

    assertSearchPageIsOpened () {
        cy.url().should('include', 'search')
    }
}

export default SearchPage;