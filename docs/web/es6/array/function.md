# 数组的常用方法

> [示例代码](http://js.jirengu.com/xagob/2/edit)

# Array.from()

**用于将对象、`arguments`、字符串等内容转化为为数组**

	
# Array.of()

**弥补 `Array()` 这个构造函数的不足，保证数组结果的一致性**

# find()
	
**作用：找到符合要求的元素。当找到元素后立马返回，不会寻找后续的元素。当你需要返回所有需要的内容时，还是使用forEach | for of**
**优点：语法清晰，性能卓著，**

# findIndex()

**作用：找到符合要求的元素的索引。**

# some()

**所有的都满足才返回，返回布尔型**

# every()

**所有的都满足才返回，返回布尔型**

```javascript
const fruits = [
	{name: 'apple', price: 2.1},
	{name: 'banana', price: 4.1},
	{name: 'orange', price: 3.1},
]

let value = fruits.find(fruit => fruit.name === 'banana')
console.log(value)

let index = fruits.findIndex(fruit => fruit.name === 'banana')
console.log(index)

let some = fruits.some(fruit => fruit.price > 4)
console.log(some)

let every = fruits.every(fruit => fruit.price > 2)
console.log(every)
```


# concat

> 链接两个数组 [示例](http://js.jirengu.com/gaqak/2/edit)

```javascript
let fruits = ['orange', 'watermelon']
let others = ['keyboad', 'mouse']
let mix = fruits.concat(others)
console.log(mix)
```