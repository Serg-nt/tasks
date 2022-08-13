function descendingOrder(n){
    let arrNumber = Array.from(n.toString())
    arrNumber.sort( (a, b) => b - a)
    const a = Number(arrNumber.join(''))
    return a
}