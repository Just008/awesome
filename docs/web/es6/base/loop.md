# 循环的几种方式

> 关于前端循环数据的方法

# `map`

> map 循环只支持数组的类型不支持其他类型，如果你想使用 map 请先将数据转为数组

# `for`

	```javascript
	const fruits = ['orange', 'apple', 'banana', 'mango']

	for(let i = 0; i < fruits.length; i++){
		console.log(fruits[i])
	}
	```

# `forEach`

	> 缺点：不能中止或者跳过

	```javascript
	const fruits = ['orange', 'apple', 'banana', 'mango']

	fruits.forEach(fruit => {
		console.log(fruit)
	})
	```

# `for in`

	```javascript
	const fruits = ['orange', 'apple', 'banana', 'mango']

	for(let index in fruits){
		console.log(fruits[index])
	}
	```

# `for of`

	> 对比： 相对于 `for` 循环来说相对简单，
	> 
	> 相对于 `for in` 循环, 不用使用 index 而是直接使用的结果值。也可以跳过：`containue` 和 `break`

	```javascript
	const fruits = ['orange', 'apple', 'banana', 'mango']

	for(let fruit in fruits){
		console.log(fruit)
	}
	```

# 其他类型循环的使用

> 都是使用的 `for of` 循环，但是在 es6 中不支持对象的循环

## 支持数组

	```javascript
	const fruits = ['orange', 'apple', 'banana', 'mango']

	for(let [index, fruit] of fruits.entries()){
		console.log(`${fruit} index is ${index}`)
	}
	```

## 支持字符串

	```javascript
	let string = 'i love you'
	for (let str of string){
		if (str === ' '){
			continue
		}
		console.log(str)
	}
	```

## 支持 `arguments`

	```javascript
	function sum(){
		let total = 0
		for (let value of arguments){
			total += value
		}
		return total
	}


	let totals = sum(10, 20, 40, 60, 100, 150, 170)
	console.log(totals)
	```

## 支持 `nodeList` 

> [示例](http://js.jirengu.com/riyigoqufe/2/edit)

	```html
	<ul>
		<li>test 1</li>
		<li>test 2</li>
		<li>test 3</li>
		<li>test 4</li>
		<li>test 5</li>
	</ul>
	```



	```javascript
	const lis = document.querySelectorAll('li')
	for (let li of lis){
		li.addEventListener('click', function(){
			this.classList.toggle('completed')
		})
	}
	```	
