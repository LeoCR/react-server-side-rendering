import  React from "react"; 
import { Link} from 'react-router-dom';
import SubtitleAbout from '../about/SubtitleAbout';
import $ from 'jquery';
import BenefitsSVG from './BenefitsSVG';
import ServiceDescriptionBGMobile from './backgrounds/ServiceDescriptionBGMobile';
import ServiceDescriptionBG from './backgrounds/ServiceDescriptionBG';
export default class ServiceDescription extends React.Component{
    constructor(props) {
        super(props); 
        this.state={
            slugService:"empty", 
            lang:'',
            isMobile:false,
            serviceTitle:'Web Development' 
        }
    }
    setMobile=()=>{
        try {
            setTimeout(() => {
                if(window.innerWidth<=580){
                    document.querySelector("body").classList.add('is-mobile');
                }
                else{
                    document.querySelector("body").classList.remove('is-mobile');
                }
                if(window.innerWidth  >=850){
                    this.setState({
                        "isMobile":false
                    })
                }
                else{
                    this.setState({
                        "isMobile":true
                    })
                }
            }, 200);
        } 
        catch (error) {
            console.log("An error occurs in setMobile() ServiceDescription.js  "+error);
        }
    }
    setBodyClass=()=>{
        try {
            if(window.innerWidth<=580){
                document.querySelector("body").classList.add('is-mobile');
            }
            else{
                document.querySelector("body").classList.remove('is-mobile');
            }
            setTimeout(() => {
                document.querySelector("body").classList.add('watching-service-dec'); 
                $('.nav_btn').each(function(){
                    if($(this).data('href')==='#services'){
                        $(this).addClass('selected');
                    }
                });
            }, 200);
        } 
        catch (error) {
            console.log('An error occurs in ServiceDescription.js setBodyClass() '+error);
        }
    }
    componentDidMount() {     
        try { 
            window.addEventListener("load", this.setBodyClass);
            window.addEventListener("resize", this.setMobile);
            var targetUrl=window.location.pathname.toString(),
            splitLocalUrl=targetUrl.split('/');
            $('#service-description a').css({
                'display': 'inline-block',
                'vertical-align': 'middle',
                '-webkit-transform': 'perspective(1px) translateZ(0)',
                'transform': 'perspective(1px) translateZ(0)',
                'box-shadow': '0 0 1px transparent',
                'position': 'relative',
                '-webkit-transition-property': 'color',
                'transition-property': 'color',
                '-webkit-transition-duration': '.3s',
                'transition-duration': '.3s',
                'background': '#000 !important',
                'color': '#fff',
                'border': 'none !important',
                'padding': '15px 20px !important',
                'text-decoration': 'none',
                'cursor': 'pointer'
            })
                console.log('splitLocalUrl[2] 5'+ splitLocalUrl[2]);
                var jsonServices='/services.json';
                if(splitLocalUrl[2]==='web-development'){
                    this.setState({
                        serviceTitle:'Web Development'
                    })
                }
                else if(splitLocalUrl[2]==='cloud-development'){
                    this.setState({
                        serviceTitle:'Cloud Development'
                    })
                }
                else if(splitLocalUrl[2]==='ecommerce'){
                    this.setState({
                        serviceTitle:'E-commerce'
                    })
                }
                setTimeout(() => {
                    fetch(jsonServices)
                    .then(response => response.json())
                    .then(data => {
                        if(splitLocalUrl[2]==='web-development'){
                            $("#service_descriptin_content aside p").html(data.en.services[0].content);
                        }
                        else if(splitLocalUrl[2]==='cloud-development'){
                            $("#service_descriptin_content aside p").html(data.en.services[1].content);
                        }
                        else if(splitLocalUrl[2]==='ecommerce'){
                            $("#service_descriptin_content aside p").html(data.en.services[2].content);
                        }
                        else{
                            console.log('ServiceDescription componentDidMount');
                        }
                    })
                    .catch(err => console.error(this.props.url, err.toString()))
                },100);
                //console.log('splitLocalUrl[2] '+ splitLocalUrl[2]);
            
            if(window.innerWidth  >=920){
                this.setState({
                    "isMobile":false
                })
            }
            else{
                this.setState({
                    "isMobile":true
                })
            }
            this.setState({
                "slugService":splitLocalUrl[2]
            });
            console.log('componentDidMount this.state.slugService '+this.state.slugService);
        } 
        catch (error) {
            console.log("An error occurs in ServiceDescription.js componentDidMount() "+error);
        }
    }
    goBack=()=>{
        document.querySelector("body").classList.remove('watching-service-dec');
        setTimeout(()=>{
            console.log('goBack 04');
            $('.data_fill').css({'fill':'#fff','fill-opacity': 1});
            $('#shopping-cart').css({'fill':'#ffb462'});
            $('#path_cloud_middle_svg_service').css({'fill':'#ffa542'});
            $('#path_cloud_service').css({'fill':'#ffa542'});
        },100)
    }
    render(){
        var svgService='';
        if(this.state.isMobile || window.innerWidth  <=920){
            svgService=<ServiceDescriptionBGMobile/>;
        }
        else{
            svgService=<ServiceDescriptionBG/>;
        }
        return(
            <div id="service-description" style={{with:'100%'}}>
                <Link to="/" data-href="/"  style={{ zIndex:90}} className="btn btn-large" id="btn-back" onClick={()=>this.goBack()}>Back</Link>
                <SubtitleAbout xSvg="480" style={{maxWidth:'420px'}} txtSubTitle={this.state.serviceTitle}/>
                {
                    svgService
                }
                <article id="service_descriptin_content">    
                    <aside>
                        <p style={{fontFamily: 'Montserrat'}}></p>
                    </aside>
                    <div id="svg_benefits">
                        <BenefitsSVG />
                    </div>
                </article>
            </div>
        );
    }
}