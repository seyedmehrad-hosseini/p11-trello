const app_page_load = (usename_of_user)=>{
    header("container")
    document.getElementById("container").innerHTML = header("container") + app_page(usename_of_user)
    document.getElementById("card-list").innerHTML = card_list(usename_of_user)
}