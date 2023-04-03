# typescript学习笔记文档

---

## 1.概念

### TypeScript 是什么

TypeScript 是 JavaScript 的一个超集，可以在任何支持 JavaScript 的地方运行。它扩展了 JavaScript，增加了可选的静态类型、类、接口等特性，使得开发者能够更加规范地进行开发，并且更易于维护

---

### TypeScript 的优点

1. 静态类型：在编码时就能发现类型错误，避免运行时出现错误。
2. 类和接口：提供了更加规范的面向对象编程方式。
3. 代码提示和自动补全：编辑器能够更好地理解代码，提供更好的代码提示和自动补全。
4. 编译时错误检查：编译时会检查语法错误和类型错误，避免将错误带入生产环境。
5. 更好的可读性：由于增加了静态类型等特性，使得代码更加易于阅读和理解。

---

### TypeScript 的基础语法

#### 声明变量

``` typescript
let name: string = 'Tom';
const age: number = 18;
```

#### 函数

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

#### 接口

```typescript
interface Person {
  name: string;
  age: number;
  sayHello(): void;
}

class Student implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHello(): void {
    console.log(`Hello, I'm ${this.name}, ${this.age} years old.`);
  }
}
```

#### 泛型

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let result = identity<string>('hello');
```

---

### TypeScript 编译器

#### 是什么？

TypeScript 编译器是一个命令行工具，用于将 TypeScript 代码编译为 JavaScript 代码。安装 TypeScript 后，可以使用以下命令进行编译：

```typescript
tsc yourfile.ts
```

#### tsconfig.json

tsconfig.json 是 TypeScript 的配置文件，用于指定 TypeScript 编译器的配置。可以指定编译选项、文件列表等。

简单的配置文件如下：

```typescript
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

#### TypeScript 与编辑器

由于 TypeScript 提供了更多的语言特性和类型信息，编辑器能够更好地理解代码，提供更好的代码提示和自动补全。常用的编辑器包括 VSCode、WebStorm 等。

****

## 接口

在 TypeScript 中，接口（Interface）是用来描述一个对象的结构和类型的。接口定义了一个对象应该有哪些属性和方法，以及它们的类型。接口可以让代码更加规范化、易于维护和扩展。

#### 基本定义

下面是一个简单的接口示例:

```typescript
interface Person {
  name: string;
  age: number;
  sayHello(): void;
}

let p: Person = {
  name: 'Tom',
  age: 18,
  sayHello() {
    console.log(`Hello, I'm ${this.name}, ${this.age} years old.`);
  }
};
```

在这个例子中，我们定义了一个 `Person` 接口，它有 `name`、`age` 和 `sayHello` 三个属性。然后我们创建了一个实现了 `Person` 接口的对象 `p`，并且给它的 `name`、`age` 和 `sayHello` 属性赋值。

需要注意的是，接口只定义了对象的结构，不关心对象的实现。也就是说，接口只描述了对象应该有哪些属性和方法，但不关心这些属性和方法的具体实现。

除了上述示例中的属性和方法，接口还可以包含可选属性、只读属性、索引签名、继承等特性。下面是一些例子：

---

#### **可选属性**

```typescript
interface Person {
  name: string;
  age?: number;
}

let p1: Person = {
  name: 'Tom'
};

let p2: Person = {
  name: 'Jerry',
  age: 18
};
```

在这个例子中，我们给 `Person` 接口的 `age` 属性加上了 `?` 符号，表示该属性是可选的。因此，`p1` 可以不传递 `age` 属性，而 `p2` 则必须传递 `age` 属性。

---

#### 只读属性

```typescript
interface Person {
  readonly name: string;
  age: number;
}

let p: Person = {
  name: 'Tom',
  age: 18
};

p.age = 20; // 可以修改 age 属性
p.name = 'Jerry'; // 编译时会报错，不能修改 name 属性
```

在这个例子中，我们给 `Person` 接口的 `name` 属性加上了 `readonly` 关键字，表示该属性是只读的。因此，对象 `p` 的 `name` 属性不能被修改，而 `age` 属性可以被修改。

---

#### 索引签名

```typescript
interface Dictionary {
  [key: string]: string;
}

let d: Dictionary = {
  name: 'Tom',
  age: '18'
};
```

在这个例子中，我们定义了一个 `Dictionary` 接口，它有一个字符串索引签名 `[key: string]: string`，表示对象可以有任意数量的字符串属性，并且它们的值都必须是字符串类型。

---

#### 继承

```typescript
interface Person {
  name: string;
  age: number;
}

interface Teacher extends Person {
  subject: string;
}

let t: Teacher = {
  name: 'Amy',
  age: 30,
  subject: 'Math'
};
```

接口可以继承其他的接口来增强扩展性，在 TypeScript 中，接口之间也可以通过 `extends` 关键字进行继承。这意味着一个接口可以继承另一个接口的所有属性和方法。

---

#### 总结

接口是 TypeScript 中非常重要的概念，可以让我们更好地定义对象的结构和类型，并在编译时进行类型检查。接口的继承、可选属性和只读属性等特性，可以让我们更加灵活地定义接口，满足不同的需求

***

#### 拓展

##### 函数类型的接口

在 TypeScript 中，我们可以使用接口来定义函数类型。例如：

```typescript
interface AddFunc {
  (a: number, b: number): number;
}

let add: AddFunc = function(a: number, b: number): number {
  return a + b;
};
```

在这个例子中，我们定义了一个函数类型的接口 `AddFunc`，该接口表示函数接受两个参数 `a` 和 `b`，并返回一个数字类型的值。然后，我们定义了一个变量 `add`，它的类型是 `AddFunc`，也就是一个符合 `AddFunc` 接口定义的函数。

---

##### 索引签名

在 TypeScript 中，我们可以使用索引签名来定义具有动态属性名的接口。例如：

```typescript
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['hello', 'world'];
let str: string = arr[0];
```

在这个例子中，我们定义了一个具有动态属性名的接口 `StringArray`，该接口表示一个字符串数组，索引类型为数字，属性值类型为字符串。然后，我们定义了一个变量 `arr`，它的类型是 `StringArray`，并将其赋值为一个字符串数组。我们还定义了一个变量 `str`，它的类型为字符串，并从数组 `arr` 中取出第一个元素。

----

##### 类类型接口

在 TypeScript 中，我们可以使用接口来描述类的结构，从而限制该类的实例只能包含指定的属性和方法。例如：

```typescript
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();

  setTime(d: Date): void {
    this.currentTime = d;
  }
}
```

在这个例子中，我们定义了一个类类型接口 `ClockInterface`，该接口描述了一个时钟的结构，包括当前时间和设置时间的方法。然后，我们定义了一个类 `Clock`，它实现了 `ClockInterface` 接口，并实现了该接口中的所有属性和方法。由于 `Clock` 类实现了 `ClockInterface` 接口，因此它的实例只能包含 `currentTime` 属性和 `setTime` 方法。

***

## 数据基本类型

TypeScript 基本类型包括：

- 布尔类型（boolean）
- 数字类型（number）
- 字符串类型（string）
- 数组类型（Array）
- 元组类型（Tuple）
- 枚举类型（Enum）
- Any 类型（any）
- Void 类型（void）
- Null 和 Undefined 类型（null、undefined）
- Never 类型（never）
- Object 类型（object）

下面分别介绍这些基本类型。

### 布尔类型

布尔类型表示逻辑值，它只有两个取值：`true` 和 `false`。

```typescript
let isDone: boolean = false;
```

---

### 数字类型

数字类型表示数值，它可以是整数或浮点数。

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let floating: number = 3.14;
```

---

### 字符串类型

字符串类型表示文本数据，它可以使用单引号或双引号表示

```typescript
let str: string = 'hello';
let str2: string = "world";
```

---

### 数组类型

数组类型表示一组相同类型的值的集合。在 TypeScript 中，有两种方式定义数组类型。

```typescript
// 方式一：使用类型加 []
let list: number[] = [1, 2, 3];

// 方式二：使用 Array<类型>
let list2: Array<string> = ['hello', 'world'];

```

---

### 元组类型

元组类型表示一个已知元素数量和类型的数组，各元素的类型不必相同。

```typescript
let tuple: [string, number] = ['hello', 10];
```

---

### 枚举类型

枚举类型用于表示一组相关的常量值。

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
```

在这个例子中，我们定义了一个枚举类型 `Color`，它包含三个常量值：`Red`、`Green` 和 `Blue`。然后，我们定义了一个变量 `c`，它的类型是 `Color`，并将其赋值为 `Color.Green`。

---

### Any 类型

Any 类型表示任意类型的值，可以使用 Any 类型来解决一些类型检查的问题，但是使用 Any 类型也会降低代码的可读性和可维护性。

```typescript
let value: any = 'hello';
value = 10;
value = true;
```

---

### Void 类型

Void 类型表示没有任何值，通常用于函数没有返回值的情况。

```typescript
function log(message: string): void {
  console.log(message);
}
```

---

### Null 和 Undefined 类型

Null 和 Undefined 类型分别表示空和未定义的值。

```typescript
let n: null = null;
let u: undefined = undefined;
```

### Never类型

Never 类型表示永远不会返回结果的类型。

```typescript
function error(message: string): never {
  throw new Error(message);
}
```

---

### Object 类型

Object 类型表示非原始类型的值

---

### 补充

除了基本类型，TypeScript 还有其他一些类型，比如：

- 类型推断类型（Type Inference Type）
- 类型别名（Type Alias）
- 联合类型（Union Types）
- 交叉类型（Intersection Types）
- 类型断言（Type Assertion）
- 接口（Interfaces）
- 类（Classes）
- 函数（Functions）
- 泛型（Generics）

#### 类型推断类型

类型推断类型（Type Inference Type）是 TypeScript 中的一种特殊类型，它可以根据变量的赋值自动推断出该变量的类型。

```typescript
let num = 10; // 推断为 number 类型
let str = 'hello'; // 推断为 string 类型
let flag = true; // 推断为 boolean 类型
```

---

#### 类型别名

类型别名（Type Alias）用于给一个类型起一个新的名称。

```typescript
type Name = string;
type Age = number;

let name: Name = 'Tom';
let age: Age = 20;
```

#### 联合类型

联合类型（Union Types）表示一个值可以是几种类型之一。

```typescript
let value: string | number = 'hello';
value = 10;
```

在这个例子中，我们定义了一个变量 `value`，它的类型是 `string | number`，表示它可以是一个字符串或一个数字。

---

#### 交叉类型

交叉类型（Intersection Types）表示同时具有多个类型的值。

```typescript
type Person = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
  salary: number;
};

type Manager = Person & Employee;

let manager: Manager = {
  name: 'Tom',
  age: 30,
  company: 'Microsoft',
  salary: 10000,
};

```

在这个例子中，我们定义了三个类型：`Person`、`Employee` 和 `Manager`，`Person` 和 `Employee` 分别表示人和雇员，`Manager` 是 `Person` 和 `Employee` 的交叉类型，表示同时具有人和雇员的属性。然后，我们定义了一个变量 `manager`，它的类型是 `Manager`，并赋值为一个同时具有人和雇员属性的对象。

---

#### 类型断言

类型断言（Type Assertion）用于在某些情况下告诉编译器变量的实际类型。

```typescript
let value: any = 'hello';
//第一种写法 
let length: number=value as string
//第二种
let length: number = (<string>value).length;
```

***

## 泛型

TypeScript 中的泛型（Generics）是一种在编程语言中支持使用参数化类型的技术。它允许我们编写可以接受不同类型参数的代码，而不需要重复编写相似的代码。泛型在 TypeScript 中是一种高度抽象的工具，它可以应用于函数、类、接口等多种场景。

以下是 TypeScript 中泛型的一些特性：

### 泛型函数

在函数定义时使用泛型类型参数来代表传入的参数类型和返回值类型，使得函数可以适用于不同类型的参数和返回值。下面是一个例子：

```typescript
typescriptCopy codefunction identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("hello world");
console.log(output); // 输出 "hello world"
```

### 泛型类

类也可以使用泛型类型参数来定义它的属性和方法。在实例化时，通过传递类型参数来确定类中属性和方法的类型。下面是一个例子：

```typescript
typescriptCopy codeclass GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myNumber = new GenericNumber<number>();
myNumber.zeroValue = 0;
myNumber.add = function(x, y) {
  return x + y;
};

console.log(myNumber.add(1, 2)); // 输出 3
```

### 泛型约束

在定义泛型时，可以使用泛型约束来指定类型参数必须满足的条件。泛型约束可以是某个属性、方法或接口等。下面是一个例子：

```typescript
typescriptCopy codeinterface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // 需要满足 length 属性的存在
  return arg;
}

loggingIdentity("hello world"); // 输出 11
loggingIdentity([1, 2, 3]); // 输出 3
```

在上面的例子中，我们定义了一个泛型约束 `T extends Lengthwise`，表示 `T` 必须满足 `Lengthwise` 接口的定义，即必须包含 `length` 属性。

泛型是 TypeScript 中非常重要的特性之一，它可以帮助我们编写更加通用和灵活的代码。掌握泛型的基本概念和使用方法，可以提高我们的编程效率和代码质量。