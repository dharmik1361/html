let eqal_pressed = 0;
// access all buttons excluding c and DEL
let button_input = document.querySelectorAll(".input-button");

// acces input, equal, clear and erase

let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};

// solve the user input when clicked on equal sign

equal.addEventListener("click", () => {
    eqal_pressed = 1;
    let inp_val = input.value;
    try {

        let solution = eval(inp_val);

        if (Number.isInteger(solution)) {
            inp_val = solution;
        } else {
            input.value = solution
        }
    } catch (err) {
        alert("invalid Input");
    }
});

//access each class using for each 
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        input.value = ""; {
            equal_pressed = 0;


        }
        // display value of each button 
        input.value += button_class.value;
    });
});