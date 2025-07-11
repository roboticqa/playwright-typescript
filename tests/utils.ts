function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  
  return true;
}


function factorialRecursive(n: number): number {
  if (n < 0) throw new Error("Negative factorial");
  return n <= 1 ? 1 : n * factorialRecursive(n - 1);
}


function factorialIterative(n: number): number {
  if (n < 0) throw new Error("Negative factorial");
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

