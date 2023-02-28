
### 前置知识

`keyof运算符`

`keyof`运算符获取对象所有键的类型，合并为一个字符串字面量类型

``` ts

type personInfoType = {
  name: string;
  age: number;
};

// personInfoKeys 对应的类型就为 "name" | "age"
type personInfoKeys = keyof personInfoType

```

## 一. 内置的映射类型

### 1.1 Record<Keys,Values>

键的类型为`Keys`,值的类型为`Values`的对象

``` ts

type personInfoType = {
  name: string;
  age: number;
};

type infoType = "xiaoming" | "xiaohong";

const data: Record<infoType, personInfoType> = {
  xiaoming: {
    name: "小明",
    age: 18,
  },
  xiaohong: {
    name: "小红",
    age: 9,
  },
};

console.log(data);

```

:::caution

下面是Record的源码实现
``` ts
type MyRecord<K extends keyof any,T> = {
  [P in K]:T
}
```
:::


### 1.2 `Partial<Object>`

将Object中的每个字段都标记为可选的

``` ts
type personInfoType = {
  name: string;
  age: number;
};

const data:Partial<personInfoType> = {
  name:"coder",
  age:18
}

```

:::caution
``` ts
type MyPartial<T> = {
  [k in keyof T]?:T[k]
}
```
:::

### 1.3 `Required<Object>`

将Object中的每个字段标记为必填

``` ts
type personInfoType = {
  name: string;
  age: number;
};

const data:Required<personInfoType> = {
  name:"coder",
  age:18
}

```

:::caution
``` ts
type MyRequired<T> = {
  [K in keyof T]:T[K]
}
```
:::

### 1.4 `Readonly<Object>`

将object中的每个字段标记为只读

:::caution
``` ts
type MyReadonly<T> = {
  readonly [K in keyof T]:T[K]
}
```
:::

### 1.5 Pick<Object,Keys>

返回只含指定Keys的值类型

``` ts
type personInfoType = {
  name: string;
  age: number;
};

const data:Pick<personInfoType,"name"> = {
  name:"coder",
}

```

:::caution
``` ts
type MyPick<T,P extends keyof T> = {
 [K in P]:T[K]
}
```
:::

### 1.6 Omit<Object,Keys>

返回不包含指定Keys的值类型

``` ts
type personInfoType = {
  name: string;
  age: number;
};

const data:Omit<personInfoType,"name"> = {
  age:18
}

```

:::caution

``` ts
type MyOmit<T,P extends keyof T> = {
 [K in keyof T  as K extends P ? never : K]:T[K]
}
```
:::





