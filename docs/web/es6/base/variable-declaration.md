# 变量声明的方式

> 主要梳理在 es6 中该如何声明变量

# 基本属性

- var 声明的变量是可以重新赋值和重复声明的

	```javascript
	// not error
	var price = 100
	var price = 200
	```

- let 不可以重复声明，可以重复赋值 [要区分全局变量和局部变量的问题]

- const 不可以重复赋值，也不可以重复声明同个变量。当是引用类型的时候可以更新其中的属性

	```javascript
	// not error
	const person = {
		name: 'test',
		age: 20
	}

	person.age = 21 // 这样可以修改成功

	// 当属性也不想让修改的时候
	const person2 = Object.freeze(person) // es5 的写法 
	person.age = 21
	console.log(person) // 发现值根本没有修改
	```

# 作用域

- var 是函数作用域 (function scope)
- let、const 也是块级作用域 (block scope)

```javascript
// function scope
function getPrice (discount) {
	var price = 100 * discount / 10
	return price
}
console.log(getPrice(8)) // result : 80
// console.log(price) // result : error

// block scope
let count = 1
var status = 1
if (status == 1) {
	let count = 0.5
	price = 100 * count 
}

console.log(count) // result : 1
```

> 为了不污染 window 的全局变量的实现方法：

```javascript

// 立即执行函数
(function(){
	var name = 'test'
	console.log(name)
})()

// 块级作用域并使用 let
{
	let name = 'test'
} 

```

# 总结

**使用: 默认值用 `const` , 可修改用 `let` ，尽量不使用 `var`**