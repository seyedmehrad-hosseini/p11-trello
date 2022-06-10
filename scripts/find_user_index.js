const find_user_index= (usename_of_user) =>{
    const user_index =  users.findIndex((item) => item.username === usename_of_user)//findes user index
    return user_index
}