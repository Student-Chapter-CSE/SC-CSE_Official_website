describe('Testing demo', () => {
    it('Visits the home page and click the button', () => {
        cy.visit('http://localhost:3000');
        cy.get('#test1-btn').click();
        cy.get('#test1-result').contains('clicked');
    });
});
