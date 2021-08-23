// Interceptor - Intercepting Requests and Responses.....creates log 

axios.interceptors.request.use(
    config =>{
        console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);
        return config;
    }, 
    error => {
        return Promise.reject(error);
    }
    );