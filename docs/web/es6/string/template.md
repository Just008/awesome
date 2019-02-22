# 模板字符串的使用

> 分为 Template Strings / Titerals

```javascript
const person = 'person'
const age = 12
const sentence = `${person} is ${age} years old`
console.log(sentence)


// 会把空格等打印出来，如有需要就使用 trim() 方法去掉空格
const template = `
	<div class='test'>
		<p>Hello</p>
	</div>
`

console.log(template)

// 当然也可以在 vue 中的 template 中使用
```

**使用示例**

```javascript
// init data
const person = {
	name: 'test',
	date: '2018-11-16',
	todos: [
		{name: '吃鸡', completed: false},
		{name: '做饭', completed: true},
		{name: '洗碗', completed: true},
	]
}

function showTodos(todos){
	return (
		`<ul>
			${todos.map(todo => `
				<li>
					${todo.name} ${todo.completed ? '✔️' : '✘'}
				</li>`
			)}
		</ul>`
	)
}

const template = `
	<div>
		<h3>${person.name}</h3>
		${showTodos(person.todos)}
		<h3>${person.date}</h3>
	</div>
`

document.body.innerHTML = template
```


# 高级模式

> Tagged Template Strings [标签模板字符串] 的学习。[示例](http://js.jirengu.com/dizen/3/edit)



```javascript
function highlight (strings, ...values) {
	highlighted = values.map(value => `<span class=highlight>${value}</span>`)

	let str = ''
	strings.forEach((string, index) => str += `${string} ${highlighted[index] || ''}`)

	document.body.innerHTML = str
}

const user = 'Person'
const topic = 'learn hiw ti build a php project'
const sentence = highlight`${user} has commentend on your topic ${topic}`
```

# 最佳实践 

> 过滤用户的输入：[DOMPurify](https://github.com/cure53/DOMPurify) 的使用
