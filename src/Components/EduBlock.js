import React from "react";
import '../Styles/eduBlock.css';
import { getTextFromId } from "../Modules/Helpers/DOMHelper";

class EduBlock extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      contentEditable:false,
      editIcon:'edit', 
      schoolData: {
        name: 'name',
        FOS:'field of study',
        date: ' Start Date - End Date'
      }
      }
    this.onEdit = this.onEdit.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }
  componentDidMount(){
    const storageData = JSON.parse(localStorage.getItem('cv-data-edu'));
    if (storageData !== null){
      this.setState({schoolData:storageData});
    }
  }

  onEdit(event){
    if (this.state.contentEditable){
      this.setState({contentEditable:false, editIcon:"edit"})
    } else {
      this.setState({contentEditable:true, editIcon:"done"})
    }
    const data = {
      'name': getTextFromId('schoolName'), 
      'FOS': getTextFromId('FOS'), 
      'date': getTextFromId('date')
    }
    localStorage.setItem('cv-data-edu', JSON.stringify(data))
  }

  componentDidUpdate(){
    document.getElementById('schoolName').focus();
  }

  onFocus(event){
    window.getSelection().selectAllChildren(event.target)
  }

  render(){
    return(
    <div className='eduBlock'>
      <h3 id='schoolName' onFocus={this.onFocus} suppressContentEditableWarning="true" contentEditable={this.state.contentEditable}> {this.state.schoolData.name}</h3>
      <p id='FOS' onFocus={this.onFocus} suppressContentEditableWarning="true" contentEditable={this.state.contentEditable}> {this.state.schoolData.FOS}</p>
      <p id='date' onFocus={this.onFocus} suppressContentEditableWarning="true" contentEditable={this.state.contentEditable}>{this.state.schoolData.date}</p>
      <button onClick={this.onEdit} className="material-symbols-outlined editButton">{this.state.editIcon}</button>

    </div>
  )}
}

export default EduBlock;