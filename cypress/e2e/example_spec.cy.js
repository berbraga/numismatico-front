describe('Teste de Login', () => {
  it('Preenche o formulário de login e faz login', () => {
    cy.visit('http://localhost:9000/')
    cy.title().should('include', 'Numismatico')
    cy.fixture('example').then((data) => {
      cy.get('[data-cy=email-input]', { timeout: 10000 }).should('be.visible').type(data.user.email)
      cy.get('[data-cy=password-input]', { timeout: 10000 }).should('be.visible').type(data.user.password)
    })
    cy.get('button[type=submit]').click()
    cy.url().should('include', '/dashboard/portfolio')
    cy.wait(2000) // Pausa de 2 segundos
  })

  it('Faz login usando comando customizado', () => {
    cy.visit('http://localhost:9000/')
    cy.title().should('include', 'Numismatico')
    cy.fixture('example').then((data) => {
      cy.login(data.user.email, data.user.password)
      cy.url().should('include', '/dashboard/portfolio')
    })
    cy.wait(6000) // Pausa de 2 segundos
  })

  it('Mostra erro ao tentar fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:9000/')
    cy.get('[data-cy=email-input]').type('usuario_invalido@exemplo.com')
    cy.get('[data-cy=password-input]').type('senha_errada')
    cy.get('button[type=submit]').click()
    cy.get('.error-message').should('be.visible').and('contain', 'Credenciais inválidas') // Altere para o seletor e a mensagem de erro corretos
    cy.wait(6000) // Pausa de 2 segundos
  })

  it('Mostra erro ao deixar campos obrigatórios em branco', () => {
    cy.visit('http://localhost:9000/')
    cy.get('button[type=submit]').click()
    cy.get('[data-cy=email-input]').then($input => {
      if ($input[0].validity.valueMissing) {
        cy.wrap($input).should('have.attr', 'aria-invalid', 'true')
      }
    })
    cy.get('[data-cy=password-input]').then($input => {
      if ($input[0].validity.valueMissing) {
        cy.wrap($input).should('have.attr', 'aria-invalid', 'true')
      }
    })
    cy.get('.error-message').should('be.visible').and('contain', 'Os campos são obrigatórios') // Altere para o seletor e a mensagem de erro corretos
    cy.wait(6000) // Pausa de 2 segundos
  })
})
