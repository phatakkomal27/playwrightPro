//generic concept

function identityWithDataTypeName(name : string) : string {
    console.log(name);
    return name;
}

function identityWithoutDataTypeName<T>(arg: T): T {
    console.log(arg);
    return arg;
}

let output1 = identityWithDataTypeName("Hello, TypeScript!");
let output2 = identityWithoutDataTypeName<string>("Hello, Generics!");



