class SessionDetailsPage {
    bookSessionButton = '(//button[text()="Book"])[1]'

    bookSession() {
        cy.xpath(this.bookSessionButton).click()

        return this;
    }
}

export default SessionDetailsPage;