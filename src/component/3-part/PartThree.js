import React from 'react'
import "./PartThree.css"
function PartThree() {
  return (
    <div>

{/* <--------------------Attribute Selectors properties---------------------> */}
<div className='attributeselectors__container'>
    <h1>Attribute Selectors properties-</h1>
<a href='#' target='' >Link 1</a>
<a href='#' target='_blank' >Link 2</a>

<div className='attribute'>

<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim43FOsSU9F-TXSSABOeBOKxC2UPRthwJRA&usqp=CAU' title='water'/>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim43FOsSU9F-TXSSABOeBOKxC2UPRthwJRA&usqp=CAU' title='hill'/>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim43FOsSU9F-TXSSABOeBOKxC2UPRthwJRA&usqp=CAU' title='hill water'/>
</div>

<p className='red'>RED 1 ( | ) </p>

<p className='red-text'>RED 2 ( | ) </p>

<p className='textred'>RED 3 ( | ) </p>

<p className='blue'>BLUE 1 ( ^ ) </p>

<p className='blue-text'>BLUE 2 ( ^ )</p>

<p className='yellowtext'>BLUE 3 ( ^ )</p>



<p className='yellow'>YELLOW 1 ( $ ) </p>

<p className='text-yellow'>YELLOW 2 ( $ ) </p>

<p className='text yellow'>YELLOW 3 ( $ ) </p>

</div>


{/* <--------------------MATH properties---------------------> */}

<div className='math__container'>
    <p className='calc'>Hello Calc</p>
    <p className='max'>Hello MAx</p>
    <p className='min'>Hello Min</p>
</div>


{/* <--------------------CSS GRADIENT properties---------------------> */}

<div className='gradient__container'>


<div className='gradient__one'></div>

<div className='gradient__two'></div>
<div className='gradient__three'></div>
<div className='g4'></div>
<div className='g5'></div>
<div className='g6'></div>
<div className='g7'></div>
<div className='g8'></div>
<div className='g9'></div>
<div></div>
</div>

<br/><br/>

{/* <--------------------CSS GRADIENT properties---------------------> */}

<div className='textshadow__container'>

<h1 className='textshadow'>HELLO DEVELOPER</h1>


</div>





    </div>
  )
}

export default PartThree