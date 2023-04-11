 

let elems = document.querySelectorAll('nav ul li:nth-child(1)')

for (let i = 0; i<elems.length; i++) {
    elems[i].addEventListener('click', (() => {
        elems[i].parentElement.parentElement.classList.toggle('out')
    }))
}



document.getElementById("year").innerHTML = new Date().getFullYear()
document.getElementById("lastMod").innerHTML = "Last Modified: "+document.lastModified

































