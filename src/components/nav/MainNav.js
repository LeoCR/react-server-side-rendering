import React from 'react';
import {TweenLite,TweenMax} from 'gsap';

class MainNav extends React.Component{
  constructor(props) {
      super(props);   
      this.state={
        isOpenedNav:false,
        isMobile:false
      };
  }
  getDesktopNav=()=>{
        return(
          <ul id="navigation_ul" style={{background:'#ffffff'}}>
              <li>
                <a className="nav_btn one_single_nav_btn"  onClick={(e)=>this.btnNavClicked(e)}  
                  style={{color:'#656565'}} onMouseOver={this.btnNavHover} 
                  onMouseOut={this.btnNavOut} data-href="#home" href="#home"
                  title="Home" id="nav-home">
                  <p className="txt_nav_menu">HOME</p>
                </a>
              </li>
              <li>
                <a className="nav_btn one_single_nav_btn" onClick={(e)=>this.btnNavClicked(e)} 
                    style={{color:'#656565'}}  data-href="#about-us" href="#about-us"
                    onMouseOver={this.btnNavHover}  onMouseOut={this.btnNavOut}
                    title="About" id="nav-about">
                  <p className="txt_nav_menu">ABOUT</p>
                </a>
              </li>
              <li>
                <a className="nav_btn one_single_nav_btn"  onClick={(e)=>this.btnNavClicked(e)}
                  data-href="#services"  href="#services"
                  style={{color:'#656565'}} onMouseOver={this.btnNavHover} 
                   onMouseOut={this.btnNavOut} title="Services" id="nav-services">
                  <p className="txt_nav_menu">SERVICES</p>
                </a>
              </li>
              <li>
                <a className="nav_btn one_single_nav_btn"  
                  onClick={(e)=>this.btnNavClicked(e)} data-href="#contact"  href="#contact"
                  style={{color:'#656565'}} onMouseOver={this.btnNavHover} 
                   onMouseOut={this.btnNavOut} title="Contact" id="nav-contact">
                  <p className="txt_nav_menu">CONTACT</p>
                </a>
              </li>
          </ul> 
        );
  }
  getMobileNav=()=>{
        return(
          <ul id="navigation_ul" style={{background:'#ffffff'}}>
              <li>
                <a className="nav_btn one_single_nav_btn"  onClick={(e)=>this.btnNavClicked(e)}  
                style={{color:'#656565'}} onMouseOver={this.btnNavHover} 
                onMouseOut={this.btnNavOut} data-href="#home" href="#home" 
                title="Home" id="nav-home">
                  <p className="txt_nav_menu">
                  <svg width="100%" height="100%" 
                      viewBox="0 0 11 11" version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{
                      fillRule:'evenodd',
                      clipRule:'evenodd',
                      strokeLinejoin:'round',
                      strokeMiterlimit:1.41421}}>
                    <g id="btn_home">
                      <path className="btn_bg_nav_mobile" d="M10.8,2.7c0,-1.49 -1.21,-2.7 -2.7,-2.7l-5.4,0c-1.49,0 -2.7,1.21 -2.7,2.7l0,5.4c0,1.49 1.21,2.7 2.7,2.7l5.4,0c1.49,0 2.7,-1.21 2.7,-2.7l0,-5.4Z"/>
                      <path d="M2.531,8.357l0,-3.374l-1.209,0l4.202,-2.626l4.198,2.626l-1.148,0l0,3.374l-2.312,0l0,-1.726l-1.233,0l0,1.726l-2.498,0Z" style={{fill:'#fff'}}/>
                      <path d="M9.722,4.983l-1.148,0l0,3.374l-2.312,0l0,-1.726l-1.233,0l0,1.726l-2.498,0l0,-3.374l-1.209,0l4.202,-2.626l4.198,2.626Zm-7.564,-0.24l0.613,0l0,3.374l2.018,0l0,-1.726l1.713,0l0,1.726l1.832,0l0,-3.374l0.551,0l-3.361,-2.103l-3.366,2.103Z" style={{fill:'#fff'}}/>
                    </g>
                    </svg>
                  </p>
                </a>
              </li>
              <li>
                <a className="nav_btn one_single_nav_btn" onClick={(e)=>this.btnNavClicked(e)} 
                    style={{color:'#656565'}}  data-href="#about-us" href="#about-us" 
                    onMouseOver={this.btnNavHover}  onMouseOut={this.btnNavOut}
                    title="About" id="nav-about">
                  <p className="txt_nav_menu">
                      <svg width="100%" height="100%" viewBox="0 0 11 11" 
                        version="1.1" xmlns="http://www.w3.org/2000/svg" 
                        style={{fillRule:'evenodd',clipRule:'evenodd',
                        strokeLinecap:'round',
                        strokeLinejoin:'round',strokeMiterlimit:1.5}}>
                        <g id="btn_home">
                        <path className="btn_bg_nav_mobile" d="M10.8,2.7c0,-1.49 -1.21,-2.7 -2.7,-2.7l-5.4,0c-1.49,0 -2.7,1.21 -2.7,2.7l0,5.4c0,1.49 1.21,2.7 2.7,2.7l5.4,0c1.49,0 2.7,-1.21 2.7,-2.7l0,-5.4Z"/><g><path d="M2.221,6.259l-0.508,-1.007l0.298,-1.218l0.639,-0.142l0.13,-0.118l0.19,0.26l-0.097,1.091l0.201,0.248l0.185,-0.248l-0.098,-1.091l0.199,-0.26l0.125,0.118l0.644,0.142l0.175,0.716l-0.476,1.509l-1.607,0Z" style={{fill:'#fff'}}/>
                        <ellipse cx="3.068" cy="3.131" rx="0.621" ry="0.652" 
                        style={{fill:'#fff',stroke:'#fff',strokeWidth:'0.24px'}}/>
                        <path d="M4.368,8.386l-0.736,-1.495l0.573,-1.823l0.77,-0.183l0.243,-0.219l0.283,0.322l-0.141,1.736l0.141,0.281l0.44,-0.281l-0.196,-1.736l0.323,-0.322l0.21,0.219l0.792,0.183l0.524,1.823l-0.76,1.495l-2.466,0Z" style={{fill:'#fff'}}/>
                        <ellipse cx="5.618" cy="3.692" rx="0.938" ry="0.921" style={{fill:'#fff',stroke:'#fff',strokeWidth:'0.24px'}}/>
                        <ellipse cx="7.86" cy="3.077" rx="0.586" ry="0.613" style={{fill:'#fff'}}/>
                        <path d="M6.87,3.95l0.616,-0.142l0.116,-0.151l0.181,0.151l-0.094,1.183l0.183,0.21l0.195,-0.21l-0.105,-1.183l0.179,-0.151l0.134,0.151l0.612,0.142l0.233,1.111l-0.47,0.945l-1.78,0l-0.166,-1.279l0.166,-0.777Z" style={{fill:'#fff'}}/>
                        </g>
                        </g>
                      </svg>
                    </p>
                </a>
              </li>
              <li>
                <a className="nav_btn one_single_nav_btn"  onClick={(e)=>this.btnNavClicked(e)}
                  data-href="#services" href="#services"  
                  style={{color:'#656565'}} onMouseOver={this.btnNavHover} 
                   onMouseOut={this.btnNavOut} title="Services" id="nav-services">
                  <p className="txt_nav_menu">
                    <svg width="100%" height="100%" viewBox="0 0 11 11" 
                    version="1.1" xmlns="http://www.w3.org/2000/svg" 
                    style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinecap:'square',strokeMiterlimit:1.5}}>
                      <g id="btn_home">
                      <path className="btn_bg_nav_mobile" 
                        d="M10.8,2.7c0,-1.49 -1.21,-2.7 -2.7,-2.7l-5.4,0c-1.49,0 -2.7,1.21 -2.7,2.7l0,5.4c0,1.49 1.21,2.7 2.7,2.7l5.4,0c1.49,0 2.7,-1.21 2.7,-2.7l0,-5.4Z"/>
                      <path d="M2.219,6.424l1.742,-2.151l1.815,1.199l1.643,-2.167l1.744,0.519" 
                      style={{fill:'none',stroke:'#fff',strokeWidth:'0.55px'}}/>
                      </g>
                    </svg>
                  </p>
                </a>
              </li>
              <li>
                <a className="nav_btn one_single_nav_btn"  
                  onClick={(e)=>this.btnNavClicked(e)} data-href="#contact" href="#contact"  
                  style={{color:'#656565'}} onMouseOver={this.btnNavHover} 
                   onMouseOut={this.btnNavOut} title="Contact" id="nav-contact">
                  <p className="txt_nav_menu">
                    <svg width="100%" height="100%" viewBox="0 0 11 11" version="1.1" 
                    xmlns="http://www.w3.org/2000/svg"   
                    style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:1.41421}}><g>
                        <path className="btn_bg_nav_mobile" 
                        d="M10.8,2.7c0,-1.49 -1.21,-2.7 -2.7,-2.7l-5.4,0c-1.49,0 -2.7,1.21 -2.7,2.7l0,5.4c0,1.49 1.21,2.7 2.7,2.7l5.4,0c1.49,0 2.7,-1.21 2.7,-2.7l0,-5.4Z"/><g>
                        <path d="M8.09,1.549c-0.058,-0.184 -0.21,-0.266 -0.338,-0.183l-1.198,0.773c-0.129,0.083 -0.186,0.299 -0.128,0.483l0.924,2.928c0.058,0.184 0.209,0.266 0.338,0.183l1.198,-0.773c0.128,-0.083 0.185,-0.3 0.127,-0.483l-0.923,-2.928Zm0.105,3.3c0.061,0 0.11,0.076 0.11,0.168c0,0.093 -0.049,0.168 -0.11,0.168c-0.06,0 -0.11,-0.075 -0.11,-0.168c0,-0.092 0.05,-0.168 0.11,-0.168Zm-0.204,-3.088c-0.02,-0.065 -0.073,-0.095 -0.118,-0.067l-1.19,0.744c-0.045,0.028 -0.066,0.104 -0.046,0.169l0.739,2.42c0.02,0.064 0.073,0.094 0.118,0.066l1.19,-0.744c0.045,-0.028 0.066,-0.104 0.046,-0.168l-0.739,-2.42Z" style={{fill:'#fff'}}/>
                        <path d="M5.915,2.515c0,0 0.013,-0.397 0.21,-0.672c0.193,-0.27 0.445,-0.33 0.445,-0.33c0,0 0.067,-0.027 0.043,-0.114c-0.017,-0.064 -0.064,-0.065 -0.064,-0.065c0,0 -0.249,0.002 -0.492,0.331c-0.3,0.407 -0.266,0.847 -0.266,0.847c0,0 -0.004,0.059 0.053,0.063c0.067,0.005 0.071,-0.06 0.071,-0.06Z" style={{fill:'#fff'}}/><path d="M6.227,2.497c0,0 0.003,-0.24 0.132,-0.413c0.126,-0.17 0.296,-0.215 0.296,-0.215c0,0 0.045,-0.019 0.028,-0.07c-0.013,-0.038 -0.045,-0.037 -0.045,-0.037c0,0 -0.169,0.01 -0.328,0.217c-0.196,0.257 -0.167,0.521 -0.167,0.521c0,0 -0.001,0.036 0.038,0.036c0.045,0 0.046,-0.039 0.046,-0.039Z" style={{fill:'#fff'}}/>
                        </g>
                        <path d="M4.051,8.251c0,0 -1.655,-2.23 -1.717,-3.181c-0.053,-0.83 0.417,-1.581 1.738,-1.569c1.292,0.012 1.81,0.788 1.756,1.567c-0.067,0.944 -1.777,3.183 -1.777,3.183Zm0.013,-4.153c0.453,0 0.821,0.305 0.821,0.681c0,0.375 -0.368,0.68 -0.821,0.68c-0.453,0 -0.82,-0.305 -0.82,-0.68c0,-0.376 0.367,-0.681 0.82,-0.681Z" style={{fill:'#fff'}}/>
                        </g>
                    </svg>
                  </p>
                </a>
              </li>
          </ul> 
        );
  }
  setNav=()=>{
    try { 
      var pieces = 14;
      setTimeout(() => {
        if(window.innerWidth  >=1050){
          this.setState({
            isMobile:false
          });
          if (parseInt(document.querySelectorAll('.nav_btn .piece').length)===0 ) {
            console.log('.nav_btn .piece is undefined');  
            setTimeout(function(){ 
                  var pieceW = 20,
                  pieceH = 25,
                  navsItems=document.querySelectorAll('.nav_btn');
                  [].forEach.call(navsItems,function(div){
                    var txtNav= "<p class='txt_nav_menu'>"+div.getAttribute('title').toUpperCase()+"</p>";
                    div.innerHTML= txtNav; 
                    for (var i = pieces - 1; i >= 0; i--) {
                      div.innerHTML+='<div class="piece" style="width:'+pieceW+'px;height:'+pieceH+'px;"></div>';
                    };
                  });
            },300); 
          }
        }
        else{
          this.setState({
            isMobile:true
          });
        }
      },800);
    } 
    catch (error) {
      console.log('error '+error);
    }
  } 
  componentDidMount(){
    try {
      window.addEventListener("resize",this.setNav);
      window.addEventListener("load", this.setNav); 
    } 
    catch (error) {
      console.log("An error occurs in componentDidMount() MainNav.js "+error);      
    }
  }
  hoverEffect=(crntTarget)=>{
    try {
      TweenLite.set([crntTarget.querySelectorAll('.piece')],{
        x:0, y:0, rotationX:0,
         rotationY:0, opacity: 1, 
         z: 0
      }); 
      function breakGlass(from){
          var piesces=crntTarget.querySelectorAll('.piece');
          [].forEach.call(piesces,function(div){
            var distX = getRandomArbitrary(-250, 250),
                distY = getRandomArbitrary(-250, 250),
                rotY  = getRandomArbitrary(-720, 720),
                rotX  = getRandomArbitrary(-720, 720),
                z = getRandomArbitrary(-500, 500);
              TweenLite.from(div, 1, {
                x:distX, y:distY,
                 rotationX:rotX, rotationY:rotY,
                  opacity: 0, z: z
              });
          });
      }
      function getRandomArbitrary(min, max) {
          return Math.random() * (max - min) + min;
      }
      breakGlass(true);
    } 
    catch (error) {
      console.log("An error occurs in MainNav.js hoverEffect() "+error);
    }
  }
  setNormal=(selector=".nav_btn:not(.selected)")=>{
    var navsItems=document.querySelector(selector); 
    try {
      [].forEach.call(navsItems.querySelectorAll('.piece'),function(div){
        TweenLite.set(
          [div], {
              attr:{
                style:"width:20px;height:25px;"
              },
              x:0, 
              y:0, 
              rotationX:0, 
              rotationY:0, 
              opacity: 1, 
              z: 0
          })
      });
    } 
    catch (error) {
        console.log("An error occurs in MainNav.js setNormal() "+error);
    }
  }
  btnNavOut=(e)=>{
      e.stopPropagation();
      try {
        this.setNormal(".nav_btn:not(.selected)");
      } 
      catch (error) {
        console.log("An error occurs MainNav.js btnNavOut() "+error);
      }
  }
  btnNavHover=(e)=>{
    e.stopPropagation();
    try {
      this.setNormal(".nav_btn:not(.selected)");
      this.hoverEffect(e.currentTarget);
    } 
    catch (error) {
      console.log("An error occurs MainNav.js btnNavHover() "+error);
    }
  }
  btnNavClicked=(e)=>{
      e.preventDefault(); 
      var targetUrl=e.currentTarget.getAttribute("data-href").toString();
      var navsItems=document.querySelectorAll(".nav_btn"); 
      if (targetUrl==="#home"){
        TweenMax.to([window,document.querySelector("#main_content")], 2.5, {
                ease:Linear.EaseIn,
                scrollTo:{
                    y:targetUrl, 
                    offsetY:0
                }
        },0.3);
      }
      else if (targetUrl==="#about-us"){
          if(this.state.isMobile){
              TweenMax.to([window,document.querySelector("#main_content")], 2.5, {
                  ease:Linear.EaseIn,
                  scrollTo:{
                      y:targetUrl, 
                      offsetY:170
                  }///svg_cloud
              },0.3);
          }
          else{
              TweenMax.to([window,document.querySelector("#main_content")], 2.5, {
                  ease:Linear.EaseIn,
                  scrollTo:{
                      y:targetUrl, 
                      offsetY:310
                  }///svg_cloud
              },0.3);
          }
              TweenMax.staggerFrom(document.querySelector("#svg_cloud"),1.7,{
                  ease:Linear.EaseIn,
                  attr:{
                  style:"background:none"
                  }
              },0.2);
              TweenMax.staggerTo(document.querySelector("#svg_cloud"),1.7,{
                  ease:Linear.EaseIn,
                  attr:{
                  style:"background:url('/img/about/bg_icon_cloud.png') center center no-repeat;background-size:cover;"
                  }
              },0.3);
              TweenMax.staggerFrom(document.querySelector("#txt_title_about_us_clip"),1.7,{
                  ease:Linear.EaseIn,
                  attr:{
                  transform:" ",
                  style:"font-family: Poppins; font-size: 64px; fill: white; stroke: white;  "
                  }
              },0.2);
              TweenMax.staggerTo(document.querySelector("#txt_title_about_us_clip"),1.7,{
                  ease:Linear.EaseIn,
                  attr:{
                  transform:"matrix(0.99999,0.00372,-0.00031,0.99999,0.3378051570328624,-2.014376073723156)",
                  style:"font-family: Poppins; font-size: 64px; fill: white; stroke: white; stroke-width: 0.7px; stroke-linejoin: round; stroke-miterlimit: 1.41421; height: 75px; width: 304px; opacity: 0.996439; transform-origin: 0px 0px 0px;"
                  }
              },0.3);
      }
      else if(targetUrl==="#services"){
              if(this.state.isMobile){
                  TweenMax.to([window,document.querySelector("#main_content")],2.5, {
                  ease:Linear.EaseIn,
                  scrollTo:{
                      y:targetUrl,//#services
                      offsetY:100
                  }
                  });
              }
              else{
                  TweenMax.to([window,document.querySelector("#main_content")],2.5, {
                  ease:Linear.EaseIn,
                  scrollTo:{
                      y:targetUrl,
                      offsetY:320
                  }
                  });
              }
      }
      else if(targetUrl==="#contact"){
              if(this.state.isMobile){
                  TweenMax.to([window,document.querySelector("#main_content")],2.5, {
                  ease:Linear.EaseIn,
                  scrollTo:{
                      y:targetUrl,
                      offsetY:140
                  }
                  });
              }
              else{
                  TweenMax.to([window,document.querySelector("#main_content")],2.5, {
                  ease:Linear.EaseIn,
                  scrollTo:{
                      y:targetUrl,
                      offsetY:340
                  }
                  });
              }
      }
      else{
              TweenMax.to([window,document.querySelector("#main_content")], 2.5, {
                  ease:Linear.EaseIn,
                  scrollTo:{
                  y:targetUrl, 
                  offsetY:330
                  }
              });//console.log("targetUrl=> "+targetUrl);
      }
      try{
        [].forEach.call(navsItems,function(div){
          var parsedSlug=div.getAttribute("id").toString();
          if(parsedSlug!==targetUrl){//console.log(div.getAttribute("id"));
                div.classList.remove("selected");
          }
        });
        e.currentTarget.classList.add("selected");
      }
      catch(error ){
          console.error('An error occurs into MainNav => '+ error);
      }
      finally{
        this.hoverEffect(e.currentTarget);
      } 
  } 
  openMenu=()=>{ 
    try {
      this.setState({
        isOpenedNav: !this.state.isOpenedNav
      });  
      document.getElementById("main_nav").classList.toggle('opened_menu');
      document.querySelector('.hamburger--spin').classList.toggle("is-active");
      document.getElementById('section_content').classList.toggle('opened_menu');
    } 
    catch (error) {
      console.log("An error occurs in MainNav.js openMenu() "+error); 
    }
  }
  render(){ 
    const isMobileOn = this.state.isMobile;
      return( 
        <nav id="main_nav" className="navigation_div">
            <div className="hamburger hamburger--spin js-hamburger" onClick={this.openMenu} style={{display:'none'}}>
              <div className="hamburger-box">
                <div className="hamburger-inner"> </div>
              </div>
            </div>
            {isMobileOn ? (
              <this.getMobileNav/>
            ) : (
              <this.getDesktopNav/>
            )}
        </nav>
      );
    }
  }
  export default MainNav;