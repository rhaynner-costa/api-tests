import request from 'supertest';
import { LoginPayload } from '../types/ServerestTypes';
import { CONFIG } from '../utils/Config';

export class LoginService {
    async realizarLogin(credenciais: LoginPayload) {
        // Use CONFIG.API_URL em vez da string fixa
        return request(CONFIG.API_URL) 
            .post('/login')
            .send(credenciais)
            .set('Accept', 'application/json');
    }
}
