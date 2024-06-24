describe('Create Appointment on AIMA', () => {

    it('Create appointment to USER 1 using Agendamento', () => {
        cy.visit('https://aima.gov.pt/pt/contactos')
        cy.get('#input-firstname').type('USER 1 - NAME')
        cy.get('#input-lastname').type('USER 1 - NAME')
        cy.get('#txtEmailContact').type('USER 1 - MAIL')
        cy.get('#input-phone').type('USER 1 - PHONE')
        cy.get('#input-subject').select('Agendamento')
        cy.get('#txtMessage').type('- Assunto a agendar: Entrevista para autorização de residência ( visto D2 )\n' +
            '- Nome: USER 1 NAME\n' +
            '- Passaporte: [PASSPORT NUMBER]\n'+
            '- Visto: [VISA NUMBER] \n'+
            '- Data de Nascimento: [BIRTHDAY DATE]\n' +
            '- Nacionalidade: Brasileiro\n' +
            '- Contacto: +351 [PHONE NUMBER]\n' +
            '- Área preferencial para ser atendido: Sem preferência. A com agenda mais próxima')
        cy.get('.uk-checkbox').click()
        cy.get('#btnSubmit').click()
        cy.get('.yw-success > p').should('have.text','O formulário foi enviado com sucesso.')
    })

    it('Create appointment to USER 2 Using Agendamento', () => {
        cy.visit('https://aima.gov.pt/pt/contactos')
        cy.get('#input-firstname').type('USER 2 - NAME')
        cy.get('#input-lastname').type('USER 2 - NAME')
        cy.get('#txtEmailContact').type('USER 2 - MAIL')
        cy.get('#input-phone').type('USER 2 - PHONE')
        cy.get('#input-subject').select('Agendamento')
        cy.get('#txtMessage').type('- Assunto a agendar: Entrevista para autorização de residência ( visto D5 )\n' +
            '- Nome: USER 2 NAME\n' +
            '- Passaporte: [PASSPORT NUMBER]\n'+
            '- Visto: [VISA NUMBER] \n'+
            '- Data de Nascimento: [BIRTHDAY DATE]\n' +
            '- Nacionalidade: Brasileiro\n' +
            '- Contacto: +351 [PHONE NUMBER]\n' +
            '- Área preferencial para ser atendido: Sem preferência. A com agenda mais próxima')
        cy.get('.uk-checkbox').click()
        cy.get('#btnSubmit').click()
        cy.get('.yw-success > p').should('have.text','O formulário foi enviado com sucesso.')
    })

    it('Create appointment to USER 1 using Autorizacao de Residencia', () => {
        cy.visit('https://aima.gov.pt/pt/contactos')
        cy.get('#input-firstname').type('USER 1 - NAME')
        cy.get('#input-lastname').type('USER 1 - NAME')
        cy.get('#txtEmailContact').type('USER 1 - MAIL')
        cy.get('#input-phone').type('USER 1 - PHONE')
        cy.get('#input-subject').select('Autorização de Residência')
        cy.get('#txtMessage').type('- Assunto a agendar: Entrevista para autorização de residência ( visto D2 )\n' +
            '- Nome: USER 1 NAME\n' +
            '- Passaporte: [PASSPORT NUMBER]\n'+
            '- Visto: [VISA NUMBER] \n'+
            '- Data de Nascimento: [BIRTHDAY DATE]\n' +
            '- Nacionalidade: Brasileiro\n' +
            '- Contacto: +351 [PHONE NUMBER]\n' +
            '- Área preferencial para ser atendido: Sem preferência. A com agenda mais próxima')
        cy.get('.uk-checkbox').click()
        cy.get('#btnSubmit').click()
        cy.get('.yw-success > p').should('have.text','O formulário foi enviado com sucesso.')
    })

    it('Create appointment to USER 2 using Autorizacao de Residencia', () => {
        cy.visit('https://aima.gov.pt/pt/contactos')
        cy.get('#input-firstname').type('USER 2 - NAME')
        cy.get('#input-lastname').type('USER 2 - NAME')
        cy.get('#txtEmailContact').type('USER 2 - MAIL')
        cy.get('#input-phone').type('USER 2 - PHONE')
        cy.get('#input-subject').select('Autorização de Residência')
        cy.get('#txtMessage').type('- Assunto a agendar: Entrevista para autorização de residência ( visto D5 )\n' +
            '- Nome: USER 2 NAME\n' +
            '- Passaporte: [PASSPORT NUMBER]\n'+
            '- Visto: [VISA NUMBER] \n'+
            '- Data de Nascimento: [BIRTHDAY DATE]\n' +
            '- Nacionalidade: Brasileiro\n' +
            '- Contacto: +351 [PHONE NUMBER]\n' +
            '- Área preferencial para ser atendido: Sem preferência. A com agenda mais próxima')
        cy.get('.uk-checkbox').click()
        cy.get('#btnSubmit').click()
        cy.get('.yw-success > p').should('have.text','O formulário foi enviado com sucesso.')
    })
})