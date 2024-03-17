describe('Test in Cypress', () => {
  it('Open page for English in Wikipediia', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('a#js-link-box-en').click();
    
    cy.location().should((loc) =>{
      expect(loc.href).to.eq('https://en.wikipedia.org/wiki/Main_Page');
    })
  })
})