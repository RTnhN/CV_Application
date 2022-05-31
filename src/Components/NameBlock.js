import React from "react";
import '../Styles/nameBlock.css';
import { getTextFromId } from "../Modules/Helpers/DOMHelper";

class NameBlock extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      contentEditable:false,
      editIcon:'edit', 
      userData: {
        name: 'name',
        address:'address',
        phone: 'phone number',
        email: 'email address',
        github: 'github name'}
      }
    this.onEdit = this.onEdit.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }
  componentDidMount(){
    const storageData = JSON.parse(localStorage.getItem('cv-data-bio'));
    if (storageData !== null){
      this.setState({userData:storageData});
    }
  }

  onEdit(event){
    if (this.state.contentEditable){
      this.setState({contentEditable:false, editIcon:"edit"})
    } else {
      this.setState({contentEditable:true, editIcon:"done"})
    }
    const data = {
      'name': getTextFromId('name'), 
      'address': getTextFromId('address'), 
      'phone': getTextFromId('phone'), 
      'email': getTextFromId('email'), 
      'github': getTextFromId('github')    
    }
    localStorage.setItem('cv-data-bio', JSON.stringify(data))
  }

  componentDidUpdate(){
    document.getElementById('name').focus();
  }

  onFocus(event){
    window.getSelection().selectAllChildren(event.target)
  }

  render(){
    return(
    <div id='nameBlock'>
      <h1 id='name' onFocus={this.onFocus} suppressContentEditableWarning="true" contentEditable={this.state.contentEditable}> {this.state.userData.name}</h1>
      <p id='address' onFocus={this.onFocus} suppressContentEditableWarning="true" contentEditable={this.state.contentEditable}> {this.state.userData.address}</p>
      <div id='contactContainer'>
        <div className="contactType">
        <span className="material-symbols-outlined">smartphone</span> 
        <span id='phone' onFocus={this.onFocus} suppressContentEditableWarning="true" contentEditable={this.state.contentEditable}>{this.state.userData.phone}</span>
        </div>
        <div className="contactType">
        <span className="material-symbols-outlined">mail</span> 
        <span id='email' onFocus={this.onFocus} suppressContentEditableWarning="true" contentEditable={this.state.contentEditable}>{this.state.userData.email}</span>
        </div>
        <div className="contactType">
        <img src={process.env.PUBLIC_URL +"/GithubIcon.svg"} alt='Git hub logo'/>
        <span id='github' onFocus={this.onFocus} suppressContentEditableWarning="true" contentEditable={this.state.contentEditable}>{this.state.userData.github}</span>
        </div>
      </div>
      <button onClick={this.onEdit} className="material-symbols-outlined editButton">{this.state.editIcon}</button>

    </div>
  )}
}

export default NameBlock;