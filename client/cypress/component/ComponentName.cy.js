describe('Testing demo', () => {
    it('Visits the home page and click the button', () => {
        cy.get('#test1-btn').click();
        cy.get('#test1-result').contains('clicked');
    });
});
