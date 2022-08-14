function highAndLow(numbers){
    const result = numbers.split(' ').sort(((a, b) => a - b))
    return result[result.length - 1] + " " + result[0]
}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");  // return "42 -9"