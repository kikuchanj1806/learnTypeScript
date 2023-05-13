// Class

export class employees {
  //   public name: string;
  //   private age: number;
  //   readonly male: boolean;

  //   constructor(name: string, age: number, male: boolean) {
  //     this.name = name;
  //     this.age = age;
  //     this.male = male;
  //   }

  constructor(
    public name: string,
    private age: number,
    readonly male: boolean
  ) {}

  print() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.male}`;
  }
}

const user = new employees("tung", 25, true);

console.log(user.print());
