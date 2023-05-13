// optional and  non null

const add = (a: number, b?: number) => {
  console.log(a + b!);
};

add(3, 4);
add(3);
