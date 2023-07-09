Almost out of storage … If you run out, you can't create or edit files, send or receive email on Gmail, or back up to Google Photos.
product.js
let ratingStarInput = [...document.querySelectorAll('.rating-star')];

ratingStarInput.map((star, index) => {
    star.addEventListener('click', () => {
        for(let i = 0; i < 5; i++){
            if(i <= index){
                ratingStarInput[i].src = `img/fill star.png`;
            } else{
                ratingStarInput[i].src = `img/no fill star.png`;
            }
        }
    })
})