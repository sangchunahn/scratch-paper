let arr = 'hello, my name is sang'

let myFunc = (arr) => {
    return arr.split(' ').map(value => {
        return value.charAt(0).toUpperCase() + value.substring(1)
    }).join(' ')
}


console.log(myFunc(arr))