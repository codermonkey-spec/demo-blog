### 一.react-spring 是一个 react 动画库

他能很好的通过数据的改变来实现动画

### 二. react-spring API 介绍

2.1 `useSpring`: 主要用在创建一个单独的动画

<a to="/react-animate/move-box">useSpring demo</a>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import MoveBox from '!!raw-loader!../../../src/pages/react-animate/move-box';

<Tabs>
  <TabsItem value="move-box" label="react代码">
    <CodeBlock language="tsx">{MoveBox}</CodeBlock>
  </TabsItem>
</Tabs>

#### useSpring api 讲解

- `react-spring`在动画绘制的时候需要使用`animated`元素，并且`animated.div(这里必须是html元素)`

- useSpring 可以接收对象或者是一个回调函数 (上面的例子就是接收一个对象)

1. 参数为 Object 时:

- 接收类型为 UseSpringProps 的对象
- 返回一个类型为 AnimatedValue 的对象
- 动画属性的变更可以通过外部 useState 控制，修改 state 通过 Ref 调整 reset 等属性，会执行相应动画

2. 参数为箭头函数返回 Object

- 箭头函数返回类型为 UseSpringProps 的对象

- 返回一个[AnimationValue, set, stop]数组

- 动画属性的变化只能通过 set 函数重新传入，可以通过 stop 方法提前结束动画

下面通过回调函数的形式来实现(实现的效果也是一样的)

import useSpringFuncCode from '!!raw-loader!./useSpringFunc';

<CodeBlock language="tsx">{useSpringFuncCode}</CodeBlock>

##### 2.2 `useSprings`:创建一组同时进行的动画

<a to="/react-animate/grow-width">useSprings demo</a>

import GrowWidth from '!!raw-loader!../../../src/pages/react-animate/grow-width';

<Tabs>
  <TabsItem value="GrowWidth" label="react代码">
    <CodeBlock language="tsx">{GrowWidth}</CodeBlock>
  </TabsItem>
</Tabs>

##### 2.3 `useSprings`参数讲解

`useSprings`：能够根据配置文件创建不同但却同时开始执行的 Spring 动画，相当于 useSpring 的复数版本，参数也非常类似，它接收两个参数

- 第一个参数 Number
  需创建的 Spring 的个数
  第二个参数有两种情况，与 useSpring 的参数、返回值都非常类似

- 类型为 Array

  接收 `Array<UseSpringProps>` 的对象数组，长度为第一个参数 Number
  返回 AnimationValues 对象的数组 springs，需通过 map 解构传入 animated 使用

- 类型为箭头函数

  - 接收参数 num，表示当前是第几个 Spring
  - 箭头函数返回 类型 UseSpringProps 的对象
  - 返回一个[AnimationValues， set, stop]
  - 动画属性的变化同样只能通过 set 函数重新传入，可以通过 stop 方法提前结束动画

##### 2.4 `useTrail`

`useTrail`:是在 useSprings 的基础上实现的，都是创建多个 Spring 动画，但 useSprings 创建的动画是同时执行，而 usetrail 创建的动画是按照顺序依次执行且动画的属性都是一个对象，它也接收两个参数

- 第一个参数 Number

  - 需创建的 Spring 的个数，与 useSprings 一致

- 第二个参数

  - 它只能接收一个对象作为所有 Spring 的动画属性，因此它创建的动画的属性都是一致的，细微不同可以在 animated 中使用时自己调整
    与 useSpring 的第一个参数一致

- 返回值与 useSprings 一致

<a to="/react-animate/grow-width-gap">useTrail demo</a>

##### 2.5 `useChain`

`useChain` 方法是用来控制不同的 spring 的执行顺序的，它没有返回值，接收一个[springRef ... ] 的数组，然后将数组的动画从左到右依次执行

##### 2.6 `useTransition` 方法

用于实现组件 mounted/unmounted 等生命周期时的过渡效果动画，其他的 API 都不能对组件生命周期进行控制，它支持三个参数

- 第一个参数 Items

  - 可以是 Array，表示 useTransition 控制一个或多个组件的生命周期动画效果，返回的 transition 的长度是 Array.length`

- 第二个参数 value 可以为 object 或者是一个函数

  - 是一个类型为 UseTransitionProps 的对象，包含 useTransition 动画的基本属性

- 返回值

  -只能返回 `Array<UseTransitionResult>`数组

<a to="/react-animate/toggle-item">useTrasition demo</a>

import ToggleItem from '!!raw-loader!../../../src/pages/react-animate/toggle-item';

<Tabs>
  <TabsItem value="ToggleItem" label="react代码">
    <CodeBlock language="tsx">{ToggleItem}</CodeBlock>
  </TabsItem>
</Tabs>
