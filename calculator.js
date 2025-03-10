const add = (numbers) => {
    if (numbers === "") {
        return 0;
    }

    const updatedString = numbers.replace(/\n/g, ",");

    const numberArray = updatedString.split(",");

    const totalSum = numberArray.reduce((sum, currentNumber) => {
        const parsedNumber = isNaN(currentNumber) ? 0 : parseInt(currentNumber);
        return sum + parsedNumber;
    }, 0);

    return totalSum;
}

module.exports = { add };