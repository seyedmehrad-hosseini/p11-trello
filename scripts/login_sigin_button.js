    const users = [{"username" :"ali" , "password" : "123"}]


    const sign_in = () =>{
    
    const username_box_value = document.getElementById("username-login").value
    const password_box_value = document.getElementById("password-login").value

    
    
    if(username_box_value !== '' & password_box_value  !=='')
    {
        if(users =='' ){

            users.push({"username" : username_box_value, "password" : password_box_value})
            dashboard_page('container',username_box_value)
        }
        else{

                if(check_username(users , username_box_value))
                {
    
                    users.push({"username" : username_box_value, "password" : password_box_value})
                    dashboard_page('container' , username_box_value)
                }
                else{
    
                    console.log("this username used") 
                        
                    }
            }

    }
    else{

        console.log("the box is empty ")

    }



}

const ckeck_is_logedin = () =>{

    const username_box_value = document.getElementById("username-login").value
    const password_box_value = document.getElementById("password-login").value

    if(!check_username(users , username_box_value) & !check_password(users , password_box_value)){

        console.log("yes succesfully")
    }
    else{
        console.log("username or pass is incurrect")
    }

}
