describe('Incluir cliente', () => {
    it('Incluir um cliente no site provaqa', () => {
        cy.viewport(1024, 768)
        cy.visit("http://provaqa.prc.rpe.tech:9080/desafioqa/")

        // Preencha o campo "Login"
        cy.get('input[name="username"]').type('admin');

        // Preencha o campo "Password"
        cy.get('input[name="password"]').type('admin');
        
        // Clique no botão "Sign In"
        cy.get('button[type="submit"]').click();

        // Valida que o texto "Bem vindo ao Desafio" foi exibido
        cy.contains('Bem vindo ao Desafio').should('be.visible');
        
        // Acessar Menu QA > Clientes > Incluir
        cy.get('[title="QA"]').focus().click();

        cy.contains('Clientes').focus()

        cy.contains('Incluir').focus().click({force: true});

        // Preencha o campo "Nome"
        cy.get('input[name="nome"]').type('Luan Felipe');

        // Preencha o campo "CPF"
        cy.get('input[id="cpf"]').type('12345678910');

        // Selecione "Ativo" ou "Inativo"
        cy.get('select[id="status"]').select('Ativo');

        // Preencha o campo "Saldo disponível"
        cy.get('input[id="saldoCliente"]').type('100000');
        
        // Clique no botão "Salvar"
        cy.get('#botaoSalvar').click({force: true});

        cy.wait(2000);
        
        cy.get('#botaoSalvar').click({force: true});

        // Valida que o texto "Cliente cadastrado com sucesso" foi exibido
        cy.contains('Cliente cadastrado com sucesso', { timeout: 20000 }).should('be.visible');        
    });
});