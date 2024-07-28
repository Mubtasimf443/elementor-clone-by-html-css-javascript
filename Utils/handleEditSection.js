/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah  */ 
/* আমি পারবো না, কিন্তু আল্লাহ তায়া’লা চাইলে সব সম্ভব */ 

import {addElementToConTainer  } from './addElementToConTainer.js';
import { getTextElementCss } from './getElementCss.js';


export const handleEditSection = (event) => {
  event.preventDefault();
 
  
  if (event.target.innerHTML.includes('Heading') ) {
    addElementToConTainer('h1') ;
    
    return 
   
  } 
  else if (event.target.innerHTML.includes('button') ) {
    
    
  addElementToConTainer('btn') ;

  

 return
  }
  else  if (event.target.innerHTML.includes('image')) {
    addElementToConTainer('img')
    return
  }
  else if (event.target.innerHTML.includes('paragraph')) {
  addElementToConTainer('paragraph') ;
 
   
  
  return
  }
  else  if (event.target.innerHTML.includes('icon')) {
  addElementToConTainer('icon')
  return
  }
  else if (event.target.innerHTML.includes('video') ){
   addElementToConTainer('video')
   return
  }
  else if (event.target.innerHTML.includes('form') ){
    addElementToConTainer('form')
    return
  } else if (event.target.innerHTML.includes( 'anchor')) {
    addElementToConTainer('anchor')
    return
    
  } else if (event.target.innerHTML.includes( 'Container')) {
    addElementToConTainer('Container')
    return
    
  } 

  


}










