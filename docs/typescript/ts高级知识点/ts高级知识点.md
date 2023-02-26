
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

### 1.2 `Partial<Object>`

将Object中的每个字断都标记为可选的

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






