const genreateNumber = (max: number, count: number): number[] => {
    const nums: number[] = [];
    const result: number[] = [];
    for (let i = 0; i < max; i++) {
        nums[i] = i + 1;
    }
    for (let i = 0; i < count; i++) {
        // 生成随机数0到34的随机数
        const random = Math.floor(Math.random() * max - i);
        const randomValue = nums.splice(random, 1)[0];
        result.push(randomValue);
    }
    return result;
}

// 生成红球
const greenNums = genreateNumber(35, 5);
// 生成绿球
const redNums = genreateNumber(12, 2);
console.log(greenNums, redNums);