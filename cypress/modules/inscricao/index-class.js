class Inscricao {
  rolarAteORodape() {
    cy.scrollTo("bottom");
    cy.get("footer").should("be.visible");
  }

  inscreverEmail(email) {
    cy.get('#susbscribe_email').clear().type(email);
    cy.get('#subscribe').click();
  }

  verificarSeInscricaoFoiEfetuadaComSucesso() {
    cy.contains("You have been successfully subscribed!").should("be.visible");
  }
}

export default new Inscricao();