let path = document.querySelector('path')
let pathlength = path.getTotalLength()
const title1 = document.querySelector('.t1') 
const title2 = document.querySelector('.t2') 
const paragraphe1 = document.querySelector('.para1') 
const paragraphe2 = document.querySelector('.para2') 

path.style.strokeDasharray = pathlength + ' ' + pathlength;

path.style.strokeDashoffset = pathlength;

window.addEventListener('scroll', () => {
    var scrollpercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var drawlength = pathlength * scrollpercentage;
    path.style.strokeDashoffset = pathlength - drawlength;
    if (path.style.strokeDashoffset < 1500){
        title1.style.display = "flex"
        setTimeout(function() {
            paragraphe1.style.display = "flex"
        }, 500);
    }else{
        paragraphe1.style.display = "none"
        title1.style.display = "none"
    }
    if (path.style.strokeDashoffset < 700){
        title2.style.display = "flex"
        setTimeout(function() {
            paragraphe2.style.display = "flex"
        }, 500);
    }else{
        paragraphe2.style.display = "none"
        title2.style.display = "none"
    }
})

