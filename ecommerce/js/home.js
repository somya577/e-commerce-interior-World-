Almost out of storage … If you run out, you can't create or edit files, send or receive email on Gmail, or back up to Google Photos.
home.js
// navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 180){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg');
    }
})

// image collage

const collageImages = [...document.querySelectorAll('.collage-img')]

collageImages.map((item, i) => {
    item.addEventListener('mouseover', () => {
        collageImages.map((image, index) => {
            if(index != i){
                image.style.filter = `blur(10px)`;
                item.style.zIndex = 2;
            }
        })
    })

    item.addEventListener('mouseleave', () => {
        collageImages.map((image, index) => {
            image.style = null;
        })
    })
})