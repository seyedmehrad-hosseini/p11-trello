const cards = [{"username" : "ali",
                card : [
                    {"id" :'card1',
                    "value" : "to-do"
                        },
                    {"id" :'card2',
                    "value" : "doing"
                        },

                    ]
                },


            
            ]

var id_card = 0

const add_card = (usename_of_user) =>{

    id_card = id_card +1
    const newcard_value = document.getElementById("add-card-input").value


    if(newcard_value !== ''){

        const user_index =  cards.findIndex((item) => item.username === usename_of_user)//findes user index

        cards[user_index].card.push({"id" : `card${id_card}` , "value" : newcard_value})
    
        document.getElementById("card-list").innerHTML = card_list(usename_of_user)
    
    
    }


}