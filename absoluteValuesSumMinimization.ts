function absoluteValueSumMinimization(a: number[]): number {
    const isEven = a.length % 2 === 0;
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}
console.log(absoluteValueSumMinimization([2,1,5,2,1]));