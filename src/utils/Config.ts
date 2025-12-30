import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
    API_URL: process.env.BASE_URL || '' 
};
