import { expect } from 'chai';
import { LoginService } from '../src/services/LoginService';
import { LoginResponse } from '../src/types/ServerestTypes';

describe('Testes de Login - ServeRest', () => {

    const loginService = new LoginService();

    it('Deve realizar login com sucesso', async () => {
        // Dados de teste
        const dadosLogin = {
            email: "fulano@qa.com",
            password: "teste"
        };

        // Ação
        const response = await loginService.realizarLogin(dadosLogin);
        
        // Validações
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('Login realizado com sucesso');
        
        // Validação extra do token
        const corpo = response.body as LoginResponse;
        expect(corpo.authorization).to.contain('Bearer');
        
        console.log('Sucesso! Token gerado:', corpo.authorization);
    });
});
