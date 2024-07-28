/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   */
/* I do not Beleive In Muhammad Mubtasim Fuad, I beleive In Allah  */
/*  The world wants to break me, Only Allah wants to establish me */



let pstyle = ' text-decoration: none;border-color:#000; border-left: 5px; border-right:0px; border-top: 0px;border-bottom:0px;border-style:solid; height:45px;width:90px; margin-top:4px;margin-bottom:4px ;margin-right: 7px;margin-left: 7px;padding-top: 5px;padding-bottom: 5px;padding-left: 5px;padding-right:5px;text-align: left;font-weight: 500;font-size: 16px;word-spacing: 5px;color: #000;background: #fff ;border-left-width:0px; border-right-width:0px; border-top-width:0px;border-bottom-width:0px ; border-top-left-radius:0px ;border-top-right-radius:0px ;border-bottom-left-radius:0px ; border-bottom-right-radius:0px;'; 
let hstyle = " text-decoration: none;border-color:#000;height:45px;width:90px ;margin-top:6px;margin-bottom:6px ;margin-right: 8px;margin-left: 8px;padding-top: 10px;padding-bottom: 10px;padding-left: 15px;padding-right: 15px;text-align: left;font-weight: 700;font-size: 33px;word-spacing: 7px;color: #000;background: #fff; border-left-width:0px; border-right-width:0px; border-top-width:0px;border-style: solid;border-bottom-width:0px ; border-top-left-radius:0px ;border-top-right-radius:0px ;border-bottom-left-radius:0px ; border-bottom-right-radius:0px;";
let btnstyle = " text-decoration: none;border-color:#000;color: #000;background: #086BAA;width: 100px;height: 60px;font-weight: 600;font-size: 20px;word-spacing: 5px;text-align: center;padding-top: 7px;padding-bottom:7px;padding-left: 7px;padding-right: 7px;margin-top: 7px;margin-bottom: 7px;margin-left: 7px;margin-right: 7px;border-style: solid;border-top: 0px;border-bottom: 0px;border-left: 0px;border-right: 0px;border-top-left-radius: 7px;border-top-right-radius: 7px;border-bottom-left-radius: 7px;flex-direction: row;justify-content: center;align-items: center;position: flex;column-gap: 14px;row-gap: 14px; border-left-width:0px; border-right-width:0px; border-top-width: 0px;border-bottom-width:0px ; border-top-left-radius:0px ;border-top-right-radius:0px ;border-bottom-left-radius:0px ; border-bottom-right-radius:0px;" ;
let imgstyle = 'background: white;border-style:dotted; margin-top:0px;margin-bottom:0px ;margin-right: 8px;margin-left: 8px; padding-top: 7.5px;padding-bottom: 7.5px;padding-left: 15px;padding-right: 15px; color: #ffffff;width: 100px;height: 100px;border-top-left-radius: 0px;border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;border-top-right-radius: 0px;border-color: #000;border-top-width: 0px;border-right-width: 0px;border-bottom-width: 0px;border-left-width: 0px;'
let containerStyle = ` text-decoration: none;background: white;color: #fff;width:200px;height:200px;border-top-left-radius: 0px; border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;border-top-right-radius: 0px;border-color: #000;border-top-width: 1px;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-color: #000;border-style: solid;display: flex;flex-direction: row;justify-content: center;align-items: center;position:static;margin-top:0px;margin-bottom:0px ;margin-right: 0px;margin-left: 0px; padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;`
let sectionStyle  = ` text-decoration: none;background: white;color: #fff;width:100%;min-height:200px;max-height:450px;border-top-left-radius: 0px; border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;border-top-right-radius: 0px;border-color: #000;border-top-width: 1px;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-color: #000;border-style: solid;display: flex;flex-direction: row;justify-content: center;align-items: center;position:static;margin-top:0px;margin-bottom:0px ;margin-right: 0px;margin-left: 0px; padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;`
let anchorStyle = 'background: #ffffff;color: #0c62b3;width: 120px;height: auto; margin-top:0px;margin-bottom:0px ;margin-right:0px;margin-left:0px;padding-top:0px;padding-bottom: 0px;padding-left: 0px;padding-right: 0px;  border-top-left-radius: 0px; border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;border-top-right-radius: 0px;border-top-width: 0px; border-right-width: 0px;border-bottom-width: 0px;border-left-width: 0px;border-color: #000;border-style:dotted;text-align: left;font-weight: 700;font-size: 16px;word-spacing: 4px;text-decoration: none;'
let iconStyle = '  background: white; font-size: 25px; color: #000;margin-top:0px;margin-bottom:0px ;margin-right: 0px;margin-left: 0px;padding-top: 0px;padding-bottom:0px;padding-left:  0px;padding-right:  0px; border-top-width: 0px; border-right-width:  0px;border-bottom-width:  0px;border-left-width:  0px;border-color: #000;border-style:solid; border-top-left-radius: 0px; border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;border-top-right-radius: 0px;' ;


export const returnUniqueId = () => {
  return Math.floor(Math.random() * 1000000000);
}


export function returnH1(item) {
  if (item !== undefined) {
    let data =   `<h1 id="${item}"  class=""  style="${hstyle}"> Write The Heading <!-- I believe in Allah and by his will I will gain success in my life --> </h1>` ;
    return data;
  } else {
    let id = returnUniqueId();
    return `<h1 id="${id}" class="" > Write The Heading  <!-- I believe in Allah and by his will I will gain success in my life --> </h1>`
  }
  
  
}


export const returnParagraph = (item) => {
  if (item !== undefined) {
  return `<p id="${item}" style="${pstyle}"  class=""  >Please Write Paragraph <!-- I believe in Allah and by his will I will gain success in my life --> </p>`
  }
  let id = returnUniqueId()
  return `<p id="${id}"  class=""  >Please Write Paragraph <!-- I believe in Allah and by his will I will gain success in my life -->  </p>`
}



export const returnIcon = (item) => {
  if (item !== undefined) {
    return `<i  style="${iconStyle}" class="fa-solid fa-user-shield" id="${item}"  ><!-- I believe in Allah and by his will I will gain success in my life --> </i>`
  }
  let id = returnUniqueId();
  return `<i id="${id}" style="${iconStyle}" class="fa-solid fa-user-shield"  ><!-- I believe in Allah and by his will I will gain success in my life --> </i>`
}


export const returnImage = (item) => {
  if (item !== undefined) {
    
 return    `<img id="${item}" class=""  alt="sample Image" style="${imgstyle}"  src="loading.gif"  ><!-- I believe in Allah and by his will I will gain success in my life --> </img>`
} 
  let id = returnUniqueId()
  return `<img id="${id}" alt="sample Image" style="${imgstyle}" src="loading.gif" class="" ><!-- I believe in Allah and by his will I will gain success in my life --> </img>`
}


export const returnVideo = (item) => {
  if (item !== undefined) {
  return  `<video id="${item}" style="${imgstyle}"  class=""  ><!-- I believe in Allah and by his will I will gain success in my life --> </video>`
} 
  let id = returnUniqueId()
  return `<video id="${id}" style="${imgstyle}" class=""  ><!-- I believe in Allah and by his will I will gain success in my life --> </video>`
}



export const returnSection = (item) => {
  if (item!== undefined) {
    return `<section id="${item}" style="${sectionStyle}" class="" ><!-- I can Do this by the marcy of Allah --></section>`
  } else {
    let id = returnUniqueId();
    return `<section id="${id}" style="${sectionStyle}" class="" ><!-- I can Do this by the marcy of Allah --></section>`
  }
  
}


export  const returnAncor =  (i) => {
  if (i!== undefined ) {
    return  `<a href="" style="${anchorStyle}" class=""  id="${i}">United States<!-- I believe in Allah and by his will I will gain success in my life --> </a>`
  }
  let id = returnUniqueId();
  return `<a href="" style="${anchorStyle}" class="" id="${id}"> United States<!-- I believe in Allah and by his will I will gain success in my life --> </a>`
}


export const returnForm = (item) => {
  if (item !== undefined) {
    return `<form id="${item}">` + returnInput() + returnInput() + returnInput() + returnButton() + "</form>";
  }
  let formId = returnUniqueId();
  let form =  `<form id="${formId}">` + returnInput() + returnInput() + returnInput() + returnButton() + "</form>";
  return form
}




export const returnInput = (item ) => {
  if (item!== undefined) {
    return `<input id="${item}" class=""  />`
  }
  
  let id = returnUniqueId();
  return `<input id="${id}" class="" />`
}


export const returnButton = (item ) => {
  if (item!== undefined) {
    return `<button style="${btnstyle}"
      id="${item}" onclick="function (e) {window.location.replace('http://www.google.con')}" class="" >submit<!-- I believe in Allah and by his will I will gain success in my life --> </button>`;
  }
  let id = returnUniqueId();
  return `<button id="${id}" class=""  ><!-- I believe in Allah and by his will I will gain success in my life --> </button>`;
}


export const returnSocialIcon = () => {
 let fbIcon = `<i id="${returnUniqueId()}" elName="fbIcon" > </i>` ;
 let XIcon = `<i id="${returnUniqueId()}" elName="XIcon" > </i>` ;
 let linkedinIcon = `<i id="${returnUniqueId()}" elName="LkIcon" > </i>` ;
 let pinterestIcon =  `<i id="${returnUniqueId()}" elName="pinterestIcon" > </i>` ;
 
 
 return fbIcon + XIcon + linkedinIcon + pinterestIcon
 
}


export const returnDiv = (i) => {
  if (i === undefined || i === '' || i ===null) {
    let id = returnUniqueId();
    return `<div id="${id}" style="${containerStyle}" ><!-- I believe in Allah and by his will I will gain success in my life -->  </div>`
  }
 return  `<div id="${i}" style="${containerStyle}" >   <!-- I believe in Allah and by his will I will gain success in my life --> </div>`

}




/*
if (item !== undefined) {
  return 
} */ 