let controleFont = document.getElementById('font-size-control');

let text = document.getElementById('text')

controleFont.oninput = function () {
    text.style.fontSize = controleFont.value + "px"
}