function bottleLoadingAnimation() {
    const bottle = document.querySelectorAll('.bottle-loading img');
    let index = 0;
    const intervalId = setInterval(() => {
        bottle.forEach((img) => {
            img.style.transform = `scale(0.1)`;
            img.style.visibility = 'hidden';
            
    }); 
        bottle[index].style.visibility = 'visible';
        bottle[index].style.transform = `scale(1.5)`;
        index = (index + 1) % bottle.length;
    }, 1000);

    setTimeout(() => {
        document.querySelector('.poshlaya-molli-logo-loading').style.opacity = 0;
       document.querySelector('.bottle-loading').style.opacity = 0;
        document.querySelector('.poshlaya-molli-logo-loading').setAttribute('src', 'https://i.pinimg.com/736x/7a/51/ac/7a51ac824d40ac81d77d30fa0774b7c9.jpg');
    }, 4500);

    setTimeout(() => {
        document.body.style.background = 'black';
        document.querySelector('.bottle-loading').style.display = `none`;
        clearInterval(intervalId);
    }, 5000);

    

    setTimeout(() => {
        document.querySelector('.poshlaya-molli-logo-loading').style.opacity = 1
    }, 6000);
    
}
bottleLoadingAnimation()


