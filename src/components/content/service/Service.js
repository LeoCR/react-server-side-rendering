import  React from "react";
import TitleService from "./TitleService";
import ServicesIcons from "./ServicesIcons";  
import {Route} from 'react-router-dom';
import ServiceDescription from "./ServiceDescription";
import { TransitionGroup } from "react-transition-group";

var Router;
if (typeof document !== "undefined") {
  Router = require("react-router-dom").BrowserRouter;
} 
else {
  Router = require("react-router-dom").StaticRouter;
} 
export const Service=props=>{
    return(
        <React.Fragment>
            <article id="article_services" className="article_bg_img"
                style={{
                    width:'100%',position:'relative',float: 'left',
                    display:'inline-block',minHeight: "900px"
                    }}>
                <TitleService/> 
                <span className="articl-bckg-img-service"
                id="articl-bckg-img-service"></span>
                <input id="skrl_progress_services" 
                    className="progress_services scrolled-comp" 
                    type="range" name="service_path"  min="0" 
                    value="0" max="990" step="0.001" 
                        style={{
                        padding:'0px',position:'relative', width:'600px',
                        display:'none', zIndex: 6,'opacity':0,visibility:'hidden'
                    }} 
                />
                <div id="services" 
                    style={{width:"100%",position:'absolute', display:'flex',
                    float:"left",marginTop:"26%",minHeight:'500px',zIndex:4}}>
                    <TransitionGroup enter={true} 
                        exit={true}
                        appear={true} 
                        id="transition-group-container" 
                        style={{width:'100%'}}
                        >
                            <Router >
                                <Route exact path="/" render={()=><React.Fragment>
                                    <ServicesIcons/>
                                </React.Fragment>}/>
                                <Route exact path="/services/electronic-bill" render={()=><React.Fragment>
                                    <ServiceDescription/>
                                </React.Fragment>}/>
                                <Route exact path="/services/web-development" render={()=><React.Fragment>
                                    <ServiceDescription/>
                                </React.Fragment>}/>
                                <Route exact path="/services/ecommerce" render={()=><React.Fragment>
                                    <ServiceDescription/>
                                </React.Fragment>}/>
                                <Route exact path="/services/cloud-development" render={()=><React.Fragment>
                                    <ServiceDescription/>
                                </React.Fragment>}/>
                            </Router>
                    </TransitionGroup>
                </div>
            </article>
        </React.Fragment>
    );
}
export default Service;