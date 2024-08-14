window.addEventListener("load", function(){
    const switchTheme = document.querySelector("#themeSwitch")
    switchTheme.addEventListener("click", function(e){
        document.documentElement.classList.toggle("dark")
        switchTheme.classList.toggle("btn-warning")
        switchTheme.classList.toggle("btn-danger")
    })
})