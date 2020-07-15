import  React from "react";
import ServiceWebDevelopment from './desktop/ServiceWebDevelopment';
import ServiceCloudDevelopmentMobile from './mobile/ServiceCloudDevelopmentMobile';
export default class BenefitsSVG extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isMobile:false,
            serviceSlug:''
        };
    }
    componentDidMount() {
        try {
            window.addEventListener("load", this.setDevice); 
            window.addEventListener("resize",this.setDevice);
            var targetUrl=window.location.pathname.toString(),
            splitLocalUrl=targetUrl.split('/');
            this.setState({
                "serviceSlug":splitLocalUrl[2]
            });
        } 
        catch (error) {
            console.log("An error occurs in componentDidMount() BenefitsSVG "+error);
        } 
    } 
    setMobile=()=>{
        try {
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
        } 
        catch (error) {
            console.log("Error in setMobile() ServiceDescription.js  "+error);
        }
        finally{
            console.log('setMobile() BenefitsSVG.js '+this.state.isMobile);
        }
    }
    render(){
        var svgBenefits='';
            if(window.innerWidth<920||this.state.isMobile){
                if(this.state.serviceSlug.toString()==='web-development' ||this.state.serviceSlug.toString()==='ecommerce'){            
                    svgBenefits=<ServiceCloudDevelopmentMobile/>;
                }
                else if(this.state.serviceSlug.toString()==='cloud-development'){
                    svgBenefits=<ServiceCloudDevelopmentMobile/>;
                }
                else if(this.state.serviceSlug.toString()==='electronic-bill'){
                    svgBenefits=<ServiceCloudDevelopmentMobile/>;
                }
            }
            else{
                if(this.state.serviceSlug.toString()==='web-development'||this.state.serviceSlug.toString()==='ecommerce'){
                    svgBenefits=<ServiceWebDevelopment/>;
                }
                else if(this.state.serviceSlug.toString()==='cloud-development'){
                    svgBenefits=<ServiceWebDevelopment/>;
                }
                else if(this.state.serviceSlug.toString()==='electronic-bill'){
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
}