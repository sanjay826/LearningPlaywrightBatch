const MAX_ATTEMPTS = 5;

let attempt = 0;
let success = false;

do {
  attempt++;

  let randomValue = Math.random();

  if (randomValue > 0.6) {
    console.log(`Attempt ${attempt}: SUCCESS (Response 200 OK)`);
    success = true;
  } else {
    console.log(`Attempt ${attempt}: FAILED (Timeout/Error)`);
  }

} while (!success && attempt < MAX_ATTEMPTS);

if (success) {
  console.log(`API call PASSED after ${attempt} attempt(s).`);
} else {
  console.log(`API call FAILED after ${MAX_ATTEMPTS} attempts.`);
}