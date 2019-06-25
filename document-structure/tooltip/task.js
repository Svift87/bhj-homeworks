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
        for(let a = 0; tooltip.length > a; a++) {
            if (tooltip[i].style.display != 'block') {
                tooltip[a].style.display = 'none';
                tooltip[i].style.display = 'block';                
                tooltip[a].style.position = 'absolute';
                
            } else {
                tooltip[i].style.display = 'none';
            }   
        }     
    });
}

