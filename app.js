const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()

const navToggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")

navToggle.addEventListener("click", function () {
    // linksContainer.classList.toggle("show-links")
    const linksContainerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    if (linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;

    } else {
        linksContainer.style.height = 0
    }
});
const navBar = document.getElementById("nav");
const topLink =document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset
    const navHeight = navBar.getBoundingClientRect().height
    if (scrollHeight > navHeight) {
        navBar.classList.add('fixed-nav')
    } else {
        navBar.classList.remove('fixed-nav')
    }
    if(scrollHeight>500){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link')
    }
})
const scrollLink=document.querySelectorAll(".scroll-link")
scrollLink.forEach(function(links){
    links.addEventListener("click",function(e){
        e.preventDefault()
        const id= e.currentTarget.getAttribute('href').slice(1)
        const element=document.getElementById(id)
        const navHeight=navBar.getBoundingClientRect().height
        const linksContainerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav=navBar.classList.contains('fixed-nav')

        let position=element.offsetTop -navHeight
    if(!fixedNav){
        position=position-navHeight
    }
    if(navHeight>82){
        position=position+linksContainerHeight
    }    
 window.scrollTo({
            left:0,
            top:position
        })
        linksContainer.style.height =0
    })
})