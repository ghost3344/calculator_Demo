const add = (numbers) => {
    if (numbers === "") {
        return 0;
    }

    const delimiters = numbers.match(/^\/\/(.*)\n/) ;

    const delimiter = delimiters?.[1]

    const updatedString = numbers.replace(`//${delimiter}\n`,'').replace(/\n/g, delimiter || ",");

    const numberArray = updatedString.split(delimiter || ",");

    const negatives = numberArray.filter((num) => parseInt(num) < 0);

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives}`);
    }

    const totalSum = numberArray.reduce((sum, currentNumber) => {
        const parsedNumber = isNaN(currentNumber) ? 0 : parseInt(currentNumber);
        return sum + parsedNumber;
    }, 0);

    return totalSum;
}

module.exports = { add };