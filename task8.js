function narcissistic(value) {
    const array = (""+value).split("").map(Number)
    let number = 0
    for (let i = 0; i < array.length; i++) {
        number += Math.pow(array[i], array.length)
    }
    if (number === value) {
        return true
    }
    return false
}