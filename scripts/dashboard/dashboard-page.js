const dashboard_page = (id) =>{
   
    const b = `
    <div class="theme-page" id="theme-page">
        <div class="theme-header" id="dashboard-header">
        </div>
        <div class="side-bar" id="side-bar">
        
        </div>
        <div class="main-of-theme" id="maintheme">
        
        </div>

    </div>
    `
    document.getElementById(id).innerHTML = b
    header("dashboard-header")
    sidbar_in_dashboard("side-bar")
    main_of_dashboard_load(info(),"list1",)


}