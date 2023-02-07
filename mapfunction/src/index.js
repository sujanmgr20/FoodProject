import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Style.css';
import Card from './Components/Product';
import ProductList from './Components/ProductList'



//console.log(ProductList[0].sname)

 function foodCategory(val){
  console.log(val);
  return(
    <Card
   imgsrc={val.imgsrc}
   title={val.title}
   sname={val.sname}
   link={val.link}
   />
  )

 }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 {ProductList.map(foodCategory)};
</>
 
);


