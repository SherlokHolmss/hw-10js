document.getElementById('helloButton').addEventListener('click', () => {
    alert("Hello World!");
});


const randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById('checkGuessButton').addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById('guessField').value);
    const resultField = document.getElementById('guessResult');
    if (userGuess === randomNumber) {
        resultField.textContent = 'Вітаємо! Ви вгадали правильне число.';
    } else {
        resultField.textContent = 'Спробуйте ще раз.';
    }
});


let clickCounter = 0;

document.getElementById('clickButton').addEventListener('click', () => {
    clickCounter++;
    document.getElementById('clickCount').textContent = clickCounter;
});

const applyCallbackToEachElement = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
};


const arr = [1, 2, 3, 4, 5];
const squareCallback = (x) => x * x;

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);


const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * (discount / 100));
    return callback(discountedPrice);
};

const showDiscountedPrice = (discountedPrice) => {
    console.log(`Discounted price: ${discountedPrice}`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice); 
