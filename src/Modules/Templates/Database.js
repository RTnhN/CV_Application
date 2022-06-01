import Edu from "./Edu"
import Work from "./Work"

class Database {
  constructor(){
  this.sections = {
    'bio':{
      'name':'name',
      'address': 'address',
      'phone': 'phone number',
      'email': 'email address',
      'github': 'github name'
    },
    'edu':[],
    'work':[],
  }
  }
  addEdu()

}

export default Database;