const dashboard_page = (id , usename_of_user) =>{
   
    const dashboard_body_html = `
    <div class="theme-page" id="theme-page">
        <div class="theme-header" id="dashboard-header">
        </div>
        <div class="side-bar" id="side-bar">
        
        </div>
        <div class="main-of-theme" id="maintheme">
        
        </div>

    </div>
    `

    document.getElementById(id).innerHTML = dashboard_body_html

    
    document.getElementById("dashboard-header").innerHTML=header(id , usename_of_user)

    sidbar_in_dashboard("side-bar",usename_of_user)
    main_of_dashboard_load(info(usename_of_user),"list1",)

}