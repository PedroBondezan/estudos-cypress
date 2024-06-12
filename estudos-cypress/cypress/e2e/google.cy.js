describe ('Google', () => {
    it('open google', () => {
        //variaveis

        //execucao
        cy.visit('https://www.google.com.br/')
        cy.get("[id='APjFqb']").type('uol').type('{enter}')
        //validacao
        expect()
               
    });
})