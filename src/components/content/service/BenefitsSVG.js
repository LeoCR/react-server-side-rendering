import  React,{useState,useEffect} from "react";
import ServiceWebDevelopment from './desktop/ServiceWebDevelopment';
import ServiceCloudDevelopmentMobile from './mobile/ServiceCloudDevelopmentMobile';
export const BenefitsSVG =()=>{
    var [serviceSlug,setServiceSlug]=useState(false);
    useEffect(()=>{
        try { 
            var targetUrl=window.location.pathname.toString(),
            splitLocalUrl=targetUrl.split('/'); 
            setServiceSlug(splitLocalUrl[2])
        } 
        catch (error) {
            console.log("An error occurs in BenefitsSVG.useEffect()  "+error);
        }  
    },[]) 
    var svgBenefits='';
    if(window.innerWidth<920){
        if(serviceSlug.toString()==='web-development' ||serviceSlug.toString()==='ecommerce'){            
            svgBenefits=<ServiceCloudDevelopmentMobile/>;
        }
        else if(serviceSlug.toString()==='cloud-development'){
            svgBenefits=<ServiceCloudDevelopmentMobile/>;
        }
        else if(serviceSlug.toString()==='electronic-bill'){
            svgBenefits=<ServiceCloudDevelopmentMobile/>;
        }
    }
    else{
        if(serviceSlug.toString()==='web-development'||serviceSlug.toString()==='ecommerce'){
            svgBenefits=<ServiceWebDevelopment/>;
        }
        else if(serviceSlug.toString()==='cloud-development'){
            svgBenefits=<ServiceWebDevelopment/>;
        }
        else if(serviceSlug.toString()==='electronic-bill'){
            svgBenefits=<ServiceWebDevelopment/>;
        }
    }
    return(
        <div id="benefits-description" style={{with:'100%'}}>
            <h2>Benefits</h2>
            {svgBenefits}
        </div>
    )
}

export default BenefitsSVG;