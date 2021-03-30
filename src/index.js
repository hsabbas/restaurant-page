import loadHome from "./home";

console.log('sup');
const content = document.getElementById('content');
const tabMenu = document.createElement("div");
const homeTab = document.createElement("div");
const menuTab = document.createElement("div");
const contactTab = document.createElement("div");

let selected = homeTab;

function setupTabs(){
    tabMenu.id = "tab-menu";
    homeTab.innerText = "Home";
    homeTab.className = "tab selected";
    menuTab.innerText = "Menu";
    menuTab.className = "tab";
    contactTab.innerText = "Contact";
    contactTab.className = "tab";

    homeTab.addEventListener('click', clickTab);
    menuTab.addEventListener('click', clickTab);
    contactTab.addEventListener('click', clickTab);

    tabMenu.appendChild(homeTab);
    tabMenu.appendChild(menuTab);
    tabMenu.appendChild(contactTab);
}

function clickTab(e){
    e.target.className += " selected";
    selected.classList.remove('selected');
    selected = e.target;
}

function initialLoad(){
    setupTabs();
    const title = document.createElement("div");
    title.id = "title";
    title.innerText = "Generic Restaurant";

    content.appendChild(title);
    content.appendChild(tabMenu);
    content.appendChild(loadHome());
}

initialLoad();