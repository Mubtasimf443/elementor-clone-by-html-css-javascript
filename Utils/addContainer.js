/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ    ﷺ   InshaAllah  */
/* Ya Allah, you will answer them What is my Potential */ 



import { getSectionCSS } from './getElementCss.js';
import {returnSection, returnUniqueId} from './ReturnTags.js';



export async function addContainer(index, sectionNumber) {
  let secstions = await page.getElementsByTagName('section');
  let functionalHTML = '';
  if (index !== undefined &&  sectionNumber !== undefined ) {
    let i = 0;
    do {
    if ( i === index) {
      functionalHTML = functionalHTML + returnSection() ;
    }
    functionalHTML = functionalHTML + `<section elName="section"  id="${secstions[i].id}">${ secstions[i].innerHTML }</section> `;console.log(i) ;
    i += 1 ;
    
    } while (i < secstions.length);
    page.innerHTML = await functionalHTML;
    console.log(page)
    return ;





  } else if (secstions.length === 0) { 
     let id = returnUniqueId() ;
    page.innerHTML = await page.innerHTML +  ' ' + returnSection(); 
    getSectionCSS(id)
    return ; 
  } else {
    
   let id = returnUniqueId() ;
   page.innerHTML = await page.innerHTML + returnSection(id); 
   getSectionCSS(id)
   return
  }
}

