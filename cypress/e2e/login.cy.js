/// <reference types= 'cypress' />


  it('Login', () => {
    cy.visit('http://scs.simply-connect.31g.co.uk/auth/login')
    cy.get(('#email')).type('shawad.babar@31g.co.uk{enter}')
    cy.get(('#password')).type('B@bar314{enter}')
    cy.get(':nth-child(1) > .c-sidebar__link').click()
    cy.contains('Add Appointment').click()
    cy.wait(2000)
    cy.get('#appointment > .c-modal__dialog > .c-modal__content > .c-modal__footer > .c-modal__cancel').click()
  })
