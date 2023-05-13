// interface

interface Person {
  name: string;
  age: number;
  speak(language: string): void;
  spend(amount: number): number;
}

const TungLx: Person = {
  name: "Tunglx",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amt: number): number {
    return amt;
  },
};

console.log(TungLx);

const helloPerson = (onePerson: Person) => {
  console.log(`Hello ${onePerson.name}`);
};

helloPerson(TungLx);

interface LabelValue {
  label: string;
  size: number;
}

function printLabel1(labelObj: LabelValue) {
  console.log(`Label: ${labelObj.label} - Size: ${labelObj.size}`);
}

let _object = { size: 10, label: "Size 10" };
printLabel1(_object);

interface CircleConfig {
  color?: string;
  radius?: number;
  diameter?: number;
}
function createCircle(config: CircleConfig): {
  color: string;
  radius: number;
  diameter: number;
} {
  let newCircle = { color: "white", radius: 100, diameter: 1000 };
  if (config.color) {
    newCircle.color = config.color;
  }
  if (config.diameter) {
    newCircle.diameter = 2 * config.radius;
  }
  return newCircle;
}

let circle = createCircle({ color: "black", radius: 150, diameter: 1 });
console.log("diameter: " + circle.diameter);
