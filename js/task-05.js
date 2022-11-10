// let input = document.getElementById('name-input');
// let output = document.getElementById('name-output');

// input.oninput = function () {
//     if (input.value === "") {
//         output.innerHTML = "Anonymous";
//     } else {
//         output.innerHTML = input.value;
//     }
// }

// const input = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// input.oninput = function () { 
//   if (input.value === '') {
//     output.innerHTML = 'Anonymous';
//   }
//   else {
//     output.innerHTML = input.value;
    const input = document.querySelector('#name-input');
    const output = document.querySelector('#name-output');

    input.oninput = function () {
      if (input.value === '') {
        output.innerHTML = 'Anonymous'
      }
      else {
        output.innerHTML = input.value;
      }
    };
  