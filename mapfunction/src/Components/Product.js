import React from 'react'

const Product = (props) => {
    console.log(props);
  return (
    
    
    
    <>
      
     <div className='cards'>
         <div className='card'>
        
         <img src={props.imgsrc} alt="myPic" className='card_img'style={{height:'250px', width:'auto'}} />
         <h3>Vegtables</h3> 

         <div className='card_info'>
             
             <h3 className='card_title'>{props.sname}</h3>
             <a href={props.link} target='_blank'>
               <button className='Btn'>Buy Now</button>
             </a>
         </div>
      </div>
     </div>
 </>
)
};
  


export default Product