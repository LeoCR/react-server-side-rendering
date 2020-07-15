import React from 'react'; 
import { Link } from "react-router-dom";
import IconWebDevelopment from './icons/IconWebDevelopment';
import IconEcommerce from './icons/IconEcommerce';
import IconCloudDevelopment from './icons/IconCloudDevelopment';
export default class ServicesIcons extends React.Component   {  
    getService=()=>{
        document.querySelector("body").classList.add('watching-service-dec');
    }
    render(){ 
        return(
            <div id="icons-services-div" style={{width:'100%',position:'relative',
                display:'inline-block',zIndex:8}}>
                <Link to="/services/web-development" data-href="/services/web-development"  className="icon-service" onClick={()=>this.getService()}>
                    <figure className="service_icon_btn" style={{ width:'250px',float:'left',minHeight:'250px',position:'relative'}} id="figure_web_development_service"> 
                        <IconWebDevelopment/>
                    </figure> 
                </Link>
                {/* <Link to="/services/electronic-bill"  data-href="/services/electronic-bill"  className="icon-service" >
                    <figure id="figure_factura_electronica" style={{width:'250px',
                        float:'left',minHeight:'250px',position:'relative'}} 
                        className="service_icon_btn">
                        <IconElectronicBill/>
                    </figure> 
                </Link> */}
                <Link to="/services/ecommerce" data-href="/services/ecommerce"  className="icon-service" onClick={()=>this.getService()}>
                    <figure id="figure_ecommerce" className="service_icon_btn" style={{width:'250px',
                    float:'left',minHeight:'250px',position:'relative'}}>
                        <IconEcommerce/>
                    </figure>
                </Link>
                <Link to="/services/cloud-development" data-href="/services/cloud-development"  className="icon-service" onClick={()=>this.getService()}>
                    <figure id="figure_cloud_development" className="service_icon_btn" style={{width:'250px',
                    float:'left',minHeight:'250px',position:'relative'}}>
                       <IconCloudDevelopment/> 
                    </figure>
                </Link>
            </div>
        );
    }
}