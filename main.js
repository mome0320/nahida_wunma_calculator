function LevelChanged(){
    var CL = document.getElementById('Clevel').selectedIndex
    document.getElementById("LevelImage").src = `./image/levels/level${CL}.PNG`
}
function WLevelChanged(){
    var WL = document.getElementById('WLevel').selectedIndex
    document.getElementById("WeaponLevelImage").src = `./image/levels/level${WL}.PNG`
}
function jaeryonChanged(){
    var JR = document.getElementById('JLevel').selectedIndex
    document.getElementById('jaeryonImage').src = `./image/jaeryon/${JR+1}jae.PNG`
}
function dolpaChanged(){
    var dol = document.getElementById('dolpa').selectedIndex
    document.getElementById('dolpaImage').src = `./image/dol/${dol}dol.PNG`
}
function junmuChecked(){
    var main = document.getElementById("PlusJunmu").style.visibility
    if(main=="hidden"){
        document.getElementById("PlusJunmu").style.visibility = "visible"
    }else{
        document.getElementById("PlusJunmu").style.visibility = "hidden"
    }
}
function PlusChanged(){
    var PC = document.getElementById("PlusJunmuSelect").selectedIndex
    if(PC==0){
        document.getElementById("PlusJaeryon1").style.visibility = "hidden"
        document.getElementById("PlusJaeryon2").style.visibility = "hidden"
        document.getElementById("PlusJaeryon3").style.visibility = "hidden"
    }else{
        if(PC==1){
            document.getElementById("PlusJaeryon1").style.visibility = "visible"
            document.getElementById("PlusJaeryon2").style.visibility = "hidden"
            document.getElementById("PlusJaeryon3").style.visibility = "hidden"
        }else if(PC==2){
            document.getElementById("PlusJaeryon1").style.visibility = "visible"
            document.getElementById("PlusJaeryon2").style.visibility = "visible"
            document.getElementById("PlusJaeryon3").style.visibility = "hidden"
        }else if(PC==3){
            document.getElementById("PlusJaeryon1").style.visibility = "visible"
            document.getElementById("PlusJaeryon2").style.visibility = "visible"
            document.getElementById("PlusJaeryon3").style.visibility = "visible"
        }
    }
}