import React from 'react'; 
import {TimelineMax,TweenMax,Linear} from 'gsap';
export default class ReadMoreBG extends React.Component  {  
    getContent=()=>{
        console.log('ReadMoreBG getContent()');
        var tmlnSVGCnt=new TimelineMax({delay:0.4});
        tmlnSVGCnt.add(TweenMax.staggerFrom(
            document.querySelectorAll('#read_more_bg_content path'),
            0.5,{
            opacity:0,
            transformPerspective:100,
            transformOrigin:'80% 30%',
            x:170,  
            width:"0px",
            height:"0px",
            rotation:120,
            skewX:85,
            ease:Linear.easeIn
        },0.3));
        tmlnSVGCnt.add(
            TweenMax.staggerTo(document.querySelectorAll('#read_more_bg_content path'),
            0.2,{
            opacity:1,
            transformPerspective:300,
            transformOrigin:'0% 0%',
            x:0,  
            width:"100%",
            height:"100%",
            rotation:0,
            skewX:0,
            ease:Linear.easeIn
        },0.2));
    }
    componentDidMount(){  
        try {
            window.addEventListener("load", this.getContent); 
        } 
        catch (error) {
            console.log("An error occurs in ReadMoreBG.js componentDidMount() "+error);
        }
    }  
    render(){
        return(
            <svg width="100%" height="100%" viewBox="0 0 1200 800" version="1.1" xmlns="http://www.w3.org/2000/svg" id="read_more_bg_content" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:1.41421}}>
                <path 
                    d="M1194.95,2.75l-1194.02,0l1194.02,305.428l0,-305.428Z" 
                    style={{fill:'#fff'}}/>
                <path 
                    d="M376.92,1402.45l405.282,-665.911l420.698,665.911l-825.98,0Z" 
                    style={{fill:'#fff'}}/>
                <path 
                    d="M1202.9,1402.45l-825.98,0l405.282,-665.911l420.698,665.911Zm-824.201,-1l822.387,0l-418.868,-663.014l-403.519,663.014Z"
                     style={{fill:'#fff'}}/>
                <path 
                    d="M270.074,1402.45l-264.091,-1390.58l510.953,791.966l274.217,-67.405l-334.973,666.019l-186.106,0Z" 
                    style={{fill:'#fff'}}/>
                <path 
                    d="M1202.9,302.645l-336.176,409.556l-354.911,105.382l-516.01,-817.942l1207.1,303.004Z" 
                    style={{fill:'#fff'}}/>
                <path 
                    d="M274.06,1397.08l-270.768,0l0,-1394.26l270.768,1394.26Z" 
                    style={{fill:'#e2e2e2'}}/>
                <path 
                    d="M747.489,750.396l124.024,-83.102l324.927,-356.603l0,1091.76l-448.951,-652.053Z" 
                    style={{fill:'#fff'}}/> 
            </svg>
        );
    } 
}