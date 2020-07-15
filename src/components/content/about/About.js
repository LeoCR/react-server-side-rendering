import React from "react";
import TitleAbout from "./TitleAbout";
import ContentSVGAbout from "./ContentSVGAbout";
import SubtitleAbout from "./SubtitleAbout";
import CloudSVG from './CloudSVG';
import ReadMoreBG from './ReadMoreBG';
export default class About extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isReadingMore:false
        }
    }
    readMore=()=>{
       try {
            console.log('ReadMore ');
            document.body.classList.toggle('reading_more_about_us');
            this.setState({
                isReadingMore:true
            }); 
       } 
       catch (error) {
           console.log("Error occurs in About.js readMore() "+error);    
       }
    }
    readLess(){
        try {
            console.log('ReadMore ');
            document.body.classList.toggle('reading_more_about_us');
            this.setState({
                isReadingMore:false
            }); 
        } 
        catch (error) {
            console.log("Error occurs in About.js readMore() "+error);    
        }
    }
    render(){
        var svgReadMore='';
        if(this.state.isReadingMore){
            svgReadMore=<ReadMoreBG/>  ;                     
        }
       return(
            <article id="about_us_article" 
                className="article_bg_img"
                style={{width:'100%',position:'relative',
                height:'auto', minHeight:'1360px'}}>
                <span style={{
                        width:'100%',position:'absolute',
                        height:'auto',
                        zIndex:1,
                        backgroundAttachment:'fixed',
                        minHeight:'1860px'
                    }} 
                    id="bg_article_about_us"
                    className='articl-bckg-img-about_us'>
                </span>
                <input id="skrl_ctrl" 
                    className="progress_svg_cloud scrolled-comp" 
                    type="range" name="points" min="0"
                    max="100" step="0.001" 
                    onChange={this.skrollController} 
                    style={{paddingTop:'390px',position:'relative',
                     width:'400px','opacity':0,'visibility':'hidden'}} />
                <figure style={{padding:'18% 0px 0px 0px',
                    float:'left',margin:'2%',
                    position:'absolute',width:'50%',
                    zIndex:2,height:'auto'}}
                    className='scrolled-comp figure_cloud'
                     id='figure_cloud_about_us'>
                    <CloudSVG/>
                </figure> 
                <ContentSVGAbout/>  
                <aside style={{width: '79%',position:' absolute',
                    zIndex: 70,left:'8%',height: 'auto',
                    minHeight: '660px',padding: '0 1.5%',
                    margin:'25% 0px 0px 0px'}}
                    className='aside_about_us'> 
                    <h2 id='title_about_us' 
                        className="scrolled-comp"
                        style={{
                            fontWeight:700,fontFamily: 'Poppins',
                            width:' 100%',zIndex: 8,
                            left:'8%',position:'relative',
                            float:'right'
                        }}>
                        <TitleAbout/>
                    </h2>
                    <div id="about-us" 
                        className='div_about_us'
                        style={{
                            width:'100%',float:'right',
                            position:'relative',
                            display:'inline-block',
                            textAlign:'initial'
                        }}
                        > 
                        <p className="scrolled-comp" 
                            style={{textAlign:'left',
                            padding:'1% 2%'}}>
                            I am a Full Stack developer focused into UX/UI of the development of custom Web Apps
                            for some modern solutions such as: E-Commerce ,Cloud Development, CMS ,Custom Dashboards...
                        </p>
                        <button className="btn" 
                            onClick={this.readMore} 
                            style={{border:'none'}} 
                            id="btn_read_more_about_us">
                            Read More
                        </button>
                        <div className='more_about_us' 
                         id="more_about_us">
                                <h3 style={{maxWidth:'450px'}}>
                                    <SubtitleAbout 
                                    txtSubTitle="Experience"
                                     xSvg="490"/>
                                </h3>
                                <p style={{float:'left',position:'relative',width:'80%'}}>
                                    I worked as Web Designer in <a href="http://www.interdesa.com/">Interdesa S.A.</a> from 2013 to 2014.
                                    In Interdesa S.A. I had the responsability of the User experience and the design of the Web Sites and some Web Applications.  
                                    Then I worked as Web Developer in <a href="https://bvmedia.cr/" >BVMedia</a> from 2016 to 2017.
                                    In BVMedia I had the responsability of the programming of a Web Application for the Call Center I had to use Five9 API SOAP Web Service for 
                                     generating Statistics ,I also was the responsable of the design and the user experience of some Wordpress Themes. 
                                    Since I worked in Interdesa S.A I was studying in the University Fidelitas the career Systems Engineering to this day. 
                                    Actually I am working with React,Redux and Node JS designing web applications for improving my portfolio and for growing as professional with these technologies.
                                </p>
                                <h3 style={{maxWidth:'450px'}}>
                                    <SubtitleAbout txtSubTitle="Skills" xSvg="500"/>
                                </h3>
                                <p style={{float:'left',position:'relative',width:'80%'}}>
                                These are the technologies that I can use:
                                </p>
                                <ul id="languages-skills" style={{ position: 'relative',float:'left',width: '100%',marginLeft: '30%'}}>
                                    <li>Java <span className="porcentage-knowledge" style={{width:"180px"}}>80%</span></li>
                                    <li>Javascaript <span className="porcentage-knowledge" style={{width:"200px"}}>100%</span></li>
                                    <li>NodeJs <span className="porcentage-knowledge" style={{width:"200px"}}>100%</span></li>
                                    <li>C# <span className="porcentage-knowledge" style={{width:"175px"}}>75%</span></li>
                                    <li>MySQL <span className="porcentage-knowledge" style={{width:"190px"}}>90%</span></li>
                                    <li>Postgresql <span className="porcentage-knowledge" style={{width:"185px"}}>85%</span></li>
                                    <li>ReactJS <span className="porcentage-knowledge" style={{width:"200px"}}>100%</span></li>
                                    <li>Redux <span className="porcentage-knowledge" style={{width:"200px"}}>100%</span></li>
                                    <li>Angular 4 <span className="porcentage-knowledge" style={{width:"180px"}}>80%</span></li>
                                    <li>Html5 & CSS3<span className="porcentage-knowledge" style={{width:"200px"}}>100%</span></li>
                                </ul>
                                <button className="btn" 
                                onClick={this.readLess} 
                                style={{border:'none',float:'left'}} 
                                id="btn_read_less_about_us">
                                Read Less
                                </button>
                        </div>
                    </div>
                </aside>
                {
                    svgReadMore
                }
            </article>
        );
    }
}
  