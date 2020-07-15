import  React from "react";
import Slider from 'react-slick';
import {initCaption,clearCaption } from './CaptionEffects';
import {TweenMax, Linear} from 'gsap';

export default class Slideshow  extends React.Component{
    constructor(props) {
        super(props); 
        this.state={
            settings:{
                dots: false,
                speed:600,
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: true,
                fade: true,
                infinite: true,
                //autoplay: true,
                autoplay: false,
                autoplaySpeed: 5000,
                adaptiveHeight: true,
                swipeToSlide: true,
                touchMove:true,
                pauseOnHover: false,
                swipe:true,
                beforeChange:function(index){
                    clearCaption();
                },
                afterChange: function (index) {
                    initCaption();
                },
                arrows:false
            }
        }; 
    } 
    goingToService=(e)=>{
        try {
            TweenMax.to([window,document.querySelector("#main_content")], 2.5, {
                ease:Linear.EaseIn,
                scrollTo:{
                  y:'#articl-bckg-img-service', 
                  offsetY:320
                }
            },0.3);
            var serviceHref='/services/'+e.currentTarget.getAttribute('data-service').toString();
            console.log('serviceHref '+serviceHref);
        } 
        catch (error) {
            console.log('An error occurs in goingToService() Slideshow.js '+error);
        }
    }
    loadCaption=()=>{
            try {
                clearCaption();
                setTimeout(() => {
                    initCaption();
                }, 11000);
            }
            catch(error){
                console.error('An error occurs into Home.js '+error);
            }
    }
    hoverBtn=(e)=>{
        TweenMax.from(e.currentTarget,0.3, { 
            autoAlpha:0.8,
            scale:1.5
        },0.1);
        TweenMax.to(e.currentTarget,0.3, { 
            scale:1
        },0.1); 
        TweenMax.set(e.currentTarget.querySelector('.bg_normal ellipse'),{
            attr:{
                style:"fill:url('#bg_btn_radial_orange');stroke:#ffae4c;stroke-width:1.28px"
            }
        }); 
    }
    btnNormal=(e)=>{
        TweenMax.from(e.currentTarget,0.3, { 
            autoAlpha:1,
            scale:1.5
        },0.1);
        TweenMax.to(e.currentTarget,0.3, { 
            autoAlpha:0.8,
            scale:1
        },0.1);  
        TweenMax.set(e.currentTarget.querySelector('.bg_normal ellipse'), { 
            attr:{
                style:"fill:#ffffff;stroke:#ffffff;stroke-width:1.28px"
            }
        }); 
    }
    setHeightSlider=()=>{ 
        var widthClientSize= parseInt(window.innerWidth);
        let sliderHeight=550;
        try {
            if(widthClientSize>1651){
                sliderHeight=940;
            }
            else if(widthClientSize<1650 && widthClientSize>=1450){
                sliderHeight=850;
            }
            else if(widthClientSize<1450 && widthClientSize>=1330){
                sliderHeight=780;
            }
            else if(widthClientSize<1330 && widthClientSize>=1250){
                sliderHeight=730;
            }
            else if(widthClientSize<1250 && widthClientSize>=1170){
                sliderHeight=690;
            }
            else if(widthClientSize<1170 && widthClientSize>=950){
                sliderHeight=555;
            } 
            else if(widthClientSize<950 && widthClientSize>=850){
                sliderHeight=470;
            } 
            else if(widthClientSize<850 && widthClientSize>=750){
                sliderHeight=410;
            }
            else if(widthClientSize<750 && widthClientSize>=690){
                sliderHeight=380;
            } 
            else if(widthClientSize<690 && widthClientSize>=560){
                sliderHeight=320;
            }
            else if(widthClientSize<560 && widthClientSize>=400){
                sliderHeight=220;
            }
            else if(widthClientSize<400 && widthClientSize>=200){
                sliderHeight=180;
            }
            else if(widthClientSize===0){
                this.setHeightSlider();
            }
        } 
        catch (error) {
            console.error('An error occurs into Slideshow.js => '+error);   
        }
        finally{
            if(document.querySelector('.slick-track')===null){
                setTimeout(() => {
                    this.setHeightSlider();
                },300);
            }
            else{
                document.querySelector('.slick-track').setAttribute("style","min-height:"+sliderHeight+"px !important;");
            }
        }
    }
    componentDidMount(){
        try {
            clearCaption();
            window.addEventListener("resize", this.setHeightSlider);
            document.querySelector('.hamburger').addEventListener("click",this.setHeightSlider);
            this.setHeightSlider();
            initCaption();
            window.addEventListener("load", this.setHeightSlider); 
            window.addEventListener("load", this.loadCaption);
        } 
        catch (error) {
            console.log('An error occurs in componentDidMount Slideshow.js'+error);
        }
    }
  
    next=() =>{
        setTimeout(() => {
            this.slider.slickNext();
        },100);
        setTimeout(() => {
            initCaption();
        },250);  
    }
    previous=()=>{
        setTimeout(() => {
            this.slider.slickPrev();
        },100);
        setTimeout(() => {
            initCaption();
        }, 250);
    } 
    getBtnNext=()=>{
        return(
            <div onMouseOver={this.hoverBtn} onMouseOut={this.btnNormal} className='btn-next' style={{ display: 'block',opacity:0.8}} onClick={this.next}>
                <svg width="100%" height="100%" viewBox="0 0 272 276" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinecap:'square',strokeMiterlimit:1.5,maxWidth:'70px'}}>
                    <g transform="matrix(1,0,0,1,-13.8912,-10.9071)">
                        <g transform="matrix(4.1707,0,0,4.1707,-5072.11,-1174.15)">
                            <g className="gray_elipse" transform="matrix(0.397005,0,0,0.376374,1251.86,-298.781)">
                                <ellipse cx="0.259" cy="1638.91" rx="81.401" ry="84.792" style={{fill:'url(#bg_btn_linear_gray)',stroke:'rgb(108,108,108)',strokeWidth:'0.53px'}}/>
                            </g>
                        </g>
                        <g transform="matrix(4.1707,0,0,4.1707,-5072.11,-1174.15)">
                            <g className="bg_normal" transform="matrix(0.38389,0,0,0.367676,1252.03,-286.839)">
                                <ellipse cx="0.259" cy="1638.91" rx="81.401" ry="84.792" style={{fill:'#ffffff',stroke:'#ffffff',strokeWidth:'1.28px'}}/>
                            </g>
                        </g>
                        <g transform="matrix(4.1707,0,0,4.1707,-5072.11,-1174.15)">
                            <g id="gray_arrow" transform="matrix(-0.63116,-2.30142e-16,2.28399e-16,-0.61693,1287.43,1312.35)">
                                <path d="M73.637,1649.99L26.725,1618.63L78.779,1584.29L61.028,1617.77L73.637,1649.99Z" style={{fill:'rgb(75,75,75)',stroke:'rgb(76,76,76)',strokeWidth:'0.13px',strokeLinejoin:'bevel'}}/>
                            </g>
                        </g>
                        <g transform="matrix(4.1707,0,0,4.1707,-5072.11,-1174.15)">
                            <g id="black_arrow" transform="matrix(-0.63116,-2.30142e-16,2.28399e-16,-0.61693,1287.04,1315.4)">
                                <path d="M73.29,1655.09L28.139,1623.03L79.931,1587.67L59.202,1622.46L73.29,1655.09Z" style={{stroke:'black',strokeWidth:'0.13px',strokeLinejoin:'bevel'}}/>
                            </g>
                        </g>
                    </g>
                    <defs>
                        <linearGradient id="bg_btn_linear_gray" x1="0" y1="0"
                            x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(162.802,0,0,169.583,-81.1418,1638.91)">
                            <stop offset="0" style={{stopColor:'black',stopOpacity:1}}/>
                            <stop offset="1" style={{stopColor:'rgb(160,160,160)',stopOpacity:1}}/>
                        </linearGradient>
                        <radialGradient id="bg_btn_radial_orange" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse" gradientTransform="matrix(75.3738,0,0,78.6976,5.53429,1631.77)">
                            <stop offset="0" style={{stopColor:'rgb(255,141,53)',stopOpacity:1}}/>
                            <stop offset="1" style={{stopColor:'rgb(255,161,88)',stopOpacity:1}}/>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        );
    }
    getBtnPrev=()=>{
        return(
            <div onMouseOver={this.hoverBtn} onMouseOut={this.btnNormal} className='btn-prev' style={{display: 'block',opacity:0.8}} onClick={this.previous}>
                    <svg  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinecap:'square',strokeMiterlimit:1.5,maxWidth:'70px'}} width="100%" height="100%" viewBox="0 0 272 276" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g transform="matrix(1,0,0,1,-13.8912,-10.9071)">
                            <g transform="matrix(4.1707,0,0,4.1707,-5072.11,-1174.15)">
                                <g className="gray_elipse" transform="matrix(0.397005,0,0,0.376374,1251.86,-298.781)">
                                    <ellipse cx="0.259" cy="1638.91" rx="81.401" ry="84.792" style={{fill:'url(#bg_btn_linear_gray)',stroke:'rgb(108,108,108)',strokeWidth:'0.53px'}}/>
                                </g>
                            </g>
                            <g transform="matrix(4.1707,0,0,4.1707,-5072.11,-1174.15)">
                                <g className="bg_normal" transform="matrix(0.38389,0,0,0.367676,1252.03,-286.839)">
                                    <ellipse cx="0.259" cy="1638.91" rx="81.401" ry="84.792" style={{fill:'#ffffff',stroke:'#ffffff',strokeWidth:'1.28px'}}/>
                                </g>
                            </g>
                            <g transform="matrix(4.1707,0,0,4.1707,-5072.11,-1174.15)">
                                <g transform="matrix(0.63116,1.52847e-16,-1.52847e-16,0.61693,1214.93,-682.097)">
                                    <path d="M73.637,1649.99L26.725,1618.63L78.779,1584.29L61.028,1617.77L73.637,1649.99Z" style={{fill:'rgb(75,75,75)',stroke:'rgb(76,76,76)',strokeWidth:'0.13px',strokeLinejoin:'bevel'}}/>
                                </g>
                            </g>
                            <g transform="matrix(4.1707,0,0,4.1707,-5072.11,-1174.15)">
                                <g transform="matrix(0.63116,1.52847e-16,-1.52847e-16,0.61693,1215.32,-685.153)">
                                    <path d="M73.29,1655.09L28.139,1623.03L79.931,1587.67L59.202,1622.46L73.29,1655.09Z" style={{stroke:'black',strokeWidth:'0.13px',strokeLinejoin:'bevel'}}/>
                                </g>
                            </g>
                        </g>
                        <defs>
                            <linearGradient id="bg_btn_linear_gray" x1="0" y1="0"
                                x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(162.802,0,0,169.583,-81.1418,1638.91)">
                                <stop offset="0" style={{stopColor:'black',stopOpacity:1}}/>
                                <stop offset="1" style={{stopColor:'rgb(160,160,160)',stopOpacity:1}}/>
                            </linearGradient>
                            <radialGradient id="bg_btn_radial_orange" cx="0" cy="0" r="1"
                                gradientUnits="userSpaceOnUse" gradientTransform="matrix(75.3738,0,0,78.6976,5.53429,1631.77)">
                                <stop offset="0" style={{stopColor:'rgb(255,141,53)',stopOpacity:1}}/>
                                <stop offset="1" style={{stopColor:'rgb(255,161,88)',stopOpacity:1}}/>
                            </radialGradient>
                        </defs>
                    </svg>     
            </div>
        );
    }
    render(){
        return(
            <article id="home">
                <Slider ref={c => this.slider = c }  {...this.state.settings}>
                    <div key={1} style={{
                                width:'100% !important',
                                cursor:'grab'}} >
                                <aside style={{zIndex:7,position: 'absolute',width:' 100%',maxWidth: '500px',top: '15%',left: '45%',padding: '10px',height:'100%',opacity:0,maxHeight:'270px'}} className='aside_caption'>
                                    <div style={{position:'absolute',zIndex:6,padding:' 20px 30px 10px 25px'}} className="content_caption">
                                        <h1>Custom Web Apps</h1>
                                        <p>Need Monitoring the quality and speed of your bussiness operations.</p>
                                        <span className='btn btn_slider' data-service="web-development" style={{zIndex:10}} onClick={this.goingToService}>Read More</span>
                                    </div>
                                    <svg className="bg_caption" style={{position:'absolute',width:'100%',height:'100%',zIndex:2,maxHeight:'330px',fillRule:'evenodd',clipRule:'evenodd',strokeLinecap:'round',strokeLinejoin:'bevel',strokeMiterlimit:1.5}} >
                                        <path d="M597.108,395.981L331.163,395.981L597.108,5.746L597.108,395.981Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M175.07,5.746L597.108,5.746L331.163,395.981L175.07,5.746Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M280.676,269.764L331.163,395.981L116.01,395.981L74.409,250.75L280.676,269.764Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M280.676,269.764L74.409,250.75L58.156,194.011L192.823,50.129L280.676,269.764Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M116.01,395.981L4.227,5.746L4.227,395.981L116.01,395.981Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M192.823,50.129L58.156,194.011L4.227,5.746L175.07,5.746L192.823,50.129Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                    </svg>
                                </aside>
                                <img src="/img/home/slide-01.jpg" alt="" style={{width:'100%',position:'absolute' ,height:'auto',zIndex:1}}/>
                    </div>
                    <div key={2} style={{
                                width:'100% !important',
                                cursor:'grab'}} >
                                <aside style={{zIndex:7,position: 'absolute',
                                width:' 100%',maxWidth: '500px',top: '15%',
                                left: '45%',padding: '10px',height:'100%'}} className='aside_caption'>
                                    <div style={{position:'absolute',zIndex:6,padding:' 20px 30px 10px 25px'}} className="content_caption">
                                        <h1 style={{opacity:0}}>UI/UX </h1>
                                        <p style={{opacity:0}}>Need increase the User Experience of your web apps.</p>
                                        <button className='btn btn_slider' data-service="web-development" style={{zIndex:10,opacity:0}}  onClick={this.goingToService}>Read More</button>
                                    </div>
                                    <svg className="bg_caption" style={{position:'absolute',width:'100%',height:'100%',zIndex:2,maxHeight:'330px',fillRule:'evenodd',clipRule:'evenodd',strokeLinecap:'round',strokeLinejoin:'bevel',strokeMiterlimit:1.5}} >
                                        <path d="M597.108,395.981L331.163,395.981L597.108,5.746L597.108,395.981Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M175.07,5.746L597.108,5.746L331.163,395.981L175.07,5.746Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M280.676,269.764L331.163,395.981L116.01,395.981L74.409,250.75L280.676,269.764Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M280.676,269.764L74.409,250.75L58.156,194.011L192.823,50.129L280.676,269.764Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M116.01,395.981L4.227,5.746L4.227,395.981L116.01,395.981Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M192.823,50.129L58.156,194.011L4.227,5.746L175.07,5.746L192.823,50.129Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                    </svg>
                                </aside>
                                <img src="/img/home/slide-02.jpg" alt="" style={{width:'100%',position:'absolute' ,height:'auto',zIndex:1}}/>
                    </div>
                    <div key={3} style={{
                                width:'100% !important',
                                cursor:'grab'}} >
                                <aside style={{zIndex:7,position: 'absolute',width:' 100%',maxWidth: '500px',top: '15%',left: '45%',padding: '10px',height:'100%',opacity:0,maxHeight:'270px'}} className='aside_caption'>
                                    <div style={{position:'absolute',zIndex:6,padding:' 20px 30px 10px 25px'}} className="content_caption">
                                        <h1 style={{opacity:0}}>E-commerce</h1>
                                        <p style={{opacity:0}}>Billing your products or services from an e-commerce web app.</p>
                                        <button className='btn btn_slider' data-service="e-commerce" style={{zIndex:10,opacity:0}} onClick={this.goingToService}>Read More</button>
                                    </div>
                                    <svg className="bg_caption" style={{position:'absolute',width:'100%',height:'100%',zIndex:2,maxHeight:'330px',fillRule:'evenodd',clipRule:'evenodd',strokeLinecap:'round',strokeLinejoin:'bevel',strokeMiterlimit:1.5}} >
                                        <path d="M597.108,395.981L331.163,395.981L597.108,5.746L597.108,395.981Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M175.07,5.746L597.108,5.746L331.163,395.981L175.07,5.746Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M280.676,269.764L331.163,395.981L116.01,395.981L74.409,250.75L280.676,269.764Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M280.676,269.764L74.409,250.75L58.156,194.011L192.823,50.129L280.676,269.764Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M116.01,395.981L4.227,5.746L4.227,395.981L116.01,395.981Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M192.823,50.129L58.156,194.011L4.227,5.746L175.07,5.746L192.823,50.129Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                    </svg>
                                </aside>
                                <img src="/img/home/slide-03.jpg" alt="" style={{width:'100%',position:'absolute' ,height:'auto',zIndex:1}}/>
                    </div>
                    <div key={4} style={{
                                width:'100% !important',
                                cursor:'grab'}} >
                                <aside style={{zIndex:7,position: 'absolute',width:' 100%',maxWidth: '500px',top: '15%',left: '45%',padding: '10px',height:'100%',opacity:0,maxHeight:'270px'}} className='aside_caption'>
                                    <div style={{position:'absolute',zIndex:6,padding:' 20px 30px 10px 25px'}} className="content_caption">
                                        <h1 style={{opacity:0}}>Custom Dashboard </h1>
                                        <p style={{opacity:0}}>I can build you a custom Dashboard for your business operations into cloud.</p>
                                        <button className='btn btn_slider' data-service="web-development" style={{zIndex:10,opacity:0}}  onClick={this.goingToService}>Read More</button>
                                    </div>
                                    <svg className="bg_caption" style={{position:'absolute',width:'100%',height:'100%',zIndex:2,maxHeight:'330px',fillRule:'evenodd',clipRule:'evenodd',strokeLinecap:'round',strokeLinejoin:'bevel',strokeMiterlimit:1.5}} >
                                        <path d="M597.108,395.981L331.163,395.981L597.108,5.746L597.108,395.981Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M175.07,5.746L597.108,5.746L331.163,395.981L175.07,5.746Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M280.676,269.764L331.163,395.981L116.01,395.981L74.409,250.75L280.676,269.764Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M280.676,269.764L74.409,250.75L58.156,194.011L192.823,50.129L280.676,269.764Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M116.01,395.981L4.227,5.746L4.227,395.981L116.01,395.981Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                        <path d="M192.823,50.129L58.156,194.011L4.227,5.746L175.07,5.746L192.823,50.129Z" style={{opacity:0,fill:'white',stroke:'white',strokeWidth:'1.5px'}}/>
                                    </svg>
                                </aside>
                                <img src="/img/home/slide-04.jpg" alt="" style={{width:'100%',position:'absolute' ,height:'auto',zIndex:1}}/>
                    </div>
                </Slider>
                <this.getBtnPrev/>
                <this.getBtnNext/>
            </article>
        );
    } 
}
