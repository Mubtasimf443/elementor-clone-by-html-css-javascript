/*بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah  */
/* Allah is my hope  ,he is my motivation */


import {returnImageCss,returnTextCss,returnIconCss, changeContainerCss, changeVideoCss, changeSectionCss, changeHref} from "./ChangeDom.js";

 



const getActiveEditor = async (event) => {
  event.preventDefault();
  let sidebar = document.querySelector('.sideBar')
  let sideBarLayout  = sidebar.querySelector('#sideBarLayout');
  let children = sideBarLayout.children;
  for (let child of children) {
    if ( child.classList.contains('market') === false && child.classList.contains('active') === true) {
      if (child.classList.contains('editHeading')) {
         return returnTextCss('heading')
      }
      else if (child.classList.contains('editButton')) {
        return returnTextCss('btn')
      } else if (child.classList.contains('editImage')) {
        return returnImageCss()
      } else if (child.classList.contains('editParagraph')) {
        return returnTextCss('para')
      } else if (child.classList.contains('editIcon')) {
        return returnIconCss();
      } else if (child.classList.contains('editVideo')) {
        return changeVideoCss()
      } else if ( child.classList.contains('editContainer')) {
         changeContainerCss() ;
         return
      } else if ( child.classList.contains('edditSection') ) {
        return changeSectionCss() ;
      } else if (  child.classList.contains('editAnchor') ) {
        returnTextCss('anchor') ;
        changeHref() ;
        return
      }
    }
  }
  
  
  
} 



export default getActiveEditor ;
