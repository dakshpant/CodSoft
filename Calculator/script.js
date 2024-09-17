// Basic approach
// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == ''){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'AC'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })

// Optimized code using try catch and edge cases

let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let btnValue = e.target.innerHTML;

    if (btnValue === '=') {
      try {
        // Safely evaluate the mathematical expression and display the result
        string = eval(string);
        document.querySelector('input').value = string;
      } catch {
        // Handle any errors in case of invalid expressions
        document.querySelector('input').value = "Error";
        string = "";  // Reset the string on error
      }
    } 
    else if (btnValue === 'C' || btnValue === 'AC') {
      // Clear the input when "C" or "AC" is pressed
      string = "";
      document.querySelector('input').value = string;
    } 
    else { 
      // Append button value to the current string
      string += btnValue;
      document.querySelector('input').value = string;
    }
  });
});
