const api = axios.create({
    baseURL: process.env.BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
