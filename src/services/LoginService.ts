import request from 'supertest';
import { LoginPayload } from '../types/ServerestTypes';

const API_URL = 'https://serverest.dev';

export class LoginService {
    async realizarLogin(credenciais: LoginPayload) {
        return request(API_URL)
            .post('/login')
            .send(credenciais)
            .set('Accept', 'application/json');
    }
}
