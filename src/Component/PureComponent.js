import React from 'react'
import Memo from './Memo'
class PureComponent extends React.PureComponent{
   render(){
       return(
           <div className='PureComponent'>
                <h3>Hello World {this.props.dataName}</h3>
                <Memo/>
           </div>
       )
   }
}
export default PureComponent