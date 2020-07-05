import React from 'react'
import PureComponent from './Component/PureComponent'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name : 'ilman teguh prasetya'
    }
  }
  render(){
    return(
      <div className='App'>
        <PureComponent dataName = {this.state.name}/>
      </div>
    )
  }
}

export default App