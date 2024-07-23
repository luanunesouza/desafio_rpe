describe('Incluir transação', () => {
    it('Incluir uma transação para um cliente cadastrado com sucesso', () => {
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
        
        // Acessar Menu QA > Transações > Incluir
        cy.get('[title="QA"]').focus().click();

        cy.contains('Transações').focus()

        cy.contains('Incluir').get('a[href="/desafioqa/incluirVenda"]').focus().click({force: true});

        // Valida que o texto "Incluir Transacao" foi exibido
        cy.contains('Incluir Transacao').should('be.visible');        
       
        // Selecionar um cliente
        cy.get('#cliente').select('Luan Felipe');

        // Incluir um valor de Transação
        cy.get('input[id="valorTransacao"]').type('100000');

        // Clicar no botão "Salvar"
        cy.get('#botaoSalvar').click({force: true});

        // Valida que o texto "Transação incluida com sucesso" foi exibido
        cy.contains('Transação incluída com sucesso', { timeout: 10000 }).should('be.visible');
    });
});