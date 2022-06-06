const main_of_dashboard_load = (func =info(), list_id) =>{
    //get maintheme id and put argument id in that
    


    document.getElementById("maintheme").innerHTML = func

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