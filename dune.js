function clearData(){
    console.log("clear")
    document.getElementById('units').innerHTML = 0
    document.getElementById('elites').innerHTML = 0
    document.getElementById('spice').innerHTML = 0
    document.getElementById('strength').innerHTML = 0
}

function increment(id){
    document.getElementById(id).innerHTML = (document.getElementById(id).innerHTML * 1) + 1
    updateStrength();
}

function decrement(id){
    document.getElementById(id).innerHTML = (document.getElementById(id).innerHTML * 1) - 1
    updateStrength();
}

function autoSpice(){
    let units = document.getElementById('units').innerHTML * 1
    let elites = document.getElementById('elites').innerHTML * 1
    document.getElementById('spice').innerHTML = units + elites
    updateStrength();
}

function updateStrength(){
    let strength = 0
    let units = document.getElementById('units').innerHTML * 1
    let elites = document.getElementById('elites').innerHTML * 1
    let spice = document.getElementById('spice').innerHTML * 1
    if(elites > 0){
        for(let i = 0; i < elites; i++){
            if(spice > 0){
                strength += 2
                spice -= 1
            }else{
                strength += 1
            }
        }
    }
    if(units > 0){
        for(let i = 0; i < units; i++){
            if(spice > 0){
                strength += 1
                spice -= 1
            }else{
                strength += 0.5
            }
        }
    }
    document.getElementById("strength").innerHTML = strength
}




/* PYTHON METHOD
def update_strength(self):
      if self.is_invalid == False:
        units = self.units
        elites = self.elites
        spice = self.spice
        strength = 0
        if elites > 0:
            for _ in range(elites):
              if spice > 0:
                strength += 2
                spice -= 1
              else:
                strength += 1
        if units > 0:
            for _ in range(units):
              if spice > 0:
                strength += 1
                spice -= 1
              else:
                strength += 0.5
        if strength - (strength // 1) == 0:
            self.strength = round(strength)
        else:
            self.strength = round(strength, 1)
*/