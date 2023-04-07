function isMobile() {

    var user = navigator.userAgent;
    var is_mobile = false;
    if( user.indexOf("iPhone") > -1
        || user.indexOf("Android") > -1
        || user.indexOf("iPad") > -1
        || user.indexOf("iPod") > -1
    ) {
        is_mobile = true;
    }
    return is_mobile;
}
var is_mobile = isMobile();
if( is_mobile ) {
    document.getElementsByClassName("justPC").style.visibility ='hidden';
}
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
    //대충 전무 갯수칸 1개부터 3개까지 활성화
}