var discarded = [-1]

function draw(){
    let num = -1
    if (discarded.length == 25){
        document.getElementById("reshuffle").innerHTML = `Reshuffle (${discarded.length-1})!`
    } else{
        while (discarded.includes(num)){
            num = Math.floor(Math.random() * 24)
        }
        discarded.push(num)
        document.getElementById("card").setAttribute("src", `cards/${num}.png`)
        document.getElementById("reshuffle").innerHTML = `Reshuffle (${discarded.length-1})`
    }
}

function reshuffle(){
    discarded = [-1]
    document.getElementById("card").setAttribute("src", `cards/-1.png`)
    document.getElementById("reshuffle").innerHTML = `Reshuffle`
}