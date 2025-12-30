import dotenv from 'dotenv';

// Carrega as variáveis do arquivo .env
dotenv.config();

export const CONFIG = {
    // Se não achar no .env, usa a URL padrão (segurança)
    API_URL: process.env.BASE_URL || '' 
};
