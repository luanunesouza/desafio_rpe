describe('Teste de API DELETE', () => {
    it('Deletando um usuário', () => {
      cy.request('DELETE', 'https://reqres.in/api/users/2')
        .then((response) => {
          expect(response.status).to.eq(204);
        });
    });
  });