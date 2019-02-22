# 对象的基础使用

> 关于对象基础的使用

# 赋值和别名

```javascript
const person = {
    name: 'jack',
    age: 31,
    family: {
        mother: 'lili',
        father: 'jobs',
        sister: 'ss'
    }
}


// 赋值
const {name, age} = person
console.log(name)
console.log(age)

// 已经命名过的变量赋值，使用 ()
let name2 = 'steven';

({name: name2, age: age2} = person)

// 默认值和别名的使用
const {father: f, mother: m, sister = 'this is no sister'} = person.family


console.log(name2)
console.log(age2)
console.log(f)
console.log(m)
console.log(sister)

```


# 对象属性名和方法简写

> 针对对象的属性名称和方法进行了一系列的简写工作。不再像之前那么繁琐。还提供了计算方法

```javascript
const name = 'laravel'
const age = 21
const city = 'beijing'

// 之前的写法
const person = {
    name: name,
    age: age,
    city: city,
    getName: function(){
        return this.name
    }
}

// 更改之后的写法
const person2 = {
    name,
    age,
    city,
    getName(){
        return this.name
    }
}

// 计算属性
const keys = ['name', 'age', 'birth']
const values = ['person', 21, '1997-10-01']

const per = {
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift()
}
let uid = 0

const users = {
    [`user-${++uid}`]: uid,
    [`user-${++uid}`]: uid,
    [`user-${++uid}`]: uid
}

console.log(per)
console.log(users)
```