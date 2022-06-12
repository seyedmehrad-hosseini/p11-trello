const select_bg = (id ,usename_of_user)=>{

    const bg_list = document.getElementById("display-dashboard").getElementsByTagName("div")

    for (const iterator of bg_list) {

        const span= document.getElementById(iterator.id).getElementsByTagName("span")
        const img_addres= document.getElementById(iterator.id).getElementsByTagName("img")[0].getAttribute('src')
        if(iterator.id == id){

            document.getElementById(span[0].id).style.opacity = "1";
            const user_index =  users.findIndex((item) => item.username === usename_of_user)//findes user index
            console.log(img_addres)
            users[user_index].backgroundimg_address.addres = `file:///D:/tahlildadeproject/p11-trello/${img_addres}`
            users[user_index].backgroundimg_address.div_id = iterator.id
            console.log(users)

        }
        else{

            document.getElementById(span[0].id).style.opacity = "0";

        }
        
    }

}
const select_bg_when_load_page = (usename_of_user) =>{
    const bg_list = document.getElementById("display-dashboard").getElementsByTagName("div")
    const user_index = find_user_index(usename_of_user)

    for (const iterator of bg_list) {

        const span= document.getElementById(iterator.id).getElementsByTagName("span")

    if(iterator.id == users[user_index].backgroundimg_address.div_id){

            document.getElementById(span[0].id).style.opacity = "1";

        }
        else{

            document.getElementById(span[0].id).style.opacity = "0";

        }
        
    
        
    }

}