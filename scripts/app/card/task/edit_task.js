const show_edit_box = (edit_box_id) => {

    document.getElementById(edit_box_id).classList.toggle("edit-box-card");

}

const a = `
<div id="edit-box-${iterator.id}" class="edit-box-none">
                
<i class="fa fa-pencil edit-icon">
    <span>Edit Card</span>
</i>



<i class="fa fa-close" onclick="del_card('${usename_of_user}','${iterator.id}')">
    <span>Delete Card</span>
</i>


</div>
`