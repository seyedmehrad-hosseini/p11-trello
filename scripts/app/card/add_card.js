const add_card = () =>{

    const newcard_value = document.getElementById("add-card-input").value
    const last_cardlist_html = document.getElementById("card-list").innerHTML
    console.log(card() +last_cardlist_html)
    if(newcard_value !== ''){

        document.getElementById("card-list").innerHTML = last_cardlist_html + card()
    }


}