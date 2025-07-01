# This is a program that records some outdoors activity! 

It's in its early age. Not much to tell about.

Anyways, here are some of the functions

It displays a map with marks. the marks are some great places I've went to. (If there are new features, i will update!)

## 2025.6.29: 
1. 数据和程序分离，选择用json存储相关山的数据
2. 视图与控制逻辑分离，写了一个main.js负责调取API和读取山的数据。
3. 了解了js的并发编程逻辑，包括**事件循环架构**，微事务，宏事务等概念，了解.then， .catch的语法
4. 在JS中，处理并发的控制手段是 **中断**。即事件驱动主线程来处理任务队列。执行的顺序是：
先查看宏事务队列，处理一个宏事务，清空微事务。如此循环。

## 2025.7.1
1. 理解了事件触发，了解如何把事件和函数在对象上进行绑定。了解这样带来的最基本效果。
2. 理解了JS展示HTML内容的方法，DOM(覆写html), alert(一个强制弹窗), console.log(命令行输出，用户不可见)
3. 理解了高德API，如何创建地图窗体。
> 在回调函数中，首先定义HTML页面，然后定义窗体，传入HTML页面，最后SHOW。
4. 了解了用作回调的匿名函数的作用，以及JS中的闭包大致概念。
> 闭包是一种机制，用于函数访问外部变量，是编译器自己处理的事情！

```
BUG记录：
1. 很多大小写错误导致的bug
2. 绑定函数的时候，写了一个括号【mark.on('cilck',function())】，导致原先函数失效了，传了个空函数进去
3. 因为我在循环体中写事件触发，所以不建议重复定义函数，而是使用匿名函数。循环定义可能有bug，也可能没有（）
```