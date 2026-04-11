function retry (testName, maxRetries =3, delay =1000){
    console.log(`Retering ${testName}  up to ${maxRetries} time ${delay} ms Apart`);
}

retry('Login');
retry('Checkout', 6);
retry('API Test', 2, 500);