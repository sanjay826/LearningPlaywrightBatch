const config={browser: "chrome", timeout: 3000};

// Modifying properties  - Allowed 
config.browser = "firefox";
config.timeout = 5000;
config.retries =2;
console.log(config);

// Re-assigning value not allowed 
//config = {browser : "Safari"};

let config1={browser: "chrome", timeout: 3000};

// Modifying properties  - Allowed 
config1.browser = "firefox";
config1.timeout = 5000;
config1.retries =2;
console.log(config1);

// Re-assigning value allowed 
config1 = {browser : "Safari"};
