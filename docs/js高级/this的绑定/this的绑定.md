### 一. 预备知识

```
this是在运行时被绑定的
```

### 二.this 绑定的规则

2.1 默认绑定

函数的独立调用就是默认绑定的例子 (独立的函数调用我们可以理解成函数没有被绑定到某个对象上进行调用)

```js
function foo() {
  console.log(this); // window
}

foo();
```

```js
function test1() {
  console.log(this); // window
  test2();
}

function test2() {
  console.log(this); // window
  test3();
}

function test3() {
  console.log(this); // window
}

test1();
```

```js
var obj = {
  name: "coder",
  bar: function () {
    console.log(this); // window
  },
};

function foo(func) {
  func();
}

foo(obj.bar);
```

```js
function foo() {
  console.log(this); // {name: 'coder1', foo: ƒ}
}

var obj1 = {
  name: "coder1",
  foo: foo,
};

var bar = obj1.foo;
bar(); // window
```

2.2 隐式绑定

也就是它的调用位置中，是通过某个对象发起的函数调用

```js
function foo() {
  console.log(this); // {name: 'coder', foo: ƒ}
}
var obj = {
  name: "coder",
  foo: foo,
};

obj.foo();
```

```js
function foo() {
  console.log(this); // {name: 'coder1', foo: ƒ}
}

var obj1 = {
  name: "coder1",
  foo: foo,
};

var obj2 = {
  name: "coder2",
  foo2: obj1,
};

obj2.foo2.foo();
```

2.3 显示绑定

通过 call,apply,bind 绑定都是显示绑定

```js
function foo() {
  console.log(this);
}

foo.call(window); // window
foo.call({ name: "cobe" }); // {name:"cobe"}
foo.call(123); // Number {123}
```

2.4 new 绑定

JavaScript 中的函数可以当做一个类的构造函数来使用，也就是使用 new 关键字。

```js
使用new关键字来调用函数是，会执行如下的操作:

1.创建一个全新的对象;
2.这个新对象会被执行prototype连接;
3.这个新对象会绑定到函数调用的this上(this的绑定在这个步骤完成);
4.如果函数没有返回其他对象，表达式会返回这个新对象;
```

```js
function Person() {
  console.log(this); // Person()
  this.name = "kobe";
}

const p = new Person();
```

### 三.this 绑定的优先级

```
1.默认规则的优先级最低

2.显示绑定优先级高于隐式绑定

3.new绑定优先级高于隐式绑定

4.new绑定优先级高于bind

```

### 四. this 四种绑定规则之外的情况

```js
function foo() {
  console.log(this);
}

foo.call(null); // window
foo.call(undefined); // window
var bar = foo.bind(null);
bar(); // window
```

```js
setTimeout(function () {
  console.log(this); // window
}, 1000);
```

```js
var obj = document.getElementById("box");
obj.onclick = function () {
  console.log(this); // dom节点
};
```

### 五. 箭头函数的使用

```
1. 箭头函数不会绑定this、arguments属性
2. 箭头函数不能作为构造函数来使用(不能和new一起来使用，会抛出错误);
```

注意点：`如果一个箭头函数的上层也是箭头函数，那么它会继续向上查找，因为箭头函数中的this可以理解成一种查找规则，箭头函数本身没有this`

```js
var obj = {
  data: [],
  getData: function () {
    setTimeout(() => {
      console.log(this); // obj对象
    }, 1000);
  },
};

obj.getData();
```

```js
var obj = {
  data: [],
  getData: () => {
    setTimeout(() => {
      console.log(this); // window
    }, 1000);
  },
};

obj.getData();
```
