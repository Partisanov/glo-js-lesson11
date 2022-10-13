const btn = document.querySelector('#btn');
const eBtn = document.querySelector('#e_btn');
const inputText = document.querySelector('#text');
const inputRange = document.querySelector('#range');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');


btn.addEventListener('click', () => {
    square.style.backgroundColor = inputText.value;
});

eBtn.style.display = "none";

inputRange.addEventListener('input', (e) => {
    const percent = `${e.target.value}%`;
    circle.style.width = percent;
    circle.style.height = percent;
});
