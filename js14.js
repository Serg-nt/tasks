function solution(string) {
    let arr = string.split('')
    const regex = /[A-Z]/g;
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(regex)) {
            result.push(" ")
        }
        result.push(arr[i])
    }
    return result.join('')
}

solution('camelCasFash')


