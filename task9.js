function order(words){
    let arr = words.split(' ')
    let result = []
    for ( let i = 1; i <= arr.length; i++) {
        for ( let j = 0; j < arr.length; j++) {
            if (arr[j].indexOf(i) >= 0) {
                result.push(arr[j])
            }
        }
    }
    return result.join(' ')
}

order("3a is2 Thi1s T4est")
