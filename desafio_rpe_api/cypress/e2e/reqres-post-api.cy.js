describe('Teste de API POST', () => {
    it('Criando um usuário novo', () => {
      const newUser = {
        name: 'Luan Nunes',
        job: 'Quality Assurance'
      };
  
      cy.request('POST', 'https://reqres.in/api/users', newUser)
        .then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.have.property('name', newUser.name);
          expect(response.body).to.have.property('job', newUser.job);
          expect(response.body).to.have.property('id');
          expect(response.body).to.have.property('createdAt');
        });
    });
  });