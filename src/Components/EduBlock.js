import React from "react";
import '../Styles/eduBlock.css';

class EduBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contentEditable: false,
      editIcon: 'edit',
      schoolData: {
        name: 'name',
        FOS: 'field of study',
        date: ' Start Date - End Date'
      }
    }
    this.onEdit = this.onEdit.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onEdit(event) {
    if (this.state.contentEditable) {
      this.setState({ contentEditable: false, editIcon: "edit" })
    } else {
      this.setState({ contentEditable: true, editIcon: "done" })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    document.getElementById(prevProps.id).children[0].focus();
  }

  onFocus(event) {
    window.getSelection().selectAllChildren(event.target)
  }

  render() {
    return (
      <div id={this.props.id} className='eduBlock'>
        <h3 className='schoolName' onFocus={this.onFocus} suppressContentEditableWarning="true" contentEditable={this.state.contentEditable}> {this.state.schoolData.name}</h3>
        <p className='FOS' onFocus={this.onFocus} suppressContentEditableWarning="true" contentEditable={this.state.contentEditable}> {this.state.schoolData.FOS}</p>
        <p className='schoolDate' onFocus={this.onFocus} suppressContentEditableWarning="true" contentEditable={this.state.contentEditable}>{this.state.schoolData.date}</p>
        {!this.props.edit && <button onClick={this.onEdit} className="material-symbols-outlined editButton">{this.state.editIcon}</button>}
        {this.state.contentEditable && <button onClick={this.props.removeEduCallback} className='material-symbols-outlined deleteButton'>delete</button>}
      </div>
    )
  }
}

export default EduBlock;