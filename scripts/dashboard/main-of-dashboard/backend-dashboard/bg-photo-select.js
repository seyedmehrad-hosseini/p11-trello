const select_bg = (id ,usename_of_user)=>{

    const bg_list = document.getElementById("display-dashboard").getElementsByTagName("div")

    for (const iterator of bg_list) {

        const span= document.getElementById(iterator.id).getElementsByTagName("span")
        const img_addres= document.getElementById(iterator.id).getElementsByTagName("img")[0].attributes.src
        if(iterator.id == id){

            document.getElementById(span[0].id).style.opacity = "1";
            const user_index =  users.findIndex((item) => item.username === usename_of_user)//findes user index
            console.log(img_addres)
            users[user_index].backgroundimg_address = img_addres
            console.log(users)

        }
        else{

            document.getElementById(span[0].id).style.opacity = "0";

        }
        
    }

}