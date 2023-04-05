const ElementList = [
    'characterLevel',
    'characterBreak',
    'weapon',
    'weaponLevel',
    'weaponBreak',
    'talents1',
    'talents2',
    'talents3'
]
const ElementList2 = [
    'HP',
    'ATK',
    'DEF',
    'EM'
]
function characterChanged() { //캐릭터 변경시
    const characterLevelOptions = document.getElementById('characterLevel').options //캐릭터 레벨
    const characterSelectedClass = document.getElementById('character').selectedIndex//현재 선택한 캐릭터의 인덱스 값
    for(let i = 0; i < ElementList.length; i++){
        document.getElementById(ElementList[i]).selectedIndex = 0 //모든 요소의 선택된 값 초기화
        if(characterSelectedClass != 0){ //만약 인덱스 0번을 선택하지 않았다면
            if(i>=5){ //i가 5이상(리스트의 인덱스 값이 5이상만)
                [...document.getElementById(ElementList[i])].forEach(ele => ele.hidden = false) //특성 요소들을 전부 hidden 해금
                //document.getElementById(ElementList[i]).options.hidden = false
            }
        }
    }
    for(let i = 0; i < ElementList2.length-1; i++){
        document.getElementById(ElementList2[i]).value = '0' //스테이터스 값 초기화(작동 안함)
    }
    for(let i = 1; i < characterLevelOptions.length; i++){
        if(characterSelectedClass != 0){ //현재 선택되어있는 캐릭터의 인덱스 값이 초깃값이 아니라면
            characterLevelOptions[i].hidden = false //캐릭터 레벨의 옵션들을 전부 해금
        }else{ //초깃값이 맞다면
            characterLevelOptions[i].hidden = i != 0 //캐릭터 레벨의 초깃값을 제외한 모든 옵션에 히든 부여
        }
    }
    const options = document.getElementById('weapon').options //무기 옵션
    document.getElementById('weapon').selectedIndex = 0 //무기 초깃값으로 초기화

    const characterElement = document.getElementById('character') //캐릭터
    const selectedClass = characterElement.options[characterElement.selectedIndex].value //현재 선택한 캐릭터의 value 값
    for (let i = 1; i < options.length; i++) {
        options[i].hidden = !options[i].value.includes(selectedClass) //현재 선택된 캐릭터의 value값과 같지 않다면 hidden 부여
    }
}

function changeWeapon(){//무기 변경시
    const options = document.getElementById('weaponLevel')//무기 레벨
    document.getElementById('weaponLevel').selectedIndex = 0 //무기 레벨 선택창 초기화

    const weaponElement = document.getElementById('weapon') //무기
    const selectedClass = weaponElement.options[weaponElement.selectedIndex].value//현재 선택된 무기의 value 값
    for(let i = 1; i< options.length; i++){
        if(selectedClass[selectedClass.length-1] === '0'){ //만약 무기의 value값 마지막 숫자가 0이라면
            options[i].hidden = true//무기 레벨 선택창을 전부 hidden으로 변경
        }else if(selectedClass[selectedClass.length-1].match(/1|2/)){ //만약 무기의 value값 마지막 숫자가 1이나 2라면
            options[i].hidden = i >= 7 // 선택 옵션의 인덱스 7번 이후부터 hidden 적용
        }else{
            options[i].hidden = false //아니면 전부 hidden 해금
        }
    }
}
function changeCLevel(){//캐릭터 레벨 변경시
    const options = document.getElementById('characterBreak')//캐릭터 돌파
    document.getElementById('characterBreak').selectedIndex = 0 //캐릭터 돌파 선택창 초기화

    const characterElement = document.getElementById('characterLevel') //캐릭터 레벨
    const selectedClass = characterElement.options[characterElement.selectedIndex].value //선택한 캐릭터 레벨의 value값
    for(let i = 1;i < options.length; i++){
        switch(selectedClass){
            case 'C1':
                options[i].hidden = i != 1
                break
            case 'C20':
                options[i].hidden = ![1,2].includes(i)
                break
            case 'C40':
                options[i].hidden = ![2,3].includes(i)
                break
            case 'C50':
                options[i].hidden = ![3,4].includes(i)
                break
            case 'C60':
                options[i].hidden = ![4,5].includes(i)
                break
            case 'C70':
                options[i].hidden = ![5,6].includes(i)
                break
            case 'C80':
                options[i].hidden = ![6,7].includes(i)
                break
            case 'C90':
                options[i].hidden = i != 7
        }
    }
}
function changeLevel(){//무기 레벨 변경시
    const options = document.getElementById('weaponBreak')
    document.getElementById('weaponBreak').selectedIndex = 0

    const weaponBElement = document.getElementById('weaponLevel')
    const selectedClass = weaponBElement.options[weaponBElement.selectedIndex].value
    for(let i = 1; i < options.length; i++){
        if(i===0){
            options[i].hidden = i != 0
            continue
        }
        switch(selectedClass){
            case 'WL1':
                options[i].hidden = i != 1
                break
            case 'WL20':
                options[i].hidden = ![1,2].includes(i)
                break
            case 'WL40':
                options[i].hidden = ![2,3].includes(i)
                break
            case 'WL50':
                options[i].hidden = ![3,4].includes(i)
                break
            case 'WL60':
                options[i].hidden = ![4,5].includes(i)
                break
            case 'WL70':
                options[i].hidden = ![5,6].includes(i)
                break
            case 'WL80':
                options[i].hidden = ![6,7].includes(i)
                break
            case 'WL90':
                options[i].hidden = i != 7
        }
    }
}

var artifactsBanner = $(".artifactsSlider").bxSlider({
    auto:false,
    slideWidth: 600,
    slineHeight: 50
})