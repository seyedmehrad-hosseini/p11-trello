const main_of_dashboard_load = (func , list_id , usename_of_user) =>{
    //get maintheme id and put argument id in that
    

 
    document.getElementById("maintheme").innerHTML = func
    if(func == display(usename_of_user)){
        select_bg_when_load_page(usename_of_user)
    }
    
    //this code changes the background color in the sidebar list items with click event
    const account_list = document.getElementById("account-list").getElementsByTagName("li")
    for (const iterator of account_list) {
        if(iterator.id === list_id){
            document.getElementById(list_id).style.backgroundColor = "#E4F0F6";

        }else{
            document.getElementById(iterator.id).style.backgroundColor = "transparent";
        }

    }


}