import './Styles/App.css';
import React from 'react';
import EduBlock from './Components/EduBlock';
import NameBlock from './Components/NameBlock';
import WorkBlock from './Components/WorkBlock';
import { nanoid } from 'nanoid';


class App extends React.Component{
  constructor(props){
    super(props);
    this.newEdu = this.newEdu.bind(this);
    this.newWork = this.newWork.bind(this);
    this.removeEdu = this.removeEdu.bind(this);
    this.removeWork = this.removeWork.bind(this);
    this.edit = this.edit.bind(this);
    this.state = {eduBlocksIds: [], workBlocksIds:[], edit:true, editButtonText: 'Edit Page',  contentEditable:false, editIcon:'edit'}
  }
  newEdu(){
    const id = nanoid();
    this.setState({eduBlocksIds: [...this.state.eduBlocksIds, id ]})
  }

  newWork(){
    const id = nanoid();
    this.setState({workBlocksIds: [...this.state.workBlocksIds, id]})
  }
  
  removeEdu(event){
    const id = event.target.parentNode.id;
    this.setState({eduBlocksIds: this.state.eduBlocksIds.filter(edu => edu !== id)})
  }

  removeWork(event){
    const id = event.target.parentNode.id;
    this.setState({workBlocksIds: this.state.workBlocksIds.filter(work => work !== id)})
  }

  edit(){
    if (this.state.edit){
      this.setState({edit: false, editButtonText:'Finish Editing'})
    } else {
      this.setState({edit: true, editButtonText:'Edit CV'})
    }
    }


  render(){
    return(
    <div id='app'>
      <NameBlock edit={this.state.edit}/>
      <h2>Education</h2>
      {this.state.eduBlocksIds.map(id => <EduBlock edit={this.state.edit} removeEduCallback={this.removeEdu} key={id} id={id}/> )}
      {!this.state.edit && <h2 className='newBlock' onClick={this.newEdu}>Add new education block</h2>}
      <h2>Work</h2>
      {this.state.workBlocksIds.map(id => <WorkBlock edit={this.state.edit} removeWorkCallback={this.removeWork} key={id} id={id}/>)}
      {!this.state.edit && <h2 className='newBlock' onClick={this.newWork}>Add new work block</h2>}
      <button id='editPageButton' onClick={this.edit}>{this.state.editButtonText}</button>
    </div>
  )}


}

export default App;
