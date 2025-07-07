function* greetGenerator() {
  yield "Hello";
  yield "Hi";
  yield "Namaste";
}

const greeter = greetGenerator();

console.log(greeter.next());
console.log(greeter.next());