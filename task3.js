function squareDigits(num){
    let array = (""+num).split("").map(Number)
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * array[i])
    }
    return +result.join('');
}