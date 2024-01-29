import React from 'react'

function ColorAndBackground() {

    {/* <===================COLORS properties===========================> */}
    const Rgb={
        color:"rgb(0,0,255)"
    }
    const Rgba={
        color:"rgb(0,0,255,0.5)"
    }
    const Hsl={
        color:"hsl(4,100%,50%)"
    }
    const Hsla={
        color:"hsl(4,100%,50%,0.4)"
    }
    const Hexa={
        color:"#336699"
    }
    const backImg={
    
    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXwlsS9rGAxwgMvS-q6AjyH8sTSeAOJieaQ&usqp=CAU"), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nIdDFxoiwmTTuM3QR-vQHILNbrDr6wL-_g&usqp=CAU")`
   , backgroundRepeat:"no-repeat",
   backgroundSize:"auto",
   backgroundAttachment: "scroll",
   backgroundOrigin:"padding-box"
};   


{/* <===================Borders properties===========================> */}
    
// border style and border width
const dashed={
    borderStyle: "dashed",
    // borderTopWidth:"2px",
    // borderBottomWidth:"5px",
    // borderRightWidth:"10px",
    borderWidth:"2px 4px 6px 8px"
}
const solid={
    borderStyle: "solid",
    borderColor:"yellow",
    outline:"dashed",
    outlineWidth:"5px",
    outlineColor:"red",
    outlineOffset:"10px",
    borderRadius:"5px"
    
}
const double={
    borderStyle: "double"
}
const dotted={
    // borderStyle: "dotted",
    borderBottomStyle:"dashed",
    borderStyle: "dashed solid double groove",
    
}
//ithu medu 
const groove={
    borderStyle: "groove",
 
}
const ridge={
    borderStyle: "ridge",
  
}
const outset={
  outlineStyle:"outset"
  
}
const inset={
    borderStyle:"inset"
  
}


{/* <===================TEXT properties===========================> */}


const text={
color:"red",
fontSize:"6px",

verticalAlign:"middle"
}
const Text={
    color:"black",
    fontSize:"20px",
    // textDecoration:" overline underline",
    textDecorationStyle:"wavy"
}








  return (
    <div>

{/* <--------------------Colors---------------------> */}
<div style={backImg} >
<h2>2.COLORS</h2><br/>
     
<h3 style={Rgb}>RGB</h3>
<h3 style={Rgba}>RGBA</h3>
<h3 style={Hsl}>HSL</h3>
<h3 style={Hsla}>HSLA</h3>
<h3 style={Hexa}>HexaDecimal</h3>

</div>
<br/>


{/* <--------------------Borders properties---------------------> */}
<div style={{display:"flex",flexDirection:"column",gap:"1rem",padding:"2rem"}} >
<h1>BORDER PROPERTIES</h1>  
<h3 style={dashed}>Dahed</h3>
<h3  style={solid}>Solid</h3>
<h3  style={double}>Double</h3>
<h3  style={dotted}>Dotted</h3>
<h3 style={groove}>groove</h3>
<h3 style={ridge}>groove</h3>
<h3 style={outset}>OutSet</h3>
<h3 style={inset}>Inset</h3>
   

</div>
<br/>
</div>
  )
}

export default ColorAndBackground




  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  