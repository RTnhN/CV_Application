import React from "react";
import '../Styles/workBlock.css';

class WorkBlock extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      contentEditable:false,
      editIcon:'edit', 
      schoolData: {
        name: 'name',
        title:'title',
        date: ' Start Date - End Date'
      }
      }
    this.onEdit = this.onEdit.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onEdit(event){
    if (this.state.contentEditable){
      this.setState({contentEditable:false, editIcon:"edit"})
    } else {
      this.setState({contentEditable:true, editIcon:"done"})
    }
  }

  componentDidUpdate(prevProps){
    document.getElementById(prevProps.id).children[0].focus();
  }

  onFocus(event){
    window.getSelection().selectAllChildren(event.target)
  }

  render(){
    return(
    <div id = {this.props.id} className='workBlock'>
      <h3 className='workName' onFocus={this.onFocus} suppressContentEditableWarning="true" contentEditable={this.state.contentEditable}> {this.state.schoolData.name}</h3>
      <p className='title' onFocus={this.onFocus} suppressContentEditableWarning="true" contentEditable={this.state.contentEditable}> {this.state.schoolData.title}</p>
      <p className='workDate' onFocus={this.onFocus} suppressContentEditableWarning="true" contentEditable={this.state.contentEditable}>{this.state.schoolData.date}</p>
      {!this.props.edit && <button onClick={this.onEdit} className="material-symbols-outlined editButton">{this.state.editIcon}</button>}
      {this.state.contentEditable && <button onClick={this.props.removeWorkCallback} className='material-symbols-outlined deleteButton'>delete</button>}
    </div>
  )}
}

export default WorkBlock;