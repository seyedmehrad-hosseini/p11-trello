    const users = [{"username" :"ali" , "password" : "123" ,}]

    const cards = [{"username" : "ali",
    card : [
        // {"id" :'card1-test',
        // "value" : "to-do",
        // tasks : [
        //             {"id" : 'task1',
        //             'value' : 'study'
        //             },
        //             {"id" : 'task2',
        //             'value' : 'srest'
        //             }
        //         ]
        //     },
        // {"id" :'card2-test',
        // "value" : "doing",
        // tasks : [
        //     {"id" : 'task1',
        //     'value' : 'study'
        //     },
        //     {"id" : 'task2',
        //     'value' : 'srest'
        //     }
        // ]
        //     },


        ]
    },



]



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
                    cards.push({"username" : username_box_value, card : []})
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
        app_page_load(username_box_value)

    }
    else{
        console.log("username or pass is incurrect")
    }

}
