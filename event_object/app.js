const btn = document.querySelector('.btn');
const link = document.querySelector('#link');


btn.addEventListener('click', (event)=>{
    
      event.currentTarget.textContent = "Scroll to Download";
    

      if(event.currentTarget.classList.contains('clicked')) {
         return event.currentTarget.classList.remove('clicked');
      }
         return event.currentTarget.classList.add('clicked');

    });


const preventFunc = (e) => {
   e.preventDefault();
}
link.addEventListener('click', preventFunc);

