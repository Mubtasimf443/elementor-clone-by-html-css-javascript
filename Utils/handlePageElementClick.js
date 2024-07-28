/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah  */
/*I believe in Allah , and his marcy is enough to enlighten my life*/



import {openContainer,  openEditSection,  openTagEditor} from './openEditSection.js' ;


export const handlePageElementClick =  (event) =>  {
    event.preventDefault();
    let id = event.target.id;
   console.log(id);
    switch (event.target.tagName) {
      case 'SECTION': 
      openEditSection(id);
        break;
      case 'BUTTON' : 
      openTagEditor('editButton' ,id);

        break ;
      case 'IMG' : 
      openTagEditor('editImage',id);

         break ;
      case 'H1' : 
      openTagEditor('editHeading',id);

        break ;
      case 'P' : 
      openTagEditor('editParagraph',id);

        break ;
      case 'VIDEO':
         openTagEditor('editVideo',id);

        break ;
      case 'I'  : 
      openTagEditor('editIcon',id);

      break;
      case "DIV":
        if (event.target.id !== 'page') {
          openContainer(id) ;

        } 
      // openContainer(id)
        break ;
  
    }
}




































