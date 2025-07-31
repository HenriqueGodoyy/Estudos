const paras = document.querySelectorAll('p')

paras.forEach(p => {
    if(p.textContent.includes('error')){
         p.classList.add('error')
    }
    if(p.innerText.includes('success')){
        p.classList.add('success')
    }
})

const title = document.querySelector('.title')
title.classList.toggle('test')// this we do for we change the class
title.classList.toggle('test')// and if we do this two times, it will remove the classe
