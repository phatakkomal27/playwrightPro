//decorator
function Sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
  console.log("Class Sealed!");
}

@Sealed
class ReportService {
  type = "Internal";
  constructor(public title: string) {
    console.log(`ReportService created with title: ${title}`);
  }
}

const report = new ReportService("Annual Financial Report");

