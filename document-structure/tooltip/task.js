let hasTooltip = document.querySelectorAll('.has-tooltip');

for (let i = 0; hasTooltip.length>i; i++) {
    hasTooltip[i].insertAdjacentHTML('beforeEnd', `
        <div class="tooltip">
            ${hasTooltip[i].title}
        </div>
    `);
    

    hasTooltip[i].addEventListener('click', function(){
        event.preventDefault();   
        let tooltip = document.querySelectorAll('.tooltip');       
        tooltip[i].style.top = hasTooltip[i].offsetTop + 20 + 'px';
        tooltip[i].style.left = hasTooltip[i].offsetLeft + 'px'; 
        tooltip[i].style.position = 'absolute'; 
        
        for(let a = 0; tooltip.length > a; a++) {            
            if (tooltip[i].style.display == 'block') {  
                tooltip[i].style.display = 'none';                  
                
            } else {
                tooltip[a].style.display = 'none';              
                tooltip[i].style.display = 'block';  
            }   
        }     
    });
}

