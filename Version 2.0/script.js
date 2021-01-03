const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

const lftSlides = document.querySelectorAll('.img')
let leftSlideIndex = lftSlides.length - 1

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

leftSlidesBgUp(leftSlideIndex)

upButton.addEventListener('click', () => changeSlideUp())
downButton.addEventListener('click', () => changeSlideDown())

const changeSlideUp = () => {
    const sliderHeight = sliderContainer.clientHeight
    activeSlideIndex++
    leftSlideIndex--
    if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
            leftSlideIndex = lftSlides.length - 1 
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    leftSlidesBgUp(leftSlideIndex)
}

const changeSlideDown = () => {
    const sliderHeight = sliderContainer.clientHeight
    activeSlideIndex--
    leftSlideIndex++
    if(activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1
        leftSlideIndex = 0 
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    leftSlidesBgUp(leftSlideIndex)
}


function leftSlidesBgUp(i){
    const color = lftSlides[i].style.getPropertyValue("background-color")
    upButton.style.backgroundColor = color;
    downButton.style.backgroundColor = color;
}
