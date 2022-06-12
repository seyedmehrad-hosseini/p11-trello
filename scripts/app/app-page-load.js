const app_page_load = (usename_of_user)=>{
    // header("container",usename_of_user)
    const user_index = find_user_index(usename_of_user)
    if(users[user_index].backgroundimg_address.addres !== ''){

        document.getElementById("container").innerHTML = header("container",usename_of_user) + app_page(usename_of_user)

        document.getElementById("card-list").innerHTML = card_list(usename_of_user)
    
        task_list_when_add_card(usename_of_user)
    }
    else{
        alert("select background img")
    }

}