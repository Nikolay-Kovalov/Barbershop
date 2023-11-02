const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const heroBtn = document.querySelector(".hero_btn");
const modalForm = document.querySelector(".online_form_modal");
const modalCloseBtn = document.querySelector(".close_btn");
const prevButton = document.querySelector(".portfolio_btn_prev");
const nextButton = document.querySelector(".portfolio_btn_next");
const slideRow = document.querySelector(".line_sl");
const option = document.querySelector(".select_specialist");








heroBtn.addEventListener('click', onHeroBtnClick);
backdrop.addEventListener('click', onBackdropClick);

modalForm.addEventListener('submit', onModalFormSubmit);
document.addEventListener('keydown', onEscClick);
modalCloseBtn.addEventListener('click', onCloseBtnClick);
prevButton.addEventListener('click', onPrevBtnClick);
nextButton.addEventListener('click', onNextBtnClick);
option.addEventListener('mouseover', onMouseoverOption)




function onHeroBtnClick () {
    backdrop.classList.remove("hidden")
    modal.classList.remove("hidden")
    document.body.classList.add("backdrop_active")

}

function onBackdropClick(evt) {
    if (evt.target === evt.currentTarget) {
        backdrop.classList.add('hidden');
        modal.classList.add('hidden');
        document.body.classList.remove('backdrop_active')
    }
}

function onModalFormSubmit(evt) {
    evt.preventDefault()
}

function onEscClick(evt) {
    if (evt.code === "Escape") {
         backdrop.classList.add('hidden');
        modal.classList.add('hidden');
        document.body.classList.add('backdrop_active')
    }
}

function onCloseBtnClick() {
     backdrop.classList.add('hidden');
        modal.classList.add('hidden');
        document.body.classList.remove('backdrop_active') 
}








// const btnNext = document.querySelector(".btn_next")
// const btnPrev = document.querySelector('.btn_prev')



// btnNext.addEventListener('click', onNextBtnClick);
// btnPrev.addEventListener('click', onPrevBtnClick)

let translation = 0;

const elem = getComputedStyle(slideRow.firstElementChild);



function onNextBtnClick() {
  

        translation += (parseInt(elem.width)+21);
    slideRow.style.transform = `translateX(-${translation}px)`
    //    slideRow.style.transition= " all 0.5s ease-out" 


    if (translation > (slideRow.children.length-3) * parseInt(elem.width)) {
        nextButton.disabled = true
    } 

    if (translation < slideRow.clientWidth && translation !== 0) {
          prevButton.disabled = false
    }
console.log(slideRow.firstElementChild)


}

function onPrevBtnClick() {
      console.log(translation)
    console.log(slideRow.clientWidth)
        if (translation < slideRow.clientWidth) {
                translation -= (parseInt(elem.width)+21);
    slideRow.style.transform = `translateX(-${translation}px)`  
    }
    // if (translation === slideRow.clientWidth) {
    //        translation -= 320*2;
    // slideRow.style.transform = `translateX(-${translation}px)`  
    // }

    if (translation < slideRow.clientWidth && translation !== 0) {
        nextButton.disabled = false
    } 
        if (translation === 0) {
        prevButton.disabled = true
   
    }

    console.log(translation)
    console.log(slideRow.clientWidth)
}


function onMouseoverOption(evt) {
    if (evt.target.classList.contains("option")) {
         console.log("mouseover")
    }
    // evt.target.classList.add(".white")
   
}



