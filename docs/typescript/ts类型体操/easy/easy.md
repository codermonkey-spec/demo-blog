ts 类型体操主要是用来让开发者更加熟悉 ts，真实的业务中没有那么复杂

## 一. ts 文章补充

:::tip
类型体操补充

https://ghaiklor.github.io/type-challenges-solutions/zh/
:::

下面就让我们来写 ts 类型体操吧

## 二.类型体操

### 2.1 Pick<T, K>

从类型 T 中选择出属性 K，构造成一个新的类型。

```ts
type MyPick<T, K extends keyof T> = {
  [U in K]: T[U];
};
```

### 2.2 `Readonly<T>`

该 `Readonly` 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 `readonly` 所修饰。

```ts
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
```

### 2.3 `TupleToObject<typeof tupple>`

传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。

```ts
type TupleToObject<T extends readonly (string | number)[]> = {
  [K in T[number]]: K;
};
```

### 2.4 `First<T>`

它接受一个数组 T 并返回它的第一个元素的类型。

```ts
// 方法一
type First<T extends any[]> = T extends [] ? never : T[0];

// 方法二
type First<T extends any[]> = T extends [infer first, ...any[]] ? first : never;

// 获取数组中最后一项的类型
方法一;
type Last<T extends any[]> = T extends [...infer L, infer last] ? last : never;

方法二;
type Last<T extends any[]> = T extends [...args: any[], last: infer U]
  ? U
  : never;
```

### 2.5 `Length<T>`

创建一个通用的 Length，接受一个 readonly 的数组，返回这个数组的长度。

```ts
type Length<T extends readonly unknown[]> = T["length"];
```

### 2.6 `Exclude <T, U>`

从联合类型 T 中排除 U 的类型成员，来构造一个新的类型。

```ts
type MyExclude<T, U> = T extends U ? never : T;
```

### 2.7 `If<C extends boolean, T, F>`

实现一个 IF 类型，它接收一个条件类型 C ，一个判断为真时的返回类型 T ，以及一个判断为假时的返回类型 F。 C 只能是 true 或者 false， T 和 F 可以是任意类型。

```ts
type If<C extends boolean, T, F> = C extends true ? T : F;
```

### 2.8 `Concat<T extends any[], U extends any[]>`

在类型系统里实现 JavaScript 内置的 Array.concat 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

```ts
type Concat<T extends any[], U extends any[]> = [...T, ...U];
```

### 2.9 `Parameters<T extends (...args: any[]) => any>`

实现内置的 Parameters 类型

```ts
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer U
) => any
  ? U
  : never;
```
