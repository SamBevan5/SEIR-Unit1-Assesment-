///////////////////////////
//Unit 1 Assessment
///////////////////////////

//variables
const $input = $(`#input`);
const $add = $(`#add`);
const $subtract = $(`#subtract`);
const $display = $(`.display`);
let number = 0;

//add 0 as the start value
$display.append(number);

//add the typed number to the current number
$add.on(`click`, (event) => {
    const inputValue = $input.val();

    if (inputValue == "" || inputValue == "type a number here"){
        alert(`type in a number PLEASE!`);
    }else {
        number = number + parseInt($input.val());
        $display.empty();
        $display.append(number);
        event.preventDefault();
        if (number < 0) {
            $display.css(`color`, `red`);
        }
        if (number >= 0) {
            $display.css(`color`, `black`);
        }
    }
    
});
//subtract the typed number to the current number
$subtract.on(`click`, (event) => {
    const inputValue = $input.val();

    if (inputValue == ""){
        alert(`type in a number PLEASE!`);
    }else {
        number = number - parseInt($input.val());
        $display.empty();
        $display.append(number);
        event.preventDefault();
        if (number < 0) {
            $display.css(`color`, `red`);
        }
        if (number >= 0) {
            $display.css(`color`, `black`);
        }
    }
});

//sets input as empty when clicked on so user can type from a blank slate
$input.on(`click`, () => {
    $input.val(``)
})