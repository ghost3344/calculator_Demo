const add = (numbers) => {
    if (numbers === "") {
        return 0;
    }

    const numberArray = numbers.split(",");

    const totalSum = numberArray.reduce((sum, currentNumber) => {
        const parsedNumber = parseInt(currentNumber);
        return sum + parsedNumber;
    }, 0);

    return totalSum;
}

module.exports = { add };