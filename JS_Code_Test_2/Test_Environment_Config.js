//Test Environment Config
/*In CI/CD pipelines, tests run against different environments. 
Write a JavaScript program using a switch statement that takes an 
environment name stored in a variable and prints the base URL, API key pattern,
 and timeout. Use const for fixed values and let for the assembled config.
Environments: dev, staging, qa, production/prod. Each has different base URL,
 API key prefix, timeout, and description.*/
let environment = "staging";
let config;
const timeout = 5000;
switch (environment) {
    case "dev":
        config = {  
            baseURL: "https://dev.api.testing.com",
            apiKeyPattern: "DEV-XXXX-XXXX",
            description: "Development environment for initial testing" 
        };
        break;
    case "staging":
        config = {
            baseURL: "https://staging.api.testing.com",
            apiKeyPattern: "STAGE-XXXX-XXXX",
            description: "Staging environment for pre-production testing"
        };
        break;
    case "qa":
        config = {  
            baseURL: "https://qa.api.testing.com",
            apiKeyPattern: "QA-XXXX-XXXX",
            description: "QA environment for final testing before production"
        };
        break;
    case "production":
    case "prod":
        config = {  
            baseURL: "https://api.testing.com",
            apiKeyPattern: "PROD-XXXX-XXXX",
            description: "Production environment for live testing"
        };
        break;  
    default:
        console.log("Invalid environment specified.");  
}
if (config) {
    console.log(`Environment: ${environment}`);
    console.log(`Base URL: ${config.baseURL}`);
    console.log(`API Key Pattern: ${config.apiKeyPattern}`);
    console.log(`Timeout: ${timeout} ms`);
    console.log(`Description: ${config.description}`);
}       