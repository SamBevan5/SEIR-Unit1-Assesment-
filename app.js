///////////////////////////
//Unit 1 Assessment
///////////////////////////

//variables
const $input = $(`#input`);
const $add = $(`#add`);
const $subtract = $(`#subtract`);
const $display = $(`.display`);
let number = 0;

$display.append(number);

$add.on(`click`, (event) => {
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
    
});

$subtract.on(`click`, () => {
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
});