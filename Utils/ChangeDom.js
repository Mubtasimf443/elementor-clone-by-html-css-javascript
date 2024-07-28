/*  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ   ﷺ    */ 
/*I believe in Allah and he is enough for me */

const sideBar = document.querySelector('.sideBar');
const sideBarLayout  = sideBar.querySelector('#sideBarLayout');
let page = document.querySelector('#page')


export const returnTextCss = async (arg) => {
  let dom ;
  switch (arg) {
    case 'btn':
      dom = await sideBarLayout.querySelector(`.editButton`);
      break;
    case 'heading':
      dom = await sideBarLayout.querySelector(`.editHeading`);
      break;
    case 'para':
        dom = await sideBarLayout.querySelector(`.editParagraph`);
      break;
    case 'anchor' :
      dom = await sideBarLayout.querySelector('.editAnchor')
    break ;
  }
  let text = dom.querySelector("#content");
 

  let width = dom.querySelector("#width").value ;
  let height = dom.querySelector("#height").value ;
  let color = dom.querySelector('#font_color').value;
  let background  = dom.querySelector('#bg_color').value

  //fonts
  let txtDecoration = dom.querySelector('#txtDecoration').value;
  let fontSize = dom.querySelector('#font_size').value;
  let fontWeight = dom.querySelector('#fw').value;
  let wordSpacine = dom.querySelector('#word_spacine').value;
  let textAlign = dom.querySelector('#text_align').value;
  //padding
  let paddingTop = dom.querySelector('#pd_t').value; 
  let paddingRight = dom.querySelector('#pd_r').value;
  let paddingbottom = dom.querySelector('#pd_b').value;
  let paddingleft = dom.querySelector('#pd_l').value;
  
  
  //mt, mr, mb, ml  means margin top, bottom, right, left
  let mt = dom.querySelector('#mt').value;
  let mr = dom.querySelector('#mr').value;
  let mb = dom.querySelector('#mt').value;
  let ml = dom.querySelector('#ml').value;
  

  //border
  let bb = dom.querySelector('#bb').value.trim() 
  let bt = dom.querySelector('#bt').value.trim() 
  let bl = dom.querySelector('#bl').value.trim() 
  let br = dom.querySelector('#br').value.trim() 
  let bstyle = dom.querySelector('#bstyle').value.trim() ;
  let bcolor = dom.querySelector('#bcolor').value.trim() ;

  //border radius
  let btr = dom.querySelector('#btr').value.trim() ;
  let btl = dom.querySelector('#btl').value.trim() ;
  let bbl = dom.querySelector('#bbl').value.trim() ;
  let bbr = dom.querySelector('#bbr').value.trim() ;


  let style =
/* margin */   `margin-top:${returnSevenPx(mt)};margin-bottom:${returnSevenPx(mb)};margin-right: ${returnSevenPx(mr)};  margin-left: ${returnSevenPx(ml)};`
/*padding */  +` padding-top: ${returnFivePx(paddingTop)};  padding-right: ${returnFivePx(paddingbottom)};  padding-left: ${returnFivePx(paddingleft)};  padding-bottom: ${returnTenPx(paddingbottom)};`
 /*fonts */  +`text-decoration:${txtDecoration}; text-align:${returnByDefault(textAlign , 'right')}; font-weight:${returnByDefault(fontWeight, 600)}; font-size:${returnTenPx(fontSize)}; word-spacing:${returnByDefault(wordSpacine,'1px')}; color:${returnByDefault(color, '#000')};  background:${returnByDefault(background,'#fff')}; width:${returnByDefault(width, '150px')} ;height:${returnByDefault(height , '50px')};`
 /*border */ +`border-color:${returnByDefault(bcolor , '#000')}; border-style:${returnByDefault(bstyle , 'solid')}; border-left-width:${returnZeroPx(bl)} ; border-right-width:${returnZeroPx(br)}; border-top-width:${returnZeroPx(bt)};border-bottom-width:${returnZeroPx(bb)} ; ` 
 /* border radius*/ + ` border-top-left-radius:${returnZeroPx(btl)};border-top-right-radius:${returnZeroPx(btr)};border-bottom-left-radius:${returnZeroPx(bbl)}; border-bottom-right-radius:${returnZeroPx(bbr)};`;

  

  let targetElId = sideBarLayout.getAttribute('TargetedElementId');
  let target = document.getElementById(`${targetElId}`); 
  
  target.setAttribute('style', style);
 
 
  target.innerHTML =await returnByDefault(text.value , target.innerHTML)
 
}

export const returnImageCss = async () => {
  let dom = await sideBar.querySelector('.editImage');
  /*Starting Of selector*/ 
  
  let link =  dom.querySelector('#image_link').value;
  let height =  dom.querySelector('#width').value;
  let width =  dom.querySelector('#height').value;
  let mt =  dom.querySelector('#mt').value;
  let mr =  dom.querySelector('#mr').value;
  let mb = dom.querySelector('#mt').value;
  let ml = dom.querySelector('#ml').value;
  let pt = dom.querySelector('#pd_t').value;
  let pr  = dom.querySelector('#pd_r').value;
  let pb = dom.querySelector('#pd_b').value;
  let pl = dom.querySelector('#pd_l').value;
  let bg = dom.querySelector('#bg_color').value;
  let color = dom.querySelector('#color').value;
  let bb = dom.querySelector('#bb').value.trim() 
  let bt = dom.querySelector('#bt').value.trim() 
  let bl = dom.querySelector('#bl').value.trim() 
  let br = dom.querySelector('#br').value.trim() 
  let bstyle = dom.querySelector('#bstyle').value.trim() ;
  let bcolor = dom.querySelector('#bcolor').value.trim() ;
//border radius
let btr = dom.querySelector('#btr').value.trim() ;
let btl = dom.querySelector('#btl').value.trim() ;
let bbl = dom.querySelector('#bbl').value.trim() ;
let bbr = dom.querySelector('#bbr').value.trim() ;


  let style = 
   /*design */ `height:${ returnByDefault(height, '100px') }; width:${ returnByDefault(width, '100px') };background: ${bg} ;color:${color} ;`
 /* margin */ + ` margin-top:${ returnSevenPx(mt) }; margin-bottom:${ returnSevenPx(mb) }; margin-right:${ returnSevenPx(mr) }; margin-left:${ returnSevenPx(ml) }; `
 /* padding */ + `padding-top:${ returnFivePx(pt) };padding-bottom:${ returnFivePx(pb) };padding-left:${ returnFivePx(pl) };padding-right:${ returnTenPx(pr) };`
   /* border */ + `border-right-width:${returnZeroPx(br)};border-bottom-width:${returnZeroPx(bb)};border-left-width:${returnZeroPx(bl)};border-top-width:${returnZeroPx(bt)};border-color:${returnByDefault(bcolor, '#000')};border-style:${returnByDefault(bstyle, 'solid')};`
 /* border radius */ +  `border-top-left-radius:${returnSevenPx(btl)}; border-bottom-left-radius:${returnSevenPx(bbl)};border-bottom-right-radius:${returnSevenPx(bbr)} ;border-top-right-radius:${returnSevenPx(btr)};` 

  ;
  let id =await sideBarLayout.getAttribute('TargetedElementId')
  //Getting obj and setting src 
  let element = document.getElementById(id)
  element.setAttribute('src', link );
  element.setAttribute('style', style);
}


export const changeVideoCss = async () => {
  let   dom = await sideBar.querySelector('.editVideo');
 
  
  /*Starting Of selector*/ 
  
  let link =  dom.querySelector('#image_link').value;
  let height =  dom.querySelector('#width').value;
  let width =  dom.querySelector('#height').value;
  let mt =  dom.querySelector('#mt').value;
  let mr =  dom.querySelector('#mr').value;
  let mb = dom.querySelector('#mt').value;
  let ml = dom.querySelector('#ml').value;
  let pt = dom.querySelector('#pd_t').value;
  let pr  = dom.querySelector('#pd_r').value;
  let pb = dom.querySelector('#pd_b').value;
  let pl = dom.querySelector('#pd_l').value;
  let style = `
  margin-top:${ returnSevenPx(mt) };
  margin-bottom:${ returnSevenPx(mb) };
  margin-right:${ returnSevenPx(mr) };
  margin-left:${ returnSevenPx(ml) };
  padding-top:${ returnFivePx(pt) };
  padding-bottom:${ returnFivePx(pb) };
  padding-left:${ returnFivePx(pl) };
  padding-right:${ returnTenPx(pr) };
  height:${ returnByDefault(height, '100px') };
  width:${ returnByDefault(width, '100px') };
  `;
   let id =await sideBarLayout.getAttribute('TargetedElementId')
  //Getting obj and setting src 
  let element = document.getElementById(id)
  element.setAttribute('src', link );
  element.setAttribute('style', style);
}





export const returnIconCss = async () => {

  let dom = sideBar.querySelector('.editIcon');
  //design
  let background  = dom.querySelector('#bg_color').value
  let size = dom.querySelector('#size').value ;
  let color = dom.querySelector('#color').value;

/* margin */
  let mt = dom.querySelector('#mt').value;
  let mr = dom.querySelector('#mr').value;
  let mb = dom.querySelector('#mt').value;
  let ml = dom.querySelector('#ml').value;

/*padding */

  let pt = dom.querySelector('#pd_t').value;
  let pr = dom.querySelector('#pd_r').value;
  let pb = dom.querySelector('#pd_b').value;
  let pl = dom.querySelector('#pd_l').value;
  

//border
let bb = dom.querySelector('#bb').value.trim() 
let bt = dom.querySelector('#bt').value.trim() 
let bl = dom.querySelector('#bl').value.trim() 
let br = dom.querySelector('#br').value.trim() 
let bstyle = dom.querySelector('#bstyle').value.trim() ;
let bcolor = dom.querySelector('#bcolor').value.trim() ;

//border radius
let btr = dom.querySelector('#btr').value.trim() ;
let btl = dom.querySelector('#btl').value.trim() ;
let bbl = dom.querySelector('#bbl').value.trim() ;
let bbr = dom.querySelector('#bbr').value.trim() ;


  let style =
/* margin */  `margin-top: ${ returnSevenPx(mt) }; margin-bottom: ${ returnSevenPx(mb) }; margin-right: ${ returnSevenPx(mr) }; margin-left: ${ returnSevenPx(ml) };`
  /*padding */ + `padding-top: ${ returnFivePx(pt) };padding-bottom: ${ returnFivePx(pb) };padding-left: ${ returnFivePx(pl) };padding-right: ${ returnTenPx(pr) };` 
 /* design */ +`font-size: ${returnTenPx(size)} ;color : ${color};background:${background};`
  /* border radius*/ + ` border-top-left-radius:${returnZeroPx(btl)};border-top-right-radius:${returnZeroPx(btr)};border-bottom-left-radius:${returnZeroPx(bbl)}; border-bottom-right-radius:${returnZeroPx(bbr)};`;
   /*border */ +`border-color:${returnByDefault(bcolor , '#000')}; border-style:${returnByDefault(bstyle , 'solid')}; border-left-width:${returnZeroPx(bl)} ; border-right-width:${returnZeroPx(br)}; border-top-width:${returnZeroPx(bt)};border-bottom-width:${returnZeroPx(bb)} ; ` 

  
  ;

  let id =await sideBarLayout.getAttribute('TargetedElementId')
  let element = document.getElementById(id)
  element.setAttribute('style', style);
}



export const changeContainerCss = async () => {


  let dom = sideBar.querySelector('.editContainer') ;
  //design
  let width = dom.querySelector("#width").value ;
  let height = dom.querySelector("#height").value ;
  let color = dom.querySelector('#font_color').value;
  let background  = dom.querySelector('#bg_color').value
  //padding
  let pt = dom.querySelector('#pd_t').value; 
  let pr = dom.querySelector('#pd_r').value;
  let pb = dom.querySelector('#pd_b').value;
  let pl = dom.querySelector('#pd_l').value;
  
  //margin
  let mt = dom.querySelector('#mt').value;
  let mr = dom.querySelector('#mr').value;
  let mb = dom.querySelector('#mt').value;
  let ml = dom.querySelector('#ml').value;
  //border
  let bb = dom.querySelector('#bb').value.trim() 
  let bt = dom.querySelector('#bt').value.trim() 
  let bl = dom.querySelector('#bl').value.trim() 
  let br = dom.querySelector('#br').value.trim() 
  let bstyle = dom.querySelector('#bstyle').value.trim() ;
  let bcolor = dom.querySelector('#bcolor').value.trim() ;
  //border radius
  let btr = dom.querySelector('#btr').value.trim() ;
  let btl = dom.querySelector('#btl').value.trim() ;
  let bbl = dom.querySelector('#bbl').value.trim() ;
  let bbr = dom.querySelector('#bbr').value.trim() ;
  //advance
  let jc = dom.querySelector('#jc').value.trim() ;
  let ai = dom.querySelector('#ai').value.trim() ;
  let position = dom.querySelector('#position').value.trim() ;
  let fxd = dom.querySelector('#fxd').value.trim() ;




  let style = 
 /*design */  `background:${returnByDefault(background , 'white')};color:${returnByDefault(color, '#000')};width:${returnByDefault(width , '200px')};height:${returnByDefault(height, '200px')};`
 /* padding */ + `padding-top:${returnSevenPx(pt)};padding-bottom:${returnSevenPx(pb)};padding-left:${returnSevenPx(pl)};padding-right:${returnSevenPx(pr)};` 
 /* margin */ + ` margin-top:${returnSevenPx(mt)};margin-bottom:${returnSevenPx(mb)} ;margin-right:${returnSevenPx(mr)};margin-left:${returnSevenPx(ml)};` 
 /* border */ + `border-right-width:${returnZeroPx(br)};border-bottom-width:${returnZeroPx(bb)};border-left-width:${returnZeroPx(bl)};border-top-width:${returnZeroPx(bt)};border-color:${returnByDefault(bcolor, '#000')};border-style:${returnByDefault(bstyle, 'solid')};`
 /* border radius */ +  `border-top-left-radius:${returnSevenPx(btl)}; border-bottom-left-radius:${returnSevenPx(bbl)};border-bottom-right-radius:${returnSevenPx(bbr)} ;border-top-right-radius:${returnSevenPx(btr)};` 
 /* advance */ +  `display: flex;flex-direction:${returnByDefault(fxd , 'row')};justify-content:${returnByDefault(jc , 'center')};align-items:${returnByDefault(ai, 'center')};position:${returnByDefault(position, 'static')};`;

 let targetElId = sideBarLayout.getAttribute('TargetedElementId');
 let target = document.getElementById(`${targetElId}`); 
 target.setAttribute('style', style);

}







export const changeSectionCss = () => {
  let dom = sideBar.querySelector('.edditSection') ;
  //design
  let width = dom.querySelector("#width").value ;
  let maxHeight = dom.querySelector("#height").value ;
  let color = dom.querySelector('#font_color').value;
  let background  = dom.querySelector('#bg_color').value
  //padding
  let pt = dom.querySelector('#pd_t').value; 
  let pr = dom.querySelector('#pd_r').value;
  let pb = dom.querySelector('#pd_b').value;
  let pl = dom.querySelector('#pd_l').value;
  
  //margin
  let mt = dom.querySelector('#mt').value;
  let mr = dom.querySelector('#mr').value;
  let mb = dom.querySelector('#mt').value;
  let ml = dom.querySelector('#ml').value;
  //border
  let bb = dom.querySelector('#bb').value.trim() 
  let bt = dom.querySelector('#bt').value.trim() 
  let bl = dom.querySelector('#bl').value.trim() 
  let br = dom.querySelector('#br').value.trim() 
  let bstyle = dom.querySelector('#bstyle').value.trim() ;
  let bcolor = dom.querySelector('#bcolor').value.trim() ;
  //border radius
  let btr = dom.querySelector('#btr').value.trim() ;
  let btl = dom.querySelector('#btl').value.trim() ;
  let bbl = dom.querySelector('#bbl').value.trim() ;
  let bbr = dom.querySelector('#bbr').value.trim() ;
  //advance
  let jc = dom.querySelector('#jc').value.trim() ;
  let ai = dom.querySelector('#ai').value.trim() ;
  let position = dom.querySelector('#position').value.trim() ;
  let fxd = dom.querySelector('#fxd').value.trim() ;
  let style = 
  /*design */  `min-height:80px;background:${returnByDefault(background , 'white')};color:${returnByDefault(color, '#000')};width:${returnByDefault(width , '100%')};max-height:${returnByDefault(maxHeight, '440px')};`
  /* padding */ + `padding-top:${returnSevenPx(pt)};padding-bottom:${returnSevenPx(pb)};padding-left:${returnSevenPx(pl)};padding-right:${returnSevenPx(pr)};` 
  /* margin */ + `margin-top:${returnSevenPx(mt)};margin-bottom:${returnSevenPx(mb)} ;margin-right:${returnSevenPx(mr)};margin-left:${returnSevenPx(ml)};` 
  /* border */ + `border-right-width:${returnZeroPx(br)};border-bottom-width:${returnZeroPx(bb)};border-left-width:${returnZeroPx(bl)};border-top-width:${returnZeroPx(bt)};border-color:${returnByDefault(bcolor, '#000')};border-style:${returnByDefault(bstyle, 'solid')};`
  /* border radius */ +  `border-top-left-radius:${returnSevenPx(btl)}; border-bottom-left-radius:${returnSevenPx(bbl)};border-bottom-right-radius:${returnSevenPx(bbr)} ;border-top-right-radius:${returnSevenPx(btr)};` 
  /* advance */ +  `display: flex;flex-direction:${returnByDefault(fxd , 'row')};justify-content:${returnByDefault(jc , 'center')};align-items:${returnByDefault(ai, 'center')};position:${returnByDefault(position, 'static')};`;
 


  let targetElId = sideBarLayout.getAttribute('TargetedElementId');
  let target = document.getElementById(`${targetElId}`); 
  target.setAttribute('style', style);
  console.log(style);















  return 
}


export function changeHref() {
  let dom = sideBarLayout.querySelector('.editAnchor')
  let href= dom.querySelector('#href').value ;
  let anchor = document.getElementById( sideBarLayout.getAttribute('targetedelementid')) ;
  console.log(anchor);
  anchor.setAttribute('href' , href) ;
  return 'success'
}




function returnZeroPx(i) {
  if ( i === '')  {
    return '0px'
  } else {
    return i + 'px'
  }
}


export const returnFivePx = (i) =>  {
  if (i === '') {
    return "5px" 
  } else {
    return i + 'px'
  }
}


export const returnTenPx = (i) => {
  if (i === '') {
    return "10px"
  } else {
    return i + 'px'
  }
}


export const returnSevenPx = (i) => {
  if (i === '') {
    return "7px"
  } else {
    return i + 'px'
  }
}

export const returnCenter = (i) => {
  if (i === '' ) {
    return 'center'
  } else {
    return i
  }
}

export const returnByDefault = (a,b) => {
  if (a === '' || a === undefined || a === null) {
    return b 
  } else {
    return a 
  }
}




