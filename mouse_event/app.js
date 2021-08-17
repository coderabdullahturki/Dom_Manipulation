
// Mouse Events
// mouseover
// mousedown
// mouseup
// mouseenter
// mouseleave
const header = document.querySelector('#header');
const btn = document.querySelector('button');

// btn.addEventListener('mouseup', ()=>{
            
//    console.log(`Mouse Enter`);
//    return header.classList.add('clicked'); 
   
   
// });

// btn.addEventListener('mousedown', ()=>{
   
//    console.log(`Mouse Leave`);
//    return header.classList.remove('clicked'); 
   
   
// });


btn.addEventListener('mouseenter', ()=>{
            
            console.log(`Mouse Enter`);
            return header.classList.add('clicked'); 
            
            
         });

btn.addEventListener('mouseleave', ()=>{
            
            console.log(`Mouse Leave`);
            return header.classList.remove('clicked'); 
            
            
         });



