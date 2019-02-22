# 箭头函数的使用

> 箭头函数：不传参数，留括号。需要参数就写入参数即可

```javascript
numers = [1, 2, 4, 8, 16] 
let consts = numbers.map(function(number){
	return number * 2;
})
// 修改为箭头函数的话
let consts2 = numbers.map((number, index) => {
	return number * 2;
})
```

# 显式、隐式返回

```javascript
let consts2 = numbers.map((number, index) => {
    // return 是显式返回
	return number * 2;
})

let consts2 = numbers.map((number, index) => number * 2 )
```

# 命名、匿名函数

```javascript

// 命名函数：在递归和解除事件绑定的时候特别有用
function green(name){
	console.log(`${name} function`)
} 

green('test1')

// 匿名函数
const greet = name => {console.log( `${name} function`)}

greet('test2')

```

# this

> 关于箭头函数的 `this` 值的学习

```javascript
const person = {
	name: 'test',
	hobbies: ['study', 'learn', 'sleep'],
	print: function(){
		this.hobbies.map(function(hobby){
			console.log(`${this.name} love ${hobby}`)
		})
	}
}


person.print()
/* output:
"JS Bin Output  love study"
"JS Bin Output  love learn"
"JS Bin Output  love sleep"
*/

```

**解析：this.hobbies 取到了正确的内容，而内部是函数作用域 [function scope], 现在只想的事 window | globel | undefined (严格模式下)，是在运行时动态指定的**


修改如下：

```javascript
const person = {
	name: 'test',
	hobbies: ['study', 'learn', 'sleep'],
	print: function(){
		this.hobbies.map(hobby => {
			console.log(`${this.name} love ${hobby}`)
		})
	}
}


person.print()  // 现在就执行正常了
/* output:
"test love study"
"test love learn"
"test love sleep"
*/
```

**总结：当你想让你的 this 值绑定你定义时候的定义值。当你在调用的时候不希望被改变的时候，使用箭头函数就可以满足你的需求。代替之前使用的函数就可以了**

# 不宜使用的场景

> TODO1 ：不理解

- 作为构造函数，一个方法需要绑定到对象
- 当你真的需要this 的时候
- 当你想要使用 argument 的时候
