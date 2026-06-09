const ENV = {
    BASE_URL: "https://staging.myapp.com",
    TIMEOUT: 5000,
    RETRIES: 2,
    BROWSER: "Chrome"
}

const EXPECTED_RESPONSE = {
    status: 200,
    body: {
        user: { role: "admin", active: true }
    }
}

const config = {
    // Base URLs
    baseUrl: 'http://localhost:3000',
    apiBaseUrl: 'http://localhost:3000/api',

    testUser: {
        username: 'testuser@example.com',
        password: 'SecurePass123',
    },

    // Logging
    logLevel: 'INFO', // DEBUG, INFO, WARN, ERROR

    // Retry configuration - we are using parseInt to convert the RETRY_COUNT environment variable from a string to an integer, and we are providing a default value of '3' if the environment variable is not set.
    retryCount: parseInt(process.env.RETRY_COUNT || '3', 10)//
};

