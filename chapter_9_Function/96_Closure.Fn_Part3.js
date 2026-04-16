function makeRetryTracker(max) {
    let attempts =0;

    return function tryAgain(testName){
        attempts++;
        if(attempts > max){
            return `${testName}  exceeded max retires (${max}) `;
        }
        return `Attempt ${attempts}/${max} for ${testName}`;
    }
}

let retry = makeRetryTracker(3);
console.log(retry('Login'));
console.log(retry('Login'));
console.log(retry('Login'));
console.log(retry('Login'));