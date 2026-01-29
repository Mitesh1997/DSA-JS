function reverse(n) {
  let rev = 0;
  n=Math.abs(n)
  while (n > 0) {
   let last = n % 10;
    rev = 10 * rev + last;
    n = Math.floor(n / 10);
  }
  return rev;
}
console.log(reverse(12345)); // 54321
