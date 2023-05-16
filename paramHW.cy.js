describe("Form", () => {

    beforeEach(() => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();
    })
  
    const testX = (testData, expectedResult) =>

    function () {
        cy.get('[placeholder="Recipients"]').type(`${testData}`);
        cy.get('[placeholder="Recipients"]').should("contain.value", `${expectedResult}`);

        cy.get('[placeholder="Subject"]').type(`${testData}`);
        cy.get('[placeholder="Subject"]').should("contain.value", `${expectedResult}`);

        cy.get('[placeholder="Message"]').type(`${testData}`);
        cy.get('[placeholder="Message"]').should("contain.value", `${expectedResult}`);
    };

  it('Form', testX('testText', 'testText'))
  })