import  React from "react";
import $ from 'jquery';
export default class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject:'',
            comments: '',
            isLoading: false,
            msg: {},
            phone:''
        }
    }
    validateForm=()=>{ 
        console.log('validateForm() ');

        try {
            var tempMsg=[];
            if(this.state.name=== ""){
                tempMsg.push('The name is required !')
            }
            if(this.state.phone=== ""){
                tempMsg.push('The phone is required !')
            }
            if(this.state.email===""){
                tempMsg.push('The email is required !')
            }
            if(this.state.subject=== ""){
                tempMsg.push('The subject is required !')
            }
        } 
        catch (error) {
            console.log('Error validateForm '+error);            
        }
        finally{
            if(tempMsg.length>0){
                $('#modal-dialog-box').addClass("show");
                var htmlMsg='<ul>';
                for (var i = 0; i < tempMsg.length; i++) {
                    htmlMsg+='<li>'+tempMsg[i]+'</li>';
                }
                htmlMsg+='</ul>';
                $('#modal-dialog-box p').html(htmlMsg);
            } 
            else{
                var data = {
                    'name' : $('#name').val(),
                    'email': $('#email').val(),
                    'phone' : $('#phone').val(),
                    'subject' : $('#subject').val(),
                    'comments' : $('#comments').val()
                };
                console.log('data.name=> '+data.name);
                console.log('data.email=> '+data.email);
                console.log('data.phone=> '+data.phone);
                console.log('data.subject=> '+data.subject);
                console.log('data.comments=> '+data.comments);
               
                
            }           
        }
    }
    handleChange=(e)=>{
        try {
            this.setState({
                [e.target.name]: e.target.value
            })
        } 
        catch (error) {
            console.log('Error in handleChange '+error);
        }
    } 
    render(){
        return(
            <article style={{
                    width:'100%',position:'relative',
                    display:'inline-block',minHeight:"980px",
                    height:"auto",background:'#000'
                }} id="article-contact-us">
                <div id="location_map" 
                    style={{
                        width:'47%',
                        position:'relative',
                        float:'left'
                    }}
                >
                    <iframe title="contact_location" src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1094.6126258261415!2d-84.09791491883766!3d10.014992614725402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d10.0152973!2d-84.0975189!5e0!3m2!1sen!2scr!4v1522768486270" height="450" frameBorder="0" style={{ border:0,width:'100%',height:'900px'}} allowFullScreen>
                    </iframe>
                </div>
                <div id="contact_form_container" 
                style={{width:'45%',position:'relative',float:'left' }}>
                    <h2 style={{ width:'100%',textAlign:'center',padding:'15px 0',color:'#fff' }} id="title_contact_form">Contact Me</h2>    
                    <form id="contact" className="form" onSubmit={this.validateForm}
                        style={{width:'100%',position:'relative',display:'grid',padding: '0 50px'}}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={(e)=>this.handleChange(e)}/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e)=>this.handleChange(e)}/>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" id="subject" onChange={(e)=>this.handleChange(e)}/>
                        <label htmlFor="comments">Comments</label>
                        <textarea name="comments" id="comments" onChange={(e)=>this.handleChange(e)}
                        cols="30" rows="10">
                        </textarea>
                        <input type="submit" value="Send" id="btn_send_contact" className="btn"/>
                    </form>
                </div> 
            </article>
        );
    }
}