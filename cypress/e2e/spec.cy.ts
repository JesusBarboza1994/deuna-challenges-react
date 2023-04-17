describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('check number of pokemon coincidence in search', () => {
    const pokemon = "char"
    cy.get('.search-input').type(`${pokemon}`)
    cy.get('.link').should('have.length', 6)

  })

  it('search charizard card', () => {
    const pokemon = "charizard"
    cy.get('.search-input').type(`${pokemon}`)
    cy.get('.card-title').should('have.text', 'Charizard')
  })

  it('check Venasaur properties', () => {
    cy.get('.link').eq(2).click()
  })

  it('check pagination', () => {
    let tarjetasPrimeraPagina;
    cy.get('.link').then((tarjetas) => {
      tarjetasPrimeraPagina = tarjetas
    })
    cy.get('.next').click()
    cy.get('.previous').click()
    cy.get('.link').should((tarjetas) => {
      expect(tarjetas.length).to.equal(tarjetasPrimeraPagina.length)
      for (let i = 0; i < tarjetas.length; i++) {
        expect(tarjetas[i].innerText).to.equal(tarjetasPrimeraPagina[i].innerText)
      }
    })
  })
})