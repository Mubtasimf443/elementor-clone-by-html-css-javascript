/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   */
/* I do not Beleive In Muhammad Mubtasim Fuad, I beleive In Allah  */ 
/*  The world wants to break me, Only Allah wants to establish me */


//Imports
import {returnH1,  returnForm,  returnIcon,  returnButton,  returnSection,  returnParagraph,  returnAncor,returnImage, returnVideo,  returnUniqueId, returnDiv } from './ReturnTags.js';


import {openContainer, openTagEditor} from './openEditSection.js'
import {getImgElementCss, getTextElementCss } from './getElementCss.js'




export const addElementToConTainer = async (params) => {
 let sideBarLayout  =  document.getElementById('sideBarLayout');
 let targetedElID = sideBarLayout.getAttribute('TargetedElementId');
 
 let targetEl = document.getElementById(targetedElID)
 let id = returnUniqueId();

    switch (params) {
      case 'h1':
        targetEl.innerHTML = targetEl.innerHTML +  returnH1(id);
        openTagEditor('editHeading' , id) ;
        //getTextElementCss(id , 'editHeading')
      break;
    case 'img':
        targetEl.innerHTML = targetEl.innerHTML +  returnImage(id) ;
        openTagEditor('editImage' , id) ;
      //  getImgElementCss( id , 'editImage' )
    break;
    case 'btn':
        targetEl.innerHTML = targetEl.innerHTML +  returnButton(id);
        openTagEditor('editButton' , id) ;
     // getTextElementCss(id , 'editButton')
  
    break;
    case 'paragraph' :
        targetEl.innerHTML = targetEl.innerHTML + returnParagraph(id);
        openTagEditor('editParagraph', id) ;
      //  getTextElementCss(id , 'editParagraph') ;
    break;
    case 'form':
      targetEl.innerHTML = targetEl.innerHTML +  returnForm(id);
    
    break;
    case 'Container':
      targetEl.innerHTML = targetEl.innerHTML +  returnDiv(id);
      openContainer(id) ;
    break;
    case 'video':
      targetEl.innerHTML = targetEl.innerHTML +  returnVideo(id);
       openTagEditor('editVideo' , id)
    break;
    case 'icon':
      targetEl.innerHTML = targetEl.innerHTML + returnIcon(id);
      openTagEditor('editIcon', id);
    break;
    case 'anchor':
      targetEl.innerHTML = targetEl.innerHTML +  returnAncor(id);
      openTagEditor('editAnchor' , id)
    break;
   }
 
 

 
}







