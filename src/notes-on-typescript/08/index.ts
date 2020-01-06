function getInt(a: string) {
  return parseInt(a);
}

type A = ReturnType<typeof getInt>; // => number

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

let id = 0;
function createUser(name: string, position: string) {
  return {
    id: id++,
    name,
    position,
    createdAt: new Date()
  };
}

type MyUser = MyReturnType<typeof createUser>;
// {
//   id: number,
//   name: string,
//   position: string,
//   createdAt: Date
// }

type AA = ReturnType<any>; // => any
type BB = ReturnType<never>; // => never
type CC = ReturnType<() => string>; //=> string

//
const None = 'None';

function none() {
  return { type: None };
}

type NoneType = ReturnType<typeof none>; // => {type: string}

const NoneB = 'None';

function noneB() {
  return { type: None as typeof NoneB };
}

type NoneBType = ReturnType<typeof noneB>; // => {type: "None"}

//
function identity<T>(a: T): T {
  return a;
}
// type IdentityTypeA = ReturnType<typeof identity>; // => {}
// type IdentityTypeB = ReturnType<typeof identity<number>>; // => syntax error!

interface Callable<ReturnType> {
  (...args: any[]): ReturnType;
}

type GenericReturnType<ReturnType, F> = F extends Callable<ReturnType>
  ? ReturnType
  : never;

type IdentityTypeA = GenericReturnType<string, typeof identity>; // => string
type IdentityTypeB = GenericReturnType<number, typeof identity>; // => number

//
interface GetInt {
  (a: string): number;
}
const getInt2: GetInt = a => parseInt(a);
type AAA = ReturnType<typeof getInt2>; // => number
