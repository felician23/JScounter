const decrease = document.querySelector('#decIt')
const reset = document.querySelector('#resIt')
const increase = document.querySelector('#incIt')
const mainNumbers = document.querySelector('#mainNumbers')


decrease.addEventListener('click', decreaseIt)
reset.addEventListener('click', resetIt)
increase.addEventListener('click', increaseIt)

let count = 0;

function decreaseIt() {
    count -= 1;
    mainNumbers.textContent = count;
}

function resetIt() {
    mainNumbers.textContent = count - count;
}

function increaseIt() {
    count += 1;
    mainNumbers.textContent = count;
}
