const btn = {
    more: document.querySelector('[data-action="increment"]'),
    less: document.querySelector('[data-action="decrement"]'),
    span: document.querySelector('#value'),
};

let counterValue = 0;

const increment = () => {
    counterValue += 1;

    btn.span.textContent = counterValue;
}

const decrement = () => {
    counterValue -= 1;

    btn.span.textContent = counterValue;
}

btn.more.addEventListener("click", increment);
btn.less.addEventListener("click", decrement);

console.log(btn)