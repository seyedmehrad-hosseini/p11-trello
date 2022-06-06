
const add_info = (usename_of_user) =>{

    const user_index =  users.findIndex((item) => item.username === usename_of_user)//findes user index
    const name = document.getElementById("name-input").value
    const lastname = document.getElementById("lastname-input").value
    const email = document.getElementById("E-mail-input").value
    const phone = document.getElementById("Phone-input").value

    users[user_index].name = name
    users[user_index].lastname = lastname
    users[user_index].email = email
    users[user_index].phone = phone
    console.log(users)

}
