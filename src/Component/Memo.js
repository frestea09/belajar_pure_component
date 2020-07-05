import React from 'react'

function Memo(){
   return(
       <div className='Memo'>
            <h3>Hello World</h3>
       </div>
   )
}
export default React.memo(Memo)