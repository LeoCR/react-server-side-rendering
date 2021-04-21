import  React, { useState,useEffect} from "react"; 
import { Link} from 'react-router-dom';
import SubtitleAbout from '../about/SubtitleAbout';
import $ from 'jquery';
import BenefitsSVG from './BenefitsSVG';
import ServiceDescriptionBGMobile from './backgrounds/ServiceDescriptionBGMobile';
import ServiceDescriptionBG from './backgrounds/ServiceDescriptionBG';
export const ServiceDescription=props=>{
    const [slugService,setSlugService]=useState('empty')
    const [serviceTitle,setServiceTitle]=useState('Web Development');
    const [isMobile,setIsMobile]=useState(false)
    
    const setBodyClass=()=>{
        try { 
            setTimeout(() => {
                if(window.innerWidth<=580){
                    document.querySelector("body").classList.add('is-mobile');
                    setIsMobile(true);
                }
                else{
                    document.querySelector("body").classList.remove('is-mobile');
                    setIsMobile(false);
                }
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
    useEffect(()=>{
        try { 
            window.addEventListener("load", setBodyClass());
            window.addEventListener("resize", setBodyClass());
            const targetUrl=window.location.pathname.toString(),
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
                 
                const jsonServices='/services.json';
                if(splitLocalUrl[2]==='web-development'){ 
                    setServiceTitle('Web Development')
                }
                else if(splitLocalUrl[2]==='cloud-development'){ 
                    setServiceTitle('Cloud Development')
                }
                else if(splitLocalUrl[2]==='ecommerce'){ 
                    setServiceTitle('E-commerce')
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
                            console.log('ServiceDescription.useEffect()');
                        }
                    })
                    .catch(err => console.error(props.url, err.toString()))
                },100);  
                if(window.innerWidth<=580){ 
                    setIsMobile(true)
                }
                else{ 
                    setIsMobile(false)
                } 
            setSlugService(splitLocalUrl[2])
            console.log('slugService '+slugService);
        } 
        catch (error) {
            console.log("An error occurs in ServiceDescription.useEffect() "+error);
        }
        finally{
            return()=>{
                window.removeEventListener("load", setBodyClass());
            }
        }
    },[]) 
    const goBack=()=>{
        try {
            document.querySelector("body").classList.remove('watching-service-dec');
            setTimeout(()=>{
                console.log('goBack 04');
                $('.data_fill').css({'fill':'#fff','fill-opacity': 1});
                $('#shopping-cart').css({'fill':'#ffb462'});
                $('#path_cloud_middle_svg_service').css({'fill':'#ffa542'});
                $('#path_cloud_service').css({'fill':'#ffa542'});
            },100)
        } catch (error) {
            console.log('An error occurs in ServiceDescription.goBack()');
        }
    } 
    let svgService='';
    if(isMobile || window.innerWidth  <=920){
        svgService=<ServiceDescriptionBGMobile/>;
    }
    else{
        svgService=<ServiceDescriptionBG/>;
    }
    return(
        <div id="service-description" style={{with:'100%'}}>
            <Link to="/" data-href="/"  style={{ zIndex:90,background:'#000000 !important'}} className="btn btn-large btn-back" id="btn-back" onClick={()=>goBack()}>Back</Link>
            <SubtitleAbout xSvg="480" style={{maxWidth:'420px'}} txtSubTitle={serviceTitle}/>
            {svgService}
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
export default ServiceDescription;