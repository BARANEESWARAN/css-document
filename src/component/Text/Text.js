import React from 'react'
import "./Text.css"
function Text() {
  return (
/* <===================TEXT properties===========================> */
<>

<div className='text-decoration'>
<p className='text'>Text <span>Decoration</span></p>    
<p className='para'>
Microsoft Word is a word processor developed by Microsoft. It was first released on October 25, 1983,[9] under 
the name Multi-Tool Word for Xenix systems.[10][11][12] Subsequent versions were later written for several other 
platforms including: IBM PCs running DOS (1983), Apple Macintosh running the Classic Mac OS (1985), AT&T UNIX PC (1985),
 Atari ST (1988), OS/2 (1989), Microsoft Windows (1989), SCO Unix (1990), macOS (2001), Web browsers (2010), iOS (2014) and
  Android (2015). Using Wine, versions of Microsoft 
Word before 2013 can be run on Linux.   
</p>
</div>

{/* <===================TEXT properties===========================>  */}
 <br/>
<div className='link'>
<h1>LINK PROPERTIES</h1>
<a href='google.com' target='_blank'>LINK</a>
</div>

{/* <===================LIST properties===========================>  */}
 <br/>
<div className='list'>
<h1>LIST PROPERTIES</h1>

<ul className='a'>
<li>Dog</li>
<li>Fox</li>
<li>Lion</li>
<li>Dragon</li>
</ul>

<br/>

<ul className='b'>
<li>Dog</li>
<li>Fox</li>
<li>Lion</li>
<li>Dragon</li>
</ul>
<br/>

<ul className='c'>
<li>Dog</li>
<li>Fox</li>
<li>Lion</li>
<li>Dragon</li>
</ul>

</div>

<br/>
{/* <===================TABLE properties===========================>  */}
<div className='table'>

<table>
<tr>
    <th>S.NO</th>
    <th>NAME</th>
    <th>ROLE</th>
</tr>
<tr>
    <td>1</td>
    <td>Barani</td>
    <td>Tester</td>
</tr>


</table>


</div>
<br/><br/>
{/* <===================DISPLAY properties===========================>  */}
<div className='display'>
<h1>DISPLAY properties</h1>
<span>Tamil</span>
<span>English</span>
<span>Social</span>
<span>Cs</span>
<h1>I am Barani<p>Developer</p><p className='inlineblock'>in chennai</p></h1>


</div>
<br/><br/>
{/* <===================OVERFLOW properties===========================>  */}
<div className='overflow'>
<h1>OVERFLOW properties</h1>
<p>
Microsoft Word is a word processor developed by Microsoft. It was first released on October 25, 1983,[9]
 under the name Multi-Tool Word for Xenix systems.[10][11][12] Subsequent versions were later written for several 
 other platforms including: IBM PCs running DOS (1983), Apple Macintosh running the Classic Mac OS (1985), AT&T UNIX PC
 (1985), Atari ST (1988), OS/2 (1989), Microsoft Windows (1989), SCO Unix (1990), macOS (2001), Web browsers (2010), iOS
  (2014) and Android (2015). Using Wine, versions
 of Microsoft Word before 2013 can be run on Linux.
</p>



</div>
<br/><br/>
{/* <===================FLOAT properties===========================>  */}
<div className='float'>
<div className='left'>
  
    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQP7ARHenfnGXcxCIhmDxObHocM8FPbjyaBg&usqp=CAU"} className='imgl'/>
    <span>
Microsoft Word is a word processor developed by Microsoft. It was first released on October 25, 1983,[9]
 under the name Multi-Tool Word for Xenix systems.[10][11][12] Subsequent versions were later written for several 
 other platforms including: IBM PCs running DOS (1983), Apple Macintosh running the Classic Mac OS (1985), AT&T UNIX PC
 (1985), Atari ST (1988), OS/2 (1989), Microsoft Windows (1989), SCO Unix (1990), macOS (2001), Web browsers (2010), iOS
  (2014) and Android (2015). Using Wine, versions
 of Microsoft Word before 2013 can be run on Linux.
</span>
</div>
<div className='right'>
  
    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQP7ARHenfnGXcxCIhmDxObHocM8FPbjyaBg&usqp=CAU"} className='imgr'/>
<span>
  
Microsoft Word is a word processor developed by Microsoft. It was first released on October 25, 1983,[9]
 under the name Multi-Tool Word for Xenix systems.[10][11][12] Subsequent versions were later written for several 
 other platforms including: IBM PCs running DOS (1983), Apple Macintosh running the Classic Mac OS (1985), AT&T UNIX PC
 (1985), Atari ST (1988), OS/2 (1989), Microsoft Windows (1989), SCO Unix (1990), macOS (2001), Web browsers (2010), iOS
  (2014) and Android (2015). Using Wine, versions
 of Microsoft Word before 2013 can be run on Linux.
 </span>    
</div>
</div>


<br/><br/><br/>
{/* <===================COMBINATORS properties===========================>  */}
<div className='combinator__container'>
<h1>COMBINATORS properties 1</h1>


<div>
<h4>COMBINATORS properties 1</h4>
<p>TDS 0</p>
<div  className='combinators1'>
    Tamil Developer Studio
    <p>TDS  1</p>
    <span><p>TDS 2</p></span>
    <p>TDS 3</p>
</div>
<p>TDS 4</p>
</div>

<br/>


{/* -------2--------- */}
<div>
<h4>COMBINATORS properties 2</h4>
<p>TDS 5</p>
<div  className='combinators2'>
    Tamil Developer Studio
    <p>TDS  6</p>
    <span><p>TDS 7</p></span>
    <p>TDS 8</p>
</div>
<p>TDS 9</p>
</div>
<br/>


{/* --------3--------- */}
<div>
<h4>COMBINATORS properties 3</h4>
<p>TDS 10</p>
<div  className='combinators3'>
    Tamil Developer Studio
    <p>TDS  11</p>
    <span><p>TDS 12</p></span>
    <p>TDS 13</p>
</div>
<p>TDS 14</p>
</div>




{/* --------4--------- */}

<div>
<h4>COMBINATORS properties 4</h4>
<p>TDS 15</p>
<div  className='combinators4'>
    Tamil Developer Studio
    <p>TDS  16</p>
    <span><p>TDS 17</p></span>
    <p>TDS 18</p>
</div>
<p>TDS 19</p>
<p>TDS 20</p>
</div>


{/* --------5--------- */}

<div>
<h4>COMBINATORS properties 5</h4>
<p>TDS 21</p>
<div  className='combinators5'>
    Tamil Developer Studio
    <p>TDS  22</p>
    <span><p>TDS 23</p></span>
    <p>TDS 24</p>
</div>
<p>TDS 25</p>
<span>TDS 26</span>
<p>TDS 27</p>
</div>


{/* --------6--------- */}

<div>
<h4>COMBINATORS properties 6</h4>
<p>TDS 21</p>
<div  className='combinators6'>
    Tamil Developer Studio
    <p>TDS  28</p>
    <span><p>TDS 29</p></span>
    <p>TDS 30</p>
</div>
<p>TDS 31</p>
<span>TDS 32</span>
<p>TDS 33</p>
</div>





</div>
<br/><br/>
{/* <===================PSEUDO CLASS properties===========================>  */}

<div className='pseudo__container'>
<h1>PSEUDO CLASS properties 1</h1>
<br/>
<div className='pseudo__container1'>


<p><a href='#' className='highlight'>LINK</a></p>

<div>Hello Developer<br/><br/> <p>HELLO</p></div>
</div>
<br/><br/>

<div className='pseudo__container2'>
<p><b>Tamil</b> <b>Developer</b> 1</p>
<p>Tamil Developer 2</p>

<div>
<p><b>Tamil</b> <b>Developer</b> 3</p>
<p>Tamil Developer 4</p>
</div>
</div>
<br/>

<div className='pseudo__container3' >
<ul>
    <li>tag 1</li>
    <li>tag 2</li>
    <li>tag 3</li>
    <li>tag 4</li>
</ul>
<br/>

<p>TDS</p>
<p>TDS</p>
<p>TDS</p>

<span>Tamil Developer</span>
<span>Tamil Developer</span>
<span>Tamil Developer</span>
</div>
</div>


{/* <===================PSEUDO ELEMENT properties===========================>  */}

<div className='pseudoelement__container'>

<p>Hello Everyone</p>
<h3>Tamil Developer</h3>

<ul>
    <li>Tamil 1</li>
    <li>Tamil 2</li>
    <li>Tamil 3</li>
</ul>
<ol>
    <li>Tamil 1</li>
    <li>Tamil 2</li>
    <li>Tamil 3</li>
</ol>

</div>



{/* <===================Image Gallery properties===========================>  */}

<div className='imggallery__container'>
    <div className='imggallery'>
    <a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim43FOsSU9F-TXSSABOeBOKxC2UPRthwJRA&usqp=CAU' target='_blank' >
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim43FOsSU9F-TXSSABOeBOKxC2UPRthwJRA&usqp=CAU'/>
    </a>
    </div>
    <div className='imggallery'>
    <a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim43FOsSU9F-TXSSABOeBOKxC2UPRthwJRA&usqp=CAU' target='_blank' >
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim43FOsSU9F-TXSSABOeBOKxC2UPRthwJRA&usqp=CAU'/>
    </a>
    </div>
    <div className='imggallery'>
    <a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim43FOsSU9F-TXSSABOeBOKxC2UPRthwJRA&usqp=CAU' target='_blank' >
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim43FOsSU9F-TXSSABOeBOKxC2UPRthwJRA&usqp=CAU'/>
    </a>
    </div>
    <div className='imggallery'>
    <a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim43FOsSU9F-TXSSABOeBOKxC2UPRthwJRA&usqp=CAU' target='_blank' >
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim43FOsSU9F-TXSSABOeBOKxC2UPRthwJRA&usqp=CAU'/>
    </a>
    </div>



<br/>

</div>

</>
  )
}

export default Text