const main_page_theme = (id) =>{
   
    const b = `
    <div class="theme-page" id="theme-page">
        <div class="theme-header" id="theme-header">
        </div>
        <div class="side-bar" id="side-bar">
        
        </div>
        <div class="main" id="maintheme">
        
        </div>

    </div>
    `
    document.getElementById(id).innerHTML = b
    header("theme-header")
    sidbar("side-bar")
    main_theme_load(info(),"list1",)


}