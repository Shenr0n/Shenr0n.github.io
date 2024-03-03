// Open project links
function openProject(projectUrl) {
    window.open(projectUrl, '_blank');
}

// Text color change for my-profession
var typed = new Typed(".typing", {
    strings:["Software Engineer", "Backend Engineer","Software Engineer", "Backend Engineer"],
    typeSpeed:80,
    backDelay:800,
    backSpeed:40,
    loop:true
});

// Aside hide
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    for(let i=0; i<totalNavList; i++){
        //console.log(navList[i])
        const a = navList[i].querySelector("a");
        //console.log(a)
        a.addEventListener("click", function(){

            for(let j=0; j<totalNavList; j++){
                navList[j].querySelector("a").classList.remove("active");
            }
            //console.log(this)
            this.classList.add("active")
        })
    }

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () =>{
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
    }