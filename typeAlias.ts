// type alias

type StringOrNumber = String | Number;
type Student = {
  id: number;
  name: string;
};

const studentDetails = (id: StringOrNumber, name: string) => {
  console.log(`Student ${name} has id: ${id}`);
};

// studentDetails(123, "le xuan tung");

const greet = (user: Student) => {
  console.log(`${user.name} has id: ${user.id}`);
};

greet({ name: "John", id: 123 });
