import {TweenMax} from 'gsap';
export function initCaption(){
    startCaption();
}
export function changeBGCaption(){
    return new Promise(resolve => {
        setTimeout(() => { 
            var slideToShow= document.querySelector('div.slick-slide.slick-active');
            TweenMax.to(slideToShow.querySelector('.aside_caption'),0.1,{
                autoAlpha:1
            });
            TweenMax.staggerTo(slideToShow.querySelectorAll('path'),0.6,{
                autoAlpha:1,
                x:0,
                width:"100%",
                height:"100%",
                rotation:0,
                y:0
            },0.2 );
          resolve('resolved changeBGCaption');
        }, 200); 
    });
}
export function changeContentCaption(){
    return new Promise(resolve => {    
        setTimeout(() => { 
            var slideToShow= document.querySelector('div.slick-slide.slick-active');
            TweenMax.staggerTo([
                    slideToShow.querySelector('.aside_caption .btn'),
                    slideToShow.querySelector('.aside_caption h1'),
                    slideToShow.querySelector('.aside_caption p')
            ],0.5,{
                x:0,
                y:0,
                autoAlpha:1
            },0.2); 
            resolve('resolved changeContentCaption');
        }, 1000); 
      });
}
export function clearCaption() {
        if(document.querySelectorAll('.aside_caption')===null){
            clearCaption();
        }
        else{            
            try {
                TweenMax.set(document.querySelectorAll('.aside_caption'),{
                    autoAlpha:0
                });
                TweenMax.set(document.querySelectorAll('#slider .slick-track path'),{
                    y:500,
                    width:"40px",
                    height:"40px",
                    x:420,
                    rotation:120,
                    autoAlpha:0
                });
                TweenMax.set(document.querySelectorAll('.aside_caption h1'),{
                    autoAlpha:0,
                    x:-520,
                    y:4
                });
                TweenMax.set(document.querySelectorAll('.aside_caption p'),{
                    autoAlpha:0,
                    x:520,
                    y:2
                });
                TweenMax.set(document.querySelectorAll('.aside_caption .btn'),{
                    autoAlpha:0,
                    y:420,
                    x:1
                });
            } 
            catch (error) {
                console.log('An Erros occurs=> '+error);
            }
        }
}
async function startCaption() {//console.log('startCaption() executed');
    clearCaption();
    await changeBGCaption();
    await changeContentCaption();
}
