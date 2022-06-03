
const check_username = (array , new_value) =>{

    for (const value of array) 
    {

        if(value.username !== new_value)
        {

            var condition = true
            
        }
        else{
            var condition = false
            break
            }

    }
    return condition
}
const check_password = (array , new_value) =>{
    for (const value of array) 
    {

        if(value.password !== new_value)
        {

            var condition = true
            
        }
        else{
            var condition = false
            break
            }

    }
    return condition

}

