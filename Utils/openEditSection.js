/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah  */ 
/* আমি পারবো না, কিন্তু আল্লাহ তায়া’লা চাইলে সব সম্ভব */ 


import { getContainerCss, getHref, getIconCss, getImgElementCss , getSectionCSS, getTextElementCss} from './getElementCss.js' ;



export async function openMarket(param) {
    let sidevar = await document.querySelector('.sideBar');
    let sideBarLayout = await document.getElementById('sideBarLayout');
  
    let div = sideBarLayout.querySelector('.market');
    if (!div.classList.contains('active')) {
     await  div.classList.add('active');/*changing the sideBarLayout */
    }
   
    let d = await sideBarLayout.children;
    
    for (const key of d) {
      
    if (key.classList.contains('active') === true && key.classList.contains("market") === false) {
            key.classList.remove('active');  console.log(key);
            
    }

}
}

export const openContainer =  async (id) => {
    let sidevar =await document.querySelector('.sideBar');
    let sideBarLayout = await document.getElementById('sideBarLayout');
  
    let div = sideBarLayout.querySelector('.editContainer');
    if (!div.classList.contains('active')) {
        await  div.classList.add('active');/*changing the sideBarLayout */
    }
    let divs =await sideBarLayout.children;
    
    for (const key of divs) {
        if (key.classList.contains('active') === true && key.classList.contains("editContainer") === false) {
            key.classList.remove('active');  console.log(key);
        }
    }
    await sideBarLayout.setAttribute('TargetedElementId', id) ;
    console.log(id);
    getContainerCss(id) 
}

export const openEditSection = async (id) => {
    let sidevar = await document.querySelector('.sideBar');
    let sideBarLayout = await sidevar.querySelector('#sideBarLayout');
    let div = await sideBarLayout.querySelector(`.edditSection`);
    if (!div.classList.contains('active')) {
      await div.classList.add('active');/*changing the sideBarLayout */
      
    }
    await sideBarLayout.setAttribute('TargetedElementId', id) ;
    let divs = await sideBarLayout.children;
    for (const key of divs) {
        if (key.classList.contains('active') === true && key.classList.contains('edditSection') === false) {
            key.classList.remove('active');

        }
    }
    console.log(id + 'abc');
    
   getSectionCSS(id)


}


export const openTagEditor = async (CLASSName , id) => {
 let sidevar = await document.querySelector('.sideBar');
 let sideBarLayout = await sidevar.querySelector('#sideBarLayout');
 let div = await sideBarLayout.querySelector(`.${CLASSName}`);
 if (!div.classList.contains('active')) {
    await div.classList.add('active');/*changing the sideBarLayout */
  }
  await sideBarLayout.setAttribute('TargetedElementId', id) ;
  let divs = await sideBarLayout.children;
  for (const key of divs) {
    if (key.classList.contains('active') === true && key.classList.contains(CLASSName) === false) {
        key.classList.remove('active');
    }
   }
   switch (CLASSName) {
    case 'editButton':
        getTextElementCss(id, CLASSName)
        break;
    case 'editHeading' :
        getTextElementCss(id, CLASSName)
        break;
    case 'editParagraph':
        getTextElementCss(id, CLASSName)
        break; 
    case 'editIcon':
     getIconCss(id )
        break;
    case 'editImage':
        getImgElementCss(id, CLASSName);
        break;
     case 'editAnchor': 
     getTextElementCss(id , CLASSName )
     getHref(id);
        break ;     
   }

}
