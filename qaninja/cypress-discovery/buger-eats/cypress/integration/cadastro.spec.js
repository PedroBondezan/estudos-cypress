import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {

    // before(function() {
    //     cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
    // })

    // beforeEach(function() {
    //     cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    // })

    // after(function() {
    //     cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
    // })

    // afterEach(function() {
    //     cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
    // })

    it('Usuário deve se tornar um entregador', () => {
        var deliver = {
            name: 'Pedro Botter Bondezan',
            cpf: '00000078910',
            email: 'pedro.pedro@gmail.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '02739020',
                street: 'Rua Amaraji',
                number: '62',
                details: 'Casa',
                district: 'Itaberaba',
                city_uf: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'

        }

        var signup = new SignupPage()
        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('CPF incorreto', () => {

        var deliver = {
            name: 'Pedro Botter Bondezan',
            cpf: '000000789AA',
            email: 'pedro.pedro@gmail.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '02739020',
                street: 'Rua Amaraji',
                number: '62',
                details: 'Casa',
                district: 'Itaberaba',
                city_uf: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'

        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })


})