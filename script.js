const btn = document.querySelector('#btn');
const e_btn = document.querySelector('#e_btn');
const inputText = document.querySelector('#text');
const inputRange = document.querySelector('#range');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');


btn.addEventListener('click', () => {
    square.style.backgroundColor = inputText.value;
});

e_btn.style.display = "none";

inputRange.addEventListener('input', (e) => {
    const percent = e.target.value + '%';
    circle.style.width = percent;
    circle.style.height = percent;

})
