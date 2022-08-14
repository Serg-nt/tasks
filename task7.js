function SeriesSum(n)
{
    let result = 0
    let m = 1
    for (let i=0; i<n; i++) {
        result = result + 1 / m
        m += 3
    }
    return result.toFixed(2)
}


