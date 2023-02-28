
### 一. ts中的条件类型

#### ts中的条件类型和js中的三元表达式非常的像

下面是判断一个变量`data`是否是`string`类型，如果是就返回 `true`,不是就返回`false`

``` js

typeof data === "string" ? true : false

```

ts中判断一个类型是否是string类型

``` ts
type IsString<T> = T extends string ? true : false

type A = IsString<string> // true
type B = IsString<number> // false
```

### 二.条件分配

#### ts中的条件类型遵循分配律(没错就是我们初中学的乘法分配律)

下面举几个例子

``` ts
string extends T  ? A : B   等价于  string extends T ? A : B

(string | number) extends T ? A : B   等价于  (string extends T ? A : B) | (number extends T ? A : B)

```

下面是一个将我们传入的类型转成一个对应类型的数组类型的例子

``` ts
type ToArray<T> = T[]

type A:ToArray<string | number> // A的类型就是 (string | number)[]
```

但是这并不是我们想要的结果，我们可能想要的是 `string[] | number[]`, 这就需要使用`类型分配`了

``` ts

// 类型分配
type ToArray<T> = T extends unknown ? T[] : T[];

// 这里改成any类型也是可以的
type ToArray<T> = T extends any ? T[] : T[];
```


### 三.拓展

#### Without<T,U> 计算在T中而不在U中的类型

``` ts
// 这里的 T extends U 就是利用了分配原则
// 比如T为boolean | string | number,  U为boolean。

// (boolean extends boolean ? never : boolean) | 
//(string extends boolean ? never : string) | 
// (number extends boolean ? never : number)
type Without<T,U> = T extends U ? never : T;
```
