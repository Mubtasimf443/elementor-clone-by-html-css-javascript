/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah  */
/* Ya Allah, I am dependent on you, please help me  */ 



export const getImgElementCss = async (id , clid) => {
  let  color,bg,pt,pl,pb,pr,mt,mr,ml,mb,height,width,bl,br,bt,bb,borderColor,bstyle ,btr ,btl, bbr,bbl ;

  let sideBarLayout = document.querySelector('#sideBarLayout');

  let el = document.getElementById(`${id}`);
  console.log(el);
  let src = el.getAttribute('src');
  let style = el.getAttribute('style');
  let styleArray = style.split(';');
  console.log(styleArray);
 styleArray.map(element => {
    if (element.includes('border-color')) {
      borderColor = element.replace('border-color:','') ;return
    } else if (element.includes('border-top-left-radius')) {
      btl = element.replace('border-top-left-radius:' ,'') ;
    
      return
    } else if (element.includes('border-top-right-radius')) {
      btr = element.replace('border-top-right-radius:' ,'') ;
    
      return
    } else if (element.includes('border-bottom-left-radius')) {
      bbl = element.replace('border-bottom-left-radius:' ,'') ;
    
      return
    } else if (element.includes('border-bottom-right-radius')) {
      bbr = element.replace('border-bottom-right-radius:' ,'') ;
    
      return
    } else if (element.includes('border-left-width')) {
      bl = element.replace('border-left-width:' ,'') ;
    
      return
    } else if (element.includes('border-top-width')) {
      bt = element.replace('border-top-width:' ,'') ;
    
      return
    } else if (element.includes('border-right-width')) {
     
     br = element.replace('border-right-width:' ,'') ;
   
      return
    } else if (element.includes('border-bottom-width')) {
      bb = element.replace('border-bottom-width:' ,'') ;
    
      return
    } else if (element.includes('color') && element.includes('border') === false) {
   color = element.replace('color:','') ; return
   } else if (element.includes('background')) {
   bg = element.replace('background:', ''); return
  } else if (element.includes('margin-top')) {
      mt = element.replace('margin-top:', ''); return
  } else if (element.includes('margin-bottom')) {
      mb = element.replace('margin-bottom:', ''); return
  } else if (element.includes('margin-right')) {
      
      mr = element.replace('margin-right:', ''); return
  } else if (element.includes('margin-left')) {
      ml = element.replace('margin-left:', ''); return
  } else if (element.includes('padding-top')) {
      pt = element.replace('padding-top:', ''); return
  } else if (element.includes('padding-right')) {
     pr = element.replace('padding-right:', ''); return
  } else if (element.includes('padding-left')) {
      pl = element.replace('padding-left:', ''); return
  } else if (element.includes('padding-bottom')) {
      pb = element.replace('padding-bottom:', ''); return
  } else if (element.includes('height')) {
     height = element.replace('height:', ''); return
  } else if (element.includes('width') === true && !element.includes('border')) {
      width = element.replace('width:', ''); return
  } else if (element.includes('border-style')) {

      bstyle  = element.replace('border-style:','') ;
      
        return
   }
  })

  let editingEl = sideBarLayout.querySelector('.' + clid);
  editingEl.querySelector('#width').value = width;
  editingEl.querySelector('#height').value = height;
  editingEl.querySelector('#mt').value = mt.replace('px' , '').trim();
  editingEl.querySelector('#mb').value = mb.replace('px' , '').trim();
  editingEl.querySelector('#ml').value = ml.replace('px' , '').trim();
  editingEl.querySelector('#mr').value = mr.replace('px' , '').trim();
  editingEl.querySelector('#pd_t').value = pt.replace('px' , '').trim();
  editingEl.querySelector('#pd_b').value = pb.replace('px' , '').trim();
  editingEl.querySelector('#pd_l').value = pl.replace('px' , '').trim();
  editingEl.querySelector('#pd_r').value = pr.replace('px' , '').trim();
  editingEl.querySelector('.link_input').value = src;
  editingEl.querySelector('#bstyle').value = await bstyle.trim();
  editingEl.querySelector('#bt').value = await  bt.replace('px' , '').trim();
  editingEl.querySelector('#bb').value = await   bb.replace('px' , '').trim();
  editingEl.querySelector('#bl').value = await    bl.replace('px' , '').trim();
  editingEl.querySelector('#br').value = await br.replace('px' , '').trim()
  editingEl.querySelector('#bcolor').value = await borderColor.trim();
  editingEl.querySelector('#btl').value = await btl.replace('px' , '').trim();
  editingEl.querySelector('#bbr').value = await bbr.replace('px' , '').trim();
  editingEl.querySelector('#bbl').value = await bbl.replace('px' , '').trim();
  editingEl.querySelector('#btr').value = await btr.replace('px' , '').trim() ;
  editingEl.querySelector('#color').value = await color.trim();
  editingEl.querySelector('#bg_color').value = await bg.trim() ;


}




export const getTextElementCss = async (id,clID) => {
  let txtDecoration,color,bg,pt,pl,pb,pr,mt,mr,ml,mb,height,width,fontSize,fw,wordSpace,txtAlign,bl,br,bt,bb,borderColor,bstyle ,btr ,btl, bbr,bbl ;

  let el = document.getElementById(id);
  let style = el.getAttribute('style');
  let styleArray = style.split(';')



styleArray.map(element => {



  if (element.includes('border-color')) {
    borderColor = element.replace('border-color:','') ;
    return
  } else if (element.includes('border-top-left-radius')) {
    btl = element.replace('border-top-left-radius:' ,'') ;
  
    return
  } else if (element.includes('border-top-right-radius')) {
    btr = element.replace('border-top-right-radius:' ,'') ;
  
    return
  } else if (element.includes('border-bottom-left-radius')) {
    bbl = element.replace('border-bottom-left-radius:' ,'') ;
  
    return
  } else if (element.includes('border-bottom-right-radius')) {
    bbr = element.replace('border-bottom-right-radius:' ,'') ;
  
    return
  } else if (element.includes('border-left-width')) {
    bl = element.replace('border-left-width:' ,'') ;
  
    return
  } else if (element.includes('border-top-width')) {
    bt = element.replace('border-top-width:' ,'') ;
  
    return
  } else if (element.includes('border-right-width')) {
   
   br = element.replace('border-right-width:' ,'') ;
  
    return
  } else if (element.includes('border-bottom-width')) {
    bb = element.replace('border-bottom-width:' ,'') ;
  
    return
  } else if (element.includes('color')) {

       color = element.replace('color:','') ; 
       return
    } else if (element.includes('background')) {

      bg = element.replace('background:', ''); return
    } else if (element.includes('margin-top')) {

      mt = element.replace('margin-top:', ''); return
    } else if (element.includes('margin-bottom')) {

      mb = element.replace('margin-bottom:', ''); return
    } else if (element.includes('margin-right')) {

      mr = element.replace('margin-right:', ''); return
    } else if (element.includes('margin-left')) {

      ml = element.replace('margin-left:', ''); return
    } else if (element.includes('padding-top')) {
      pt = element.replace('padding-top:', ''); return
    } else if (element.includes('padding-right')) {

     pr = element.replace('padding-right:', ''); return
    } else if (element.includes('padding-left')) {

      pl = element.replace('padding-left:', ''); return
    } else if (element.includes('padding-bottom')) {

      pb = element.replace('padding-bottom:', ''); return
    } else if (element.includes('height')) {

     height = element.replace('height:', ''); return
    } else if (element.includes('width')) {

      width = element.replace('width:', ''); return
  } else if (element.includes('text-align')) {

      txtAlign = element.replace('text-align:' ,'')
      return
  } else if (element.includes('font-weight')) {
      fw = element.replace('font-weight:' ,'');
      return
    } else if (element.includes('word-spacing')) {
  wordSpace = element.replace('word-spacing:' ,'');
      
       return
    } else if (element.includes('font-size')) {
  fontSize = element.replace('font-size:' ,'') ;
    
      return
     } else if (element.includes('border-style')) {

  bstyle  = element.replace('border-style:','') ;
    
      return
    } else if (element.includes('text-decoration')) {

      txtDecoration  = element.replace('text-decoration:','') ;
        
          return
        }


  })
  

  
 
 let sideBarLayout = document.querySelector('#sideBarLayout');
 let editingEl = sideBarLayout.querySelector('.' + clID);
 editingEl.querySelector('#content').value = el.innerText.trim() ;
 editingEl.querySelector('#bg_color').value = await bg.trim();
 editingEl.querySelector('#font_color').value = await color.trim();
 editingEl.querySelector('#mt').value = await mt.replace('px' , '').trim();
 editingEl.querySelector('#mb').value = await mb.replace('px' , '').trim(); 
 editingEl.querySelector('#ml').value = await ml.replace('px' , '').trim();
 editingEl.querySelector('#mr').value = await mr.replace('px' , '').trim();
 editingEl.querySelector('#pd_t').value = await pt.replace('px' , '').trim();
 editingEl.querySelector('#pd_b').value = await pb.replace('px' , '').trim() ;
 editingEl.querySelector('#width').value = await width
 editingEl.querySelector('#height').value = await height
 editingEl.querySelector('#font_size').value = await fontSize.replace('px' , '').trim();
 editingEl.querySelector('#word_spacine').value =await wordSpace.replace('px' ,'').trim();
 editingEl.querySelector('#fw').value =await fw.trim();
 editingEl.querySelector('#text_align').value = await txtAlign.trim();
 editingEl.querySelector('#pd_l').value = await pl.replace('px' , '').trim();
 editingEl.querySelector('#pd_r').value = await pr.replace('px' , '').trim();
 editingEl.querySelector('#bstyle').value = await bstyle.trim();
 editingEl.querySelector('#bt').value = await  bt.replace('px' , '').trim();
 editingEl.querySelector('#bb').value = await   bb.replace('px' , '').trim();
 editingEl.querySelector('#bl').value = await    bl.replace('px' , '').trim();
 editingEl.querySelector('#br').value = await br.replace('px' , '').trim()
 editingEl.querySelector('#bcolor').value = await borderColor.trim();
 editingEl.querySelector('#btl').value = await btl.replace('px' , '').trim();
 editingEl.querySelector('#bbr').value = await bbr.replace('px' , '').trim();
 editingEl.querySelector('#bbl').value = await bbl.replace('px' , '').trim();
 editingEl.querySelector('#btr').value = await btr.replace('px' , '').trim()
 editingEl.querySelector('#txtDecoration').value = await txtDecoration.trim()


}



/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah  */

export const getContainerCss = async (id) => {
  let color,bg,pt,pl,pb,pr,mt,mr,ml,mb,height,width,bl,br,bt,bb,borderColor,bstyle ,btr ,btl, bbr,bbl ,direction,position, jc, ai ;
  let el = document.getElementById(id);
  let style = el.getAttribute('style');
  let styleArray = style.split(';')
  styleArray.map(element => {
  
  if (element.includes('border-color')) {
    borderColor = element.replace('border-color:','') ;
    return
  } else if (element.includes('border-top-left-radius')) {
    btl = element.replace('border-top-left-radius:' ,'') ;
  
    return
  } else if (element.includes('border-top-right-radius')) {
    btr = element.replace('border-top-right-radius:' ,'') ;
  
    return
  } else if (element.includes('border-bottom-left-radius')) {
    bbl = element.replace('border-bottom-left-radius:' ,'') ;
  
    return
  } else if (element.includes('border-bottom-right-radius')) {
    bbr = element.replace('border-bottom-right-radius:' ,'') ;
  
    return
  } else if (element.includes('border-left-width')) {
    bl = element.replace('border-left-width:' ,'') ;
  
    return
  } else if (element.includes('border-top-width')) {
    bt = element.replace('border-top-width:' ,'') ;
  
    return
  } else if (element.includes('border-right-width')) {
   
   br = element.replace('border-right-width:' ,'') ;
  
    return
  } else if (element.includes('border-bottom-width')) {
    bb = element.replace('border-bottom-width:' ,'') ;
  
    return
  } else if (element.includes('color')) {

       color = element.replace('color:','') ; 
       return
    } else if (element.includes('background')) {

      bg = element.replace('background:', ''); return
    } else if (element.includes('margin-top')) {

      mt = element.replace('margin-top:', ''); return
    } else if (element.includes('margin-bottom')) {

      mb = element.replace('margin-bottom:', ''); return
    } else if (element.includes('margin-right')) {

      mr = element.replace('margin-right:', ''); return
    } else if (element.includes('margin-left')) {

      ml = element.replace('margin-left:', ''); return
    } else if (element.includes('padding-top')) {
      pt = element.replace('padding-top:', ''); return
    } else if (element.includes('padding-right')) {

     pr = element.replace('padding-right:', ''); return
    } else if (element.includes('padding-left')) {

      pl = element.replace('padding-left:', ''); return
    } else if (element.includes('padding-bottom')) {

      pb = element.replace('padding-bottom:', ''); return
    } else if (element.includes('height')) {

     height = element.replace('height:', ''); return
    } else if (element.includes('width')) {

      width = element.replace('width:', ''); return
    } else if (element.includes('border-style')) {

      bstyle  = element.replace('border-style:','') ;
        
          return
    }else if (element.includes('position')) {

      position = element.replace('position:','') ;
        
          return
    }else if (element.includes('flex-direction')) {

      direction  = element.replace('flex-direction:','') ;
            
              return
    } else if (element.includes('justify-content')) {

      jc  = element.replace('justify-content:','') ;
                
        return
    } else if (element.includes('align-items')) {
      ai  = element.replace('align-items:','') ;
         return
   }
  }) ;
  let sideBarLayout = document.querySelector('#sideBarLayout');
 let editingEl = sideBarLayout.querySelector('.editContainer');
 editingEl.querySelector('#bg_color').value = await bg.trim();
 editingEl.querySelector('#font_color').value = await color.trim();
 editingEl.querySelector('#width').value = await width
 editingEl.querySelector('#height').value = await height
 editingEl.querySelector('#mt').value = await mt.replace('px' , '').trim();
 editingEl.querySelector('#mb').value = await mb.replace('px' , '').trim(); 
 editingEl.querySelector('#ml').value = await ml.replace('px' , '').trim();
 editingEl.querySelector('#mr').value = await mr.replace('px' , '').trim();
 editingEl.querySelector('#pd_t').value = await pt.replace('px' , '').trim();
 editingEl.querySelector('#pd_b').value = await pb.replace('px' , '').trim() ;
 editingEl.querySelector('#pd_l').value = await pl.replace('px' , '').trim();
 editingEl.querySelector('#pd_r').value = await pr.replace('px' , '').trim();
 editingEl.querySelector('#bstyle').value = await bstyle.trim();
 editingEl.querySelector('#bt').value = await  bt.replace('px' , '').trim();
 editingEl.querySelector('#bb').value = await   bb.replace('px' , '').trim();
 editingEl.querySelector('#bl').value = await    bl.replace('px' , '').trim();
 editingEl.querySelector('#br').value = await br.replace('px' , '').trim()
 editingEl.querySelector('#bcolor').value = await borderColor.trim();
 editingEl.querySelector('#btl').value = await btl.replace('px' , '').trim();
 editingEl.querySelector('#bbr').value = await bbr.replace('px' , '').trim();
 editingEl.querySelector('#bbl').value = await bbl.replace('px' , '').trim();
 editingEl.querySelector('#btr').value = await btr.replace('px' , '').trim()

 editingEl.querySelector('#fxd').value = await direction.trim();
 editingEl.querySelector('#position').value = await position.trim();
 editingEl.querySelector('#jc').value = await jc.trim();
 editingEl.querySelector('#ai').value = await ai.trim();

 console.log(bt , bb, bl,br);

 

}



export async function getSectionCSS(id) {
  let  color,bg,pt,pl,pb,pr,mt,mr,ml,mb,height,width,bl,br,bt,bb,borderColor,bstyle ,btr ,btl, bbr,bbl ,direction,position, jc, ai ;
  let el = document.getElementById(id);
  let style = el.getAttribute('style');
  let styleArray = style.split(';')
  styleArray.map(element => {
  
  if (element.includes('border-color')) {
    borderColor = element.replace('border-color:','') ;
    return
  } else if (element.includes('border-top-left-radius')) {
    btl = element.replace('border-top-left-radius:' ,'') ;
  
    return
  } else if (element.includes('border-top-right-radius')) {
    btr = element.replace('border-top-right-radius:' ,'') ;
  
    return
  } else if (element.includes('border-bottom-left-radius')) {
    bbl = element.replace('border-bottom-left-radius:' ,'') ;
  
    return
  } else if (element.includes('border-bottom-right-radius')) {
    bbr = element.replace('border-bottom-right-radius:' ,'') ;
  
    return
  } else if (element.includes('border-left-width')) {
    bl = element.replace('border-left-width:' ,'') ;
  
    return
  } else if (element.includes('border-top-width')) {
    bt = element.replace('border-top-width:' ,'') ;
  
    return
  } else if (element.includes('border-right-width')) {
   
   br = element.replace('border-right-width:' ,'') ;
  
    return
  } else if (element.includes('border-bottom-width')) {
    bb = element.replace('border-bottom-width:' ,'') ;
  
    return
  } else if (element.includes('color')) {

       color = element.replace('color:','') ; 
       return
    } else if (element.includes('background')) {

      bg = element.replace('background:', ''); return
    } else if (element.includes('margin-top')) {

      mt = element.replace('margin-top:', ''); return
    } else if (element.includes('margin-bottom')) {

      mb = element.replace('margin-bottom:', ''); return
    } else if (element.includes('margin-right')) {

      mr = element.replace('margin-right:', ''); return
    } else if (element.includes('margin-left')) {

      ml = element.replace('margin-left:', ''); return
    } else if (element.includes('padding-top')) {
      pt = element.replace('padding-top:', ''); return
    } else if (element.includes('padding-right')) {

     pr = element.replace('padding-right:', ''); return
    } else if (element.includes('padding-left')) {

      pl = element.replace('padding-left:', ''); return
    } else if (element.includes('padding-bottom')) {

      pb = element.replace('padding-bottom:', ''); return
    } else if (element.includes('max-height')) {

     height = element.replace('max-height:', ''); return
    } else if (element.includes('width') === true && element.includes('border-width') === false) {

      width = element.replace('width:', ''); return
    } else if (element.includes('border-style')) {

      bstyle  = element.replace('border-style:','') ;
        
          return
    }else if (element.includes('position')) {

      position = element.replace('position:','') ;
        
          return
    }else if (element.includes('flex-direction')) {

      direction  = element.replace('flex-direction:','') ;
            
              return
    } else if (element.includes('justify-content')) {

      jc  = element.replace('justify-content:','') ;
                
        return
    } else if (element.includes('align-items')) {
      ai  = element.replace('align-items:','') ;
         return
   } 
  }) ;
  let sideBarLayout = document.querySelector('#sideBarLayout');
 let editingEl = sideBarLayout.querySelector('.edditSection');
 editingEl.querySelector('#bg_color').value = await bg.trim();
 editingEl.querySelector('#font_color').value = await color.trim();
 editingEl.querySelector('#width').value = await width.trim() ;
 editingEl.querySelector('#height').value = await height.trim() ;
 editingEl.querySelector('#mt').value = await mt.replace('px' , '').trim();
 editingEl.querySelector('#mb').value = await mb.replace('px' , '').trim(); 
 editingEl.querySelector('#ml').value = await ml.replace('px' , '').trim();
 editingEl.querySelector('#mr').value = await mr.replace('px' , '').trim();
 editingEl.querySelector('#pd_t').value = await pt.replace('px' , '').trim();
 editingEl.querySelector('#pd_b').value = await pb.replace('px' , '').trim() ;
 editingEl.querySelector('#pd_l').value = await pl.replace('px' , '').trim();
 editingEl.querySelector('#pd_r').value = await pr.replace('px' , '').trim();
 editingEl.querySelector('#bstyle').value = await bstyle.trim();
 editingEl.querySelector('#bt').value = await  bt.replace('px' , '').trim();
 editingEl.querySelector('#bb').value = await   bb.replace('px' , '').trim();
 editingEl.querySelector('#bl').value = await    bl.replace('px' , '').trim();
 editingEl.querySelector('#br').value = await br.replace('px' , '').trim()
 editingEl.querySelector('#bcolor').value = await borderColor.trim();
 editingEl.querySelector('#btl').value = await btl.replace('px' , '').trim();
 editingEl.querySelector('#bbr').value = await bbr.replace('px' , '').trim();
 editingEl.querySelector('#bbl').value = await bbl.replace('px' , '').trim();
 editingEl.querySelector('#btr').value = await btr.replace('px' , '').trim()
 editingEl.querySelector('#fxd').value = await direction.trim();
 editingEl.querySelector('#position').value = await position.trim();
 editingEl.querySelector('#jc').value = await jc.trim();
 editingEl.querySelector('#ai').value = await ai.trim();
 console.log(bt , bb, bl,br);
}





export const getHref = (id) => {
  let el = document.getElementById(id);
  let href = el.getAttribute('href');
  console.log(el ,href);
  let sideBarLayout = document.querySelector('#sideBarLayout');
  let editingEl = sideBarLayout.querySelector('.editAnchor');
  editingEl.querySelector('#href').value = href.trim() ;
}


export const getIconCss =async (id) => {
  let  color,bg,pt,pl,pb,pr,mt,mr,ml,mb,bl,br,bt,bb,borderColor,bstyle ,btr ,btl, bbr,bbl , size  ;

  let el = document.getElementById(id);
  let style = el.getAttribute('style');
  let styleArray = style.split(';')


  styleArray.map(element => {



    if (element.includes('border-color')) {
      borderColor = element.replace('border-color:','') ;
      return
    } else if (element.includes('border-top-left-radius')) {
      btl = element.replace('border-top-left-radius:' ,'') ;
    
      return
    } else if (element.includes('border-top-right-radius')) {
      btr = element.replace('border-top-right-radius:' ,'') ;
    
      return
    } else if (element.includes('border-bottom-left-radius')) {
      bbl = element.replace('border-bottom-left-radius:' ,'') ;
    
      return
    } else if (element.includes('border-bottom-right-radius')) {
      bbr = element.replace('border-bottom-right-radius:' ,'') ;
    
      return
    } else if (element.includes('border-left-width')) {
      bl = element.replace('border-left-width:' ,'') ;
    
      return
    } else if (element.includes('border-top-width')) {
      bt = element.replace('border-top-width:' ,'') ;
    
      return
    } else if (element.includes('border-right-width')) {
     
     br = element.replace('border-right-width:' ,'') ;
    
      return
    } else if (element.includes('border-bottom-width')) {
       bb = element.replace('border-bottom-width:' ,'') ;
    
      return
    } else if (element.includes('color') && !element.includes('border') ) {
  
         color = element.replace('color:','') ; 
         return
      } else if (element.includes('background')) {
  
        bg = element.replace('background:', ''); return
      } else if (element.includes('margin-top')) {
  
        mt = element.replace('margin-top:', ''); return
      } else if (element.includes('margin-bottom')) {
  
        mb = element.replace('margin-bottom:', ''); return
      } else if (element.includes('margin-right')) {
  
        mr = element.replace('margin-right:', ''); return
      } else if (element.includes('margin-left')) {
  
        ml = element.replace('margin-left:', ''); return
      } else if (element.includes('padding-top')) {
        pt = element.replace('padding-top:', ''); return
      } else if (element.includes('padding-right')) {
  
       pr = element.replace('padding-right:', ''); return
      } else if (element.includes('padding-left')) {
  
        pl = element.replace('padding-left:', ''); return
      } else if (element.includes('padding-bottom')) {
  
        pb = element.replace('padding-bottom:', ''); return
      }  else if (element.includes('border-style')) {
  
    bstyle  = element.replace('border-style:','') ;
      
        return
      }  else if (element.includes('font-size')) {
  
        size = element.replace('font-size:','') ;
          
            return
          } 
  
  
    }) ;

    let sideBarLayout = document.querySelector('#sideBarLayout');
    let editingEl = sideBarLayout.querySelector('.editIcon');

//design
  editingEl.querySelector('#bg_color').value = await bg.trim();
  editingEl.querySelector('#color').value = await color.trim();
  editingEl.querySelector('#size').value = await size.replace('px' , '').trim();
//margin
  editingEl.querySelector('#mt').value = await mt.replace('px' , '').trim();
  editingEl.querySelector('#mb').value = await mb.replace('px' , '').trim(); 
  editingEl.querySelector('#ml').value = await ml.replace('px' , '').trim();
  editingEl.querySelector('#mr').value = await mr.replace('px' , '').trim();
 //padding
 editingEl.querySelector('#pd_t').value = await pt.replace('px' , '').trim();
 editingEl.querySelector('#pd_b').value = await pb.replace('px' , '').trim() ;
 editingEl.querySelector('#pd_l').value = await pl.replace('px' , '').trim();
 editingEl.querySelector('#pd_r').value = await pr.replace('px' , '').trim();
 //border
 editingEl.querySelector('#bstyle').value = await bstyle.trim();
 editingEl.querySelector('#bt').value = await  bt.replace('px' , '').trim();
 editingEl.querySelector('#bb').value = await   bb.replace('px' , '').trim();
 editingEl.querySelector('#bl').value = await    bl.replace('px' , '').trim();
 editingEl.querySelector('#br').value = await br.replace('px' , '').trim()
 editingEl.querySelector('#bcolor').value = await borderColor.trim();
 //border radius
 editingEl.querySelector('#btl').value = await btl.replace('px' , '').trim();
 editingEl.querySelector('#bbr').value = await bbr.replace('px' , '').trim();
 editingEl.querySelector('#bbl').value = await bbl.replace('px' , '').trim();
 editingEl.querySelector('#btr').value = await btr.replace('px' , '').trim()


}

