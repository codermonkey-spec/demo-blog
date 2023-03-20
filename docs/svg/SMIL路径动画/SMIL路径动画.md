### 一. 你是否知道路径动画?

如果你和我一样好奇它是怎么实现的，可以继续看下去。

### 二.我们先从一个例子出发

下面是一个飞机沿着一条路径进行飞行的<a to="/svgPage/fly">demo</a>

:::tip

下面是这个飞机动画的具体代码

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import FlyComs from '!!raw-loader!../../../src/pages/svgPage/fly';
import FlyCss from '!!raw-loader!../../../src/pages/svgPage/fly/style.css';

<Tabs>
  <TabsItem value="apple" label="react代码" default>
    <CodeBlock language="tsx">{FlyComs}</CodeBlock>
  </TabsItem>
  <TabsItem value="orange" label="css代码">
    <CodeBlock language="css">{FlyCss}</CodeBlock>a
  </TabsItem>
</Tabs>

### 三 路径动画的核心

`animateMotion`这个标签就是路径动画的核心，它指定了要移动的物体，和移动的路径。

`animateMotion` 其实是`SMIL语言`中的其中一个标签，更多标签可以自行查阅。

```tsx
<animateMotion
  href="#plane" // 指定要移动的物体
  dur="5s"
  rotate="auto" // 让物体自动转向
  repeatCount="indefinite"
>
  {/* 要移动的路径  */}
  <mpath href="#planePath"></mpath>
</animateMotion>
```

是不是很简单，阿基米德说过给我一个支点就能翘起地球，这里只要给我们一条路径，就能指定任意一个物体沿着它移动

### 四. 思考

下面的一个心跳案例留给读者思考，原理也是一样

<a to="/svgPage/heart">心跳动画</a>
