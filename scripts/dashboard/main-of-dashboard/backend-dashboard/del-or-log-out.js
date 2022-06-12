const log_out = (usename_of_user) =>{

    const password = document.getElementById("manage-pass-input").value 
    const user_index =  users.findIndex((item) => item.username === usename_of_user)//findes user index
    if(password == users[user_index].password){
        join_page()
    }else{
        alert("password is incurrct")
    }

}
const del_acc = (usename_of_user) =>{

    const password = document.getElementById("manage-pass-input").value 
    const user_index =  users.findIndex((item) => item.username === usename_of_user)//findes user index
    if(password == users[user_index].password){
        users.splice(user_index , 1)
        join_page()
    }else{
        alert("password is incurrct")
    }

}