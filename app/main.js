//// navbar 
const activePage = window.location.pathname;
const pageTitle = document.querySelector("title");
const navLinks = document.querySelectorAll(".navbar .links span a").
forEach(link => {
    if (link.href.includes(`${activePage}`)){
        link.classList.add("active");
        if (link.textContent == "about"){
            pageTitle.textContent = "Luminia | " + link.textContent.charAt(0).toUpperCase() + link.textContent.slice(1) + " us";
        }else{
            pageTitle.textContent = "Luminia | " + link.textContent.charAt(0).toUpperCase() + link.textContent.slice(1);
        };
    }
});

//// => Add scroll indicateur to the body:
const header = document.querySelector('header');
const scrollIndicateur = document.createElement("div");
const scrollIdx = document.createElement("div");

scrollIndicateur.classList.add("scrollIndicateur");
scrollIdx.classList.add("thumb");
scrollIdx.setAttribute("scrollIdx", '');
scrollIndicateur.appendChild(scrollIdx);
header.hasChildNodes() ? header.appendChild(scrollIndicateur) : null;
document.addEventListener('scroll', () =>{
    console.log(scrollIdx.style.width = `${(document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100}%`);
}); 
