const changing_pass = (usename_of_user)=>{

    const user_index =  users.findIndex((item) => item.username === usename_of_user)//findes user index
    const last_pass = document.getElementById("last-pass-input").value
    const repeat_pass = document.getElementById("repeat-pass-input").value
    const new_pass = document.getElementById("new-pass-input").value

    if(users[user_index].password ==last_pass & users[user_index].password ==repeat_pass){

        users[user_index].password =new_pass
    }
}