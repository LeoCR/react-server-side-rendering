import React from 'react'; 
import MainNav from './components/nav/MainNav';
import Slideshow from './components/content/home/Slideshow';
import About from './components/content/about/About';
import Service from './components/content/service/Service';
import Contact from './components/content/contact/Contact';
import Footer from './components/footer/Footer';
import "@babel/polyfill";


class App extends React.Component{
  scrolledContent=(e)=>{
    var scrollPositn=e.currentTarget.scrollTop;
    if(parseInt(scrollPositn)>=20){
       document.querySelector("#header_nav").classList.add("sticky"); 
       document.querySelector("#header_nav").classList.remove("normal_nav"); 
    }
    else{
        document.querySelector("#header_nav").classList.remove("sticky");
        document.querySelector("#header_nav").classList.add("normal_nav");
    }
  }
  componentDidMount(){
    document.querySelector("#main_content").addEventListener("scroll",this.scrolledContent); 
  }
  render(){
    return (
      <React.Fragment>
        <div className="wrap"  style={{ width:'100%',float:'left', position:'relative'}} id="wrapper"> 
          <header style={{zIndex:95,background:"#ffffff"}} id="header_nav">
            <MainNav/>
          </header>
            <section style={{width:'100%',position:'relative',float:'left' }} id="section_content">
                  <Slideshow/>
                  <About/>
                  <Service/>
                  <Contact/>
            </section>
          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
