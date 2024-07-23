describe('Teste de API PUT', () => {
    it('Atualizando um usuário', () => {
      const updatedUser = {
        name: 'Luan Nunes',
        job: 'Jogador de Futebol'
      };
  
      cy.request('PUT', 'https://reqres.in/api/users/2', updatedUser)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('name', updatedUser.name);
          expect(response.body).to.have.property('job', updatedUser.job);
          expect(response.body).to.have.property('updatedAt');
        });
    });
  });