
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Ваш базовый URL
    timeout: 1000, // Время ожидания ответа
    headers: { 'Content-Type': 'application/json' } // Заголовки по умолчанию
});

export default axiosInstance;
