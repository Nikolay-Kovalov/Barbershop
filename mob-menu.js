

const mobMenuBtn = document.querySelector(".mob-menu-btn");
const mobMenu = document.querySelector(".mobile_menu");
const backdrop = document.querySelector(".backdrop");

backdrop.addEventListener('click', onBackdropClickMob);
mobMenuBtn.addEventListener('click', onMobMenuBtnClick);

function onMobMenuBtnClick() {
       backdrop.classList.remove('hidden');
        mobMenu.classList.remove('hidden-mob');
    document.body.classList.add('backdrop_active')   
   
}

function onBackdropClickMob(evt) {
      if (evt.target === evt.currentTarget) {
        backdrop.classList.add('hidden');
        mobMenu.classList.add('hidden-mob');
        document.body.classList.remove('backdrop_active')
    } 
}
