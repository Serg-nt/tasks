function divisors(integer) {
    let result = []
    for (let i = 2; i < integer; i++) {
        if (integer % i == 0 )
            result.push(i)
    }
    if (result.length == 0) {
        result = integer + " is prime"
    }
    return result
}