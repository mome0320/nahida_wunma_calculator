function LevelChanged(){
    const CL = document.getElementById('Clevel').selectedIndex
    document.getElementById("LevelImage").src = `..\\image\\levels\\level${CL}.PNG`
}