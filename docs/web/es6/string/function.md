# 字符串方法

- `startsWith()` 以 ** 字符串开始，第二个参数为开始的位置
- `endsWith()` 以 ** 字符串结尾，第二个参数为开始的位置
- `includes()` 替换indexOf，判断是否有某个字符传
- `repeat()` 重复前面的字符 

```javascript
const id = '51030019800730366X'
const fan = 'I love you'

id.startWith('51', 0) // true
id.endWith('X', 18) // 根据正向的顺序进行的

console.log(fan.startsWith('I'))
console.log(fan.includes('love'))

const heading = `${'='.repeat(5)} ${fan} ${'='.repeat(5)}`
console.log(fan.repeat(5))
console.log(heading)

function padder(string, length = 25){
   return `${' '.repeat(Math.max(length - string.length))} ${string}` 
}

// 实现右对齐
console.log(padder(id))
console.log(padder(fan))

```


**`Number` 类型 使用 `includes` 会报错，需要进行处理使用： `number.toString().includes('love')` **