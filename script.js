/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah  */
/*I believe in Allah , and his marcy is enough for making me successful  */



//Imports 
import { addContainer } from './Utils/addContainer.js';
import { openMarket , openTagEditor } from './Utils/openEditSection.js';
import {handleEditSection} from './Utils/handleEditSection.js';
import {handlePageElementClick} from './Utils/handlePageElementClick.js';
import getActiveEditor from './Utils/getActiveEditor.js';






//varibles
let page = document.getElementById('page')
let plusBtn = document.querySelector('.plus_Btn');
let sideBar = document.querySelector('.sideBar');
let sidebarLayout = document.querySelector('#sideBarLayout')
let edditSection = sideBar.querySelector('.edditSection');
let completeBtn = sideBar.querySelector('#completeBtn')
let marketBtn = sideBar.querySelector('.element_market') ;
let market = sideBar.querySelector('#market') ;



//css variables
var prevBorderColor, prevBorderStyle  , prevBorderLeft  , prevBorderRight, prevBorderTop , prevBorderBottom  ;




//When Dom css is completed
completeBtn.addEventListener('click', getActiveEditor)




// after charging the sideBarLayout,when person interect

market.addEventListener('click', handleEditSection );



//Page Events Handling 



plusBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addContainer();
})




//when any one clicked to any element of the page to edit the page
// I have use event delegation
page.addEventListener('click', handlePageElementClick) ;


//dblclick to page
page.addEventListener('dblclick', () => {
  if (page.style.width !== '943px') {
 page.style.width = '943px' 
 sideBar.style.left = '0em'
 return
}  

if ( page.style.width === '943px' ) {
  page.style.width = '100%'
  sideBar.style.left = '-19em'
  return
}
}) ;


//when anyone clicked to market btn
marketBtn.addEventListener('click' ,async (event) => {
  event.preventDefault();
  let parentid = sidebarLayout.getAttribute('TargetedElementId');
  let parent = document.getElementById(parentid);
  if (parent.tagName === 'SECTION' || parent.tagName === 'DIV') { 
    //there is no permission to user to insert html in a h1, img ,video, or textarea
    if (parentid !== 'page') {
      openMarket(event.target.id) ;
    }
  } else if (parent.parentNode.tagName ==='SECTION' || parent.parentNode.tagName === 'DIV') {
 await  sidebarLayout.setAttribute('TargetedElementId' , parent.parentNode.id);
   openMarket()
   
  } 
}) ;






// when mouse hover on a element
/*

page.addEventListener('mouseover', (e) => {

  if (e.target.id != 'page') {
    prevBorderTop = e.target.style.borderTopWidth;
    prevBorderLeft = e.target.style.borderLeftWidth ;
    prevBorderRight = e.target.style.borderRightWidth ;
    prevBorderBottom  = e.target.style.borderBottomWidth ;
    prevBorderColor = e.target.style.borderColor ; 
    prevBorderStyle  = e.target.style.borderStyle ;
     e.target.style.borderTopWidth = '2.17px';
     e.target.style.borderLeftWidth = '2.31px';
     e.target.style.borderRightWidth = '2.22px';
     e.target.style.borderBottomWidth = '2.24px';
     e.target.style.borderColor = '2.3px' ; 
     e.target.style.borderStyle  = '#084baf';




    return
  } 
});



page.addEventListener('mouseout', (e) => {


  if (e.target.id != 'page') {
 //   console.log(prevBorderLeft  , prevBorderRight, prevBorderTop , prevBorderBottom ,prevBorderColor ,prevBorderStyle);
    e.target.style.borderTopWidth =prevBorderTop ; prevBorderTop= '' ;
    e.target.style.borderLeftWidth =prevBorderLeft ; prevBorderLeft= '' ;
    e.target.style.borderRightWidth =prevBorderRight ; prevBorderRight= '' ;
    e.target.style.borderBottomWidth = prevBorderBottom ; prevBorderBottom= '' ;
    e.target.style.borderColor = prevBorderColor ; prevBorderColor= '' ;
    e.target.style.borderStyle  =prevBorderStyle; prevBorderStyle= '' ;
  //  console.log(prevBorderLeft  , prevBorderRight, prevBorderTop , prevBorderBottom ,prevBorderColor ,prevBorderStyle);


    
    
    return

  } 
}) */
