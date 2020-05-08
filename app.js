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

$input.on(`click`, () => {
    $input.val(``)
})