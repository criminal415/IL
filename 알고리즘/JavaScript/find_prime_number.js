const input = 20;

function find_prime_number(number) {
  let prime_list = [];
  console.log(Array.from({ length: number - 1 }, (v, i) => i + 2));
  for (let n of Array.from({ length: number - 1 }, (v, i) => i + 2)) {
    let isPrime = true;
    console.log(n);
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      prime_list.push(n);
    }
  }
  return prime_list;
}

console.log(find_prime_number(input));
