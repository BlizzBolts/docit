# React 18下的Auto Batching特性测试

## 简介

纯中文纯中文纯中文纯中文纯中文纯中文纯中文纯中文纯中文纯中文纯中文纯中文纯中文

English Here, asdasdasdasdasdsa

React中的batching操作会将多次状态变更进行合并更新。默认的batching只会作用于在React的event handler中。

而React 18中新的Auto Batching特性会将`setTimeout`, `setInterval`, `Promise`等无法自动batching的进行自动批量更新处理（之前可使用`unstable_batchedUpdates` 进行手动批量更新）

在此会使用实际事例来进行具体演示说明。

官方的特性说明

[React v18.0 – React](https://react.dev/blog/2022/03/29/react-v18#new-feature-automatic-batching)

## Demo

> 组件中含有s1和s2两个变量，初始值为0。
> 点击stop interval会停止自增循环，点击manually update会手动将s1 s2两个变量自增1。

render时会在控制台中打印`This App is rerendered!` 字样，通过观察打印次数来得出rerender的次数（即batch更新是否有效）。

>

以下的两个codesandbox会分别使用React@16.8和React@18.2.0进行演示。

### React18（auto-batching)

- setInterval内的2次setState仅会使当前组件rerender1次

https://codesandbox.io/embed/react-18-auto-batching-rerender-test-forked-eyefv6?fontsize=14&hidenavigation=1&theme=dark

### React16.8（no auto-batching)

- setInterval内的2次setState会使当前组件rerender2次
- 另外，codesandbox内含有`React@16.8`提供的`unstable_batchedUpdates`方法，可以使状态变更批量更新
