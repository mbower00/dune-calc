var DEFAULT_ENERGY = 3

function set_energy(num){
    DEFAULT_ENERGY = num*1;
}

function reset_block(){
    const amount = document.querySelector("#block_amount");
    amount.textContent = 0;
}
function plus_block(){
    const amount = document.querySelector("#block_amount");
    if (amount.textContent != 20){
        amount.textContent = amount.textContent*1 + 1;
    }

}
function minus_block(){
    const amount = document.querySelector("#block_amount");
    if (amount.textContent != 0){
        amount.textContent = amount.textContent*1 - 1;
    }
}

function reset_energy(){
    const amount = document.querySelector("#energy_amount");
    amount.textContent = DEFAULT_ENERGY;
}
function plus_energy(){
    const amount = document.querySelector("#energy_amount");
    if (amount.textContent != 6){
        amount.textContent = amount.textContent*1 + 1;
    }
}
function minus_energy(){
    const amount = document.querySelector("#energy_amount");
    if (amount.textContent != 0){
        amount.textContent = amount.textContent*1 - 1;
    }
}