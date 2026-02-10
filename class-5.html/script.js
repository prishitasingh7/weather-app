console.log("Before");

const fun2 = () => {
  console.log("Set timeout 1");
  let timeInFuture = Date.now() + 7000;

  while (Date.now() < timeInFuture) {}
  console.log("after while");
};

const fun1 = () => console.log("hello");

setTimeout(fun1, 2000);
setTimeout(fun2, 1000);

console.log("After");


Before
After
Set timeout 1
after while
hello

