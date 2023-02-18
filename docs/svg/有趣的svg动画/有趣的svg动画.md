

#### 不知道你是否和我一样看到很多网站很酷炫的动画而觉得别人很牛，其实有些动画只是区区几行代码就能实现。


### 一.例如 下面的雪糕动画

import IceAnimate from './IceAnimate';

<IceAnimate /> 


:::tip

下面是这个雪糕动画的具体代码

:::

import CodeBlock from '@theme/CodeBlock';
import IceAnimateCpn from '!!raw-loader!./IceAnimate';
import IceAnimateCss from '!!raw-loader!./IceAnimate/style.css';

<CodeBlock language="tsx">{IceAnimateCpn}</CodeBlock>
<CodeBlock language="css">{IceAnimateCss}</CodeBlock>

:::caution

svg标签的前置知识可以阅读一下`SVG精髓  第2版`这本书，这里就不展开讲解了。

:::

:::tip

如果你的英文还可以，可以阅读w3c的文档
[w3c svg属性](https://www.w3.org/TR/SVG/painting.html#StrokeDasharrayProperty)

:::

当你第一眼看到这个就是一个svg标签的时候，肯定会非常的惊讶，原来svg这么牛逼嘛。


细心的小伙伴可能发现，上面的css中都给这些元素设置上了 `stroke-dasharray和stroke-dashoffset属性`。其实这就是这个动画核心，也是下面要讲解的部分。

### stroke-dasharray 

MDN上的解释是`指定短划线和缺口的长度`,其实就是把一条线按照数值进行划分，一块实现，一块间隔。


精髓的是当[stroke-dasharray](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray) 设置成对应的线的长度，再通过[stroke-dashoffset](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dashoffset)也是这条线的长度，就刚好把线拉出了我们的可视区域。


### 动画过程

绿色代表可视的线，红色代表是不可见的线， ``stroke-dasharray: 200px; stroke-dashoffset:200px;的情况``
![动画过程](./assets/%E6%95%B4%E4%B8%AA%E5%8A%A8%E7%94%BB%E8%BF%87%E7%A8%8B.png)



### 补充

那我们怎么知道每一条路径的长度呢?

```
function getPathLength(className) {
  let stickEl = document.getElementsByClassName(className)[0];
  let stickLength = stickEl.getTotalLength();
  console.log(className + "Length=", stickLength);
}
```

### 总结:

`stroke-dasharray 和stroke-dashoffset`配合可以实现一个物体沿着某个路径的入场动画


### 思考:

1. 那当我们的`stroke-dashoffset`的值大于`stroke-dasharray`设置的值会是怎么样的呢？
2. [electron官网动画也是同理](https://www.electronjs.org/zh/)








