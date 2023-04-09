const ClevelElement = document.getElementById('Clevel');
const WlevelElement = document.getElementById('WLevel');
const JlevelElement = document.getElementById('JLevel');
const DolpaElement = document.getElementById('dolpa');
for (let level = 0; level <= 6; level++) {
    ClevelElement.add(new Option(`${level} 돌파`));
    WlevelElement.add(new Option(`${level} 돌파`));
    DolpaElement.add(new Option(`${level} 돌파`));
}
for (let level=0; level <=5; level++){
    JlevelElement.add(new Option(`${level} 재련`));
}

//hidden Element
const PlusJunmuElement = document.getElementById('PlusJunmuSelect');


const weaponlist = [{name:"떠오르는 천일 밤의 꿈", description:"5성 법구 전용무기"},
{name:"방랑하는 저녁별", description: "4성 법구"},
{name:"제례의 악장", description: "4성 법구"},
{name:"음유시인의 악장", description: "4성 법구"},
{name:"마도 서론", description: "3성 법구"},
{name:"기타 무기(원소 마스터리에 영향이 없는 무기)", description:"1~5성 법구"}
]

function weaponbox() {

    const container = document.getElementById('weapon-listbox'),
    dl = document.createElement('datalist');
    dl.id = 'dlweapon';
    weaponlist.forEach(weapon => {
        const option = document.createElement('option');
        option.value = weapon.name;
        option.label = weapon.description;
        dl.appendChild(option);
    })
    container.appendChild(dl);
}
weaponbox();