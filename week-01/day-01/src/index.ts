const sum = (a: number, b: number): number => {
  return a + b;
};

const isEven = (n: number): boolean => {
  return n % 2 === 0;
};

const greet = (name: string): string => {
  return "Hello, ${name}";
};

console.log(sum(5, 3));
console.log(isEven(4));
console.log(greet("Berke"));
