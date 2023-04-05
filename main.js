function LevelChanged(){
    var CL = document.getElementById('Clevel').selectedIndex
    document.getElementById("LevelImage").src = `./image/levels/level${CL}.PNG`
}
function WLevelChanged(){
    var WL = document.getElementById('WLevel').selectedIndex
    document.getElementById("WeaponLevelImage").src = `./image/levels/level${WL}.PNG`
}
function jaeryonChanged(){
    var jaeryon = document.getElementsByClassName('jaeryonSlider')
    var output = document.getElementById('jaeryonValue')
    output.innerHTML = jaeryon.value
    console.log(jaeryon)
}