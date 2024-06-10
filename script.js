// code for desktop//

const subStoreMenu = document.querySelector(".desktop__links--substores");
const subComMenu = document.querySelector(".desktop__links--subcom");
const mainStore = document.querySelector(".desktop__link--store");
const mainCom = document.querySelector(".desktop__link--com");
const subLangMenu = document.querySelector(".desktop__options--submenu");
const mainLangMenu = document.querySelector(".desktop__options--lang");
let langClick = true;

const gameStore = document.querySelector('.storenav__storepop');
const gameNew = document.querySelector('.storenav__newpop');
const gameCat = document.querySelector('.storenav__catpop');
const gameStoreNav = document.querySelector('.gamestore');
const gameNewNav = document.querySelector('.gamenew');
const gameCatNav = document.querySelector('.gamecat');

let highlightBig = document.querySelector('.highlight');
let highlightSmalls = document.querySelectorAll('.highlightSelect');
let highlightIndex = 0;
let totalSlider = highlightSmalls.length;

let lftBtn = document.querySelector('.lft__btn');
let rghtBtn = document.querySelector('.rght__btn');

let handle = document.querySelector('.handle');
let highlightfilm = document.querySelector('.highlightfilm');
let selector = document.querySelector('.selector');

let readmore = document.querySelector('.readmore');
let devexpander = document.querySelector('.devs__expander');

function showSubMenu(subMenu){
    subMenu.style.opacity='1';
    subMenu.style.zIndex='1000';
}

function hideSubMenu(subMenu){
    subMenu.style.zIndex='-111';
    subMenu.style.opacity='0';
    
}

function showClickMenu(subMenu){
    if(langClick === false){
        subMenu.style.opacity='0';
        subMenu.style.zIndex='-111';
        subMenu.style.pointerEvents='none';
        langClick = true;
        console.log(langClick);
    }else if(langClick === true){
        subMenu.style.opacity='1';
        subMenu.style.zIndex='1000';
        subMenu.style.pointerEvents='auto';
        langClick = false;
        console.log(langClick);
    }
}

function showPopFlex(subMenu){
    subMenu.classList.add('popout-flex');
}

function hidePopFlex(subMenu){
    subMenu.classList.remove('popout-flex');
}


function showPopBlock(subMenu){
    subMenu.classList.add('popout-block');
}

function hidePopBlock(subMenu){
    subMenu.classList.remove('popout-block');
}

highlightSmalls.forEach((highlightSmall, index) => {
    highlightSmall.addEventListener("click", function() {
      goToSlide(index);
    });
});

function goToSlide(index) {
    if (index < 0 || index >= totalSlider) return;
    highlightIndex = index;
    highlightBig.style.transform = `translateX(-${highlightIndex * 100}%)`;
};

function slideLeft(){
    if(highlightIndex > 0){
        highlightIndex--;
        highlightBig.style.transform = `translateX(-${highlightIndex * 100}%)`;
        selector.style.left = `${122 * highlightIndex}px`
    } else if(highlightIndex <= 0){
        highlightIndex = totalSlider-1;
        highlightBig.style.transform = `translateX(-${highlightIndex * 100}%)`;
        selector.style.left = `${122 * highlightIndex}px`
    }

}

function slideRight(){
    if(highlightIndex < totalSlider-1){
        highlightIndex++;
        highlightBig.style.transform = `translateX(-${highlightIndex * 100}%)`;
        selector.style.left = `${122 * highlightIndex}px`
    } else if(highlightIndex = totalSlider){
        highlightIndex = 0;
        highlightBig.style.transform = `translateX(-${highlightIndex * 100}%)`;
        selector.style.left = `${122 * highlightIndex}px`
    }

}

function handleRight(){
    if(highlightIndex = totalSlider-1){
        handle.style.marginLeft ='auto';
        highlightfilm.style.transform = `translateX(-122px)`;
    }
}

function handleLeft(){
    if(highlightIndex = 0){
        handle.style.marginLeft ='0';
        highlightfilm.style.transform = `translateX(0)`;
    }
}

function readMore(){
    devexpander.classList.add('expand');
    readmore.classList.add('gone');
}

mainStore.addEventListener('mouseover', ()=>showSubMenu(subStoreMenu));
mainStore.addEventListener('mouseleave', ()=>hideSubMenu(subStoreMenu));
mainCom.addEventListener('mouseover', ()=>showSubMenu(subComMenu));
mainCom.addEventListener('mouseleave', ()=>hideSubMenu(subComMenu));
subStoreMenu.addEventListener('mouseover', ()=>showSubMenu(subStoreMenu));
subStoreMenu.addEventListener('mouseleave', ()=>hideSubMenu(subStoreMenu));
subComMenu.addEventListener('mouseover', ()=>showSubMenu(subComMenu));
subComMenu.addEventListener('mouseleave', ()=>hideSubMenu(subComMenu));
mainLangMenu.addEventListener('click', ()=>showClickMenu(subLangMenu));
gameStoreNav.addEventListener('mouseover', ()=>showPopBlock(gameStore));
gameStoreNav.addEventListener('mouseleave', ()=>hidePopBlock(gameStore));
gameStore.addEventListener('mouseover', ()=>showPopBlock(gameStore));
gameStore.addEventListener('mouseleave', ()=>hidePopBlock(gameStore));
gameNewNav.addEventListener('mouseover', ()=>showPopFlex(gameNew));
gameNewNav.addEventListener('mouseleave', ()=>hidePopFlex(gameNew));
gameNew.addEventListener('mouseover', ()=>showPopFlex(gameNew));
gameNew.addEventListener('mouseleave', ()=>hidePopFlex(gameNew));
gameCat.addEventListener('mouseover', ()=>showPopFlex(gameCat));
gameCat.addEventListener('mouseleave', ()=>hidePopFlex(gameCat));
gameCatNav.addEventListener('mouseover', ()=>showPopFlex(gameCat));
gameCatNav.addEventListener('mouseleave', ()=>hidePopFlex(gameCat));
lftBtn.addEventListener('click', ()=>slideLeft());
rghtBtn.addEventListener('click', ()=>slideRight());
readmore.addEventListener('click', ()=>readMore())

//code for mobile

let mobileMenuButton = document.querySelector(".menu-button");
let sideBar = document.querySelector('.mobile__links');
let mobileStoreNav = false;
let mobileNewNav = false;
let mobileCatNav = false;

function sideBarOpen(){
    sideBar.classList.add('opening');
}

function showMobileStorePop(){
    if(mobileStoreNav === false){
        gameStore.classList.add('popoutflex');
        mobileStoreNav = true;
    }else {
        gameStore.classList.remove('popoutflex');
        mobileStoreNav = false;
    }
}
function showMobileNewPop(){
    if(mobileNewNav === false){
    gameNew.classList.add('popoutflex');
        mobileNewNav = true;
    }else {
        gameNew.classList.remove('popoutflex');
        mobileNewNav = false;
    }
}
function showMobileCatPop(){
    if(mobileCatNav === false){
        gameCat.classList.add('popoutflex');
        mobileCatNav = true;
    }else {
        gameCat.classList.remove('popoutflex');
        mobileCatNav = false;
    }
}


mobileMenuButton.addEventListener('click', ()=>sideBarOpen());
gameCatNav.addEventListener('click', ()=>showMobileCatPop());
gameNewNav.addEventListener('click', ()=>showMobileNewPop());
gameStoreNav.addEventListener('click', ()=>showMobileStorePop());
