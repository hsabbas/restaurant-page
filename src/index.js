console.log('sup');
const tabs = document.getElementsByClassName('tab');
let selected = tabs[0];

function setTabListeners(){
    for(let i = 0; i <3; i++){
        tabs[i].addEventListener('click', clickTab)
    }
}

function clickTab(e){
    e.target.className += " selected";
    selected.classList.remove('selected');
    selected = e.target;
}

setTabListeners();