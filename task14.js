function arrayDiff(a, b) {
    return a.reduce( (acc, item) => {
        if (!b.includes(item)) acc.push(item);
        return acc;} , []);
}

arrayDiff([1,2,2,2,3],[2])
