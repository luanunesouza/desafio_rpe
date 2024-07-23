describe('Teste de API GET', () => {
    it('Retornando uma lista de usuários', () => {
      cy.request('GET', 'https://reqres.in/api/users?page=2')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('data');
          expect(response.body.data).to.be.an('array');
          expect(response.body.data.length).to.be.greaterThan(0);
        });
    });
  });