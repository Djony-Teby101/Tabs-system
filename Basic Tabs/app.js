const tabs=document.querySelector('.tabs');
const buttons=document.querySelectorAll('.tabs-button');
const contents= document.querySelectorAll('.tabs-content');

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        const target=button.dataset.tabTarget;
        buttons.forEach((button)=>{
            button.classList.remove('active');
        });

        button.classList.add('active');
        contents.forEach((content)=>{
            content.classList.remove('active');
        });
        document.getElementById(target).classList.add('active')

    });
});