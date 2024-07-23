describe('Fazer Login', () => {
    it('Fazer Login no site provaqa', () => {
        
        // Redimensionando a tela
        cy.viewport(1024, 768)
        
        // Acessando a pagina inicial
        cy.visit("http://provaqa.prc.rpe.tech:9080/desafioqa/")

        // Preencha o campo "Login"
        cy.get('input[name="username"]').type('admin');

        // Preencha o campo "Password"
        cy.get('input[name="password"]').type('admin');
        
        // Clique no botão "Sign In"
        cy.get('button[type="submit"]').click(); 
        
        // Valida que o texto "Bem vindo ao Desafio" foi exibido
        cy.contains('Bem vindo ao Desafio').should('be.visible');        
    });
});