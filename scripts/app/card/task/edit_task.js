const show_edit_box = (edit_box_id) => {

    document.getElementById(edit_box_id).classList.add("edit-box-card");
    document.getElementById("close-edit-box-task" ).style.display ="block";


}
const hiden_edit_box = () => {



    document.querySelector(".edit-box-card").classList.remove("edit-box-card");
    document.getElementById("close-edit-box-task" ).style.display ="none";
    document.querySelector(".input-class-edit-task").style.display ="none" ;
    console.log(document.querySelector(".input-class-edit-task"))




}

// const a = `
// <div id="edit-box-${iterator.id}" class="edit-box-none">
                
// <i class="fa fa-pencil edit-icon">
//     <span>Edit Card</span>
// </i>



// <i class="fa fa-close" onclick="del_card('${usename_of_user}','${iterator.id}')">
//     <span>Delete Card</span>
// </i>


// </div>
// `