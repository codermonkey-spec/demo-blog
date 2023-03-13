### 1.1 `MyReturnType<T extends (...args:any) => any>`

不使用 `ReturnType` 实现 `TypeScript` 的 `ReturnType<T>` 泛型。

```ts
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer U
  ? U
  : never;
```

### 1.2 `MyOmit<T, P extends keyof T>`

不使用 Omit 实现 TypeScript 的 `Omit<T, P>` 泛型。

```ts
type MyOmit<T, P extends keyof T> = {
  [K in keyof T as K extends P ? never : K]: T[K];
};
```

### 1.3 `DeepReadonly<T>`

实现一个通用的 `DeepReadonly<T>`，它将对象的每个参数及其子对象递归地设为只读。

```ts
type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>;
};
```

### 1.4 `TupleToUnion<T>`

实现泛型 `TupleToUnion<T>`，它返回元组所有值的合集。

```ts
type TupleToUnion<T extends unknown[]> = T[number];
```

### 1.5 `Pop<T>`

实现一个通用`Pop<T>`，它接受一个数组 T，并返回一个由数组 T 的前 length-1 项以相同的顺序组成的数组。

```ts
type Pop<T extends any[]> = T extends [...args: infer L, last: infer U]
  ? L
  : [];
```
