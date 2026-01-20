const main = document.querySelector('main')
const header = document.querySelector('header')

const threshhold = 200

document.onscroll = () => {
    if (threshhold < header.offsetTop) {
        header.classList.add('passed')
    }
    else if (header.offsetTop < threshhold / 2) {
        header.classList.remove('passed')
    }
}