const ENV = {
    BASE_URL : "https://staging.myapp.com",
    TIMEOUT : 5000,
    RETRIES : 2,
    BROWSER: "Chrome"
}

const EXPECTED_RESPONSE = {
    status : 200, 
    body : {
        user : {role: "admin" , active: true}
    }
}


const config ={
    // Base URL
    baseUrl : 'https://locolhost:300',
    apiBaseUrl : 'https://locolhost:300/api',

    testUser: {
        username : 'testuser@example.com',
        password : 'SecurePass123'
    },
    // logging
    loginLevel : 'info',
    
    // Retry configuration
    retryCount : parseInt(process.env.retryCount || '3' , 10)
};