const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const heroBtn = document.querySelector(".hero_btn");
const modalForm = document.querySelector(".online_form_modal");
const modalCloseBtn = document.querySelector(".close_btn");
const prevButton = document.querySelector(".portfolio_btn_prev");
const nextButton = document.querySelector(".portfolio_btn_next");
const slideRow = document.querySelector(".line_sl");
const prevButtonFeed = document.querySelector(".js-feedback-btn-left");
const nextButtonFeed = document.querySelector(".js-feedback-btn-right");
const slideRowFeed = document.querySelector(".js-line_sl");

const width = getComputedStyle(document.body).width;
console.log(width)




heroBtn.addEventListener('click', onHeroBtnClick);
backdrop.addEventListener('click', onBackdropClick);

modalForm.addEventListener('submit', onModalFormSubmit);
document.addEventListener('keydown', onEscClick);
modalCloseBtn.addEventListener('click', onCloseBtnClick);
prevButton.addEventListener('click', onPrevBtnClick);
nextButton.addEventListener('click', onNextBtnClick);

prevButtonFeed.addEventListener('click', onPrevBtnFeedClick);
nextButtonFeed.addEventListener('click', onNextBtnFeedClick);






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


let feedbackTranslation = 0;

const feedbackElem = getComputedStyle(slideRowFeed.firstElementChild);


function onPrevBtnFeedClick(){
        if (translation < slideRowFeed.clientWidth) {
                translation -= (parseInt(feedbackElem.width)+16);
    slideRowFeed.style.transform = `translateX(-${translation}px)`  
    }
    if (translation < slideRowFeed.clientWidth && translation !== 0) {
        nextButtonFeed.disabled = false
    } 
        if (translation === 0) {
        prevButtonFeed.disabled = true
   
    }
}

function onNextBtnFeedClick() {
        translation += (parseInt(feedbackElem.width)+16);
    slideRowFeed.style.transform = `translateX(-${translation}px)`
    if (parseInt(width) < 768) {
         if (translation > (slideRowFeed.children.length-1) * parseInt(feedbackElem.width) ) {
        nextButtonFeed.disabled = true
    } 
    if (translation < slideRowFeed.clientWidth && translation !== 0) {
          prevButtonFeed.disabled = false
    }
    } else {
               if (translation > (slideRowFeed.children.length-4) * parseInt(feedbackElem.width) ) {
        nextButtonFeed.disabled = true
    } 
    if (translation < slideRowFeed.clientWidth && translation !== 0) {
          prevButtonFeed.disabled = false
    }  
   }
  
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



// const s = 'Привет мир'

// let k = -1;

// while ((k = s.indexOf('и', k+1))>=0)

//     console.log(k)


