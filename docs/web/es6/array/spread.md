# 扩展运算符的使用

> 关于一些用法

# 基础用法

```javascript
const fruits = ['banana', 'orange', 'mongo']
const others = ['rule', 'mouse']

const members = [...fruits, ...others]
// 如果直接用等号则表示指向的是一个对象
// const currentMembers = members
const currentMembers = [...members]
currentMembes[0] = 'watermelon'
console.log(members)
console.log(currentMembers)
```  

# 小练习

> [示例](http://js.jirengu.com/zibeh/6/edit)

# 应用场景

> [示例](http://js.jirengu.com/nirik/3/edit)

## 替换 Array.from()

> 将对象扩展到新的数组中，实现跟 `Array.from()` 相同的效果

```javascript
// 用在 dom 元素上
const todo1 = document.querySelectorAll('li')  // nodelist
const todo2 = Array.from(document.querySelectorAll('li'))  // array
const todo3 = [...document.querySelectorAll('li')]  // array
```

## 对象的属性

```javascript
const person = {
    color: ['red', 'blue'],
    foods: ['milk', 'orange']
}

const shopping  = ['glass', 'phone', ...person.foods]
console.log(shopping)
```

## 删除对应的数据

```javascript
const todos = [
    {name: 'todo1', completed: false},
    {name: 'todo2', completed: true},
    {name: 'todo3', completed: true}
]

const id = 2

const index = todos.findIndex(todo => todo.id === id)
todos.splice(todoIndex,1)

console.log(todos)
```


## 函数中的使用

> 减轻一个个传入参数的痛苦

```javascript
const dateFields = [2017, 5, 6]
const date = new Date(...dateFields)
console.log(date)
```