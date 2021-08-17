
const header = document.querySelector('#header');
const btn = document.querySelector('button');



btn.addEventListener('click', ()=>{
    
             if(header.classList.contains('clicked')) {
                return header.classList.remove('clicked');
             }
             return header.classList.add('clicked');
            
         });



