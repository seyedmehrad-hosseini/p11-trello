const add_input_title = (input_div_id,input_id,last_task_value) =>{



document.getElementById(input_div_id).style.display ="block";
document.getElementById(input_id).value=last_task_value
document.getElementById("close-edit-box-task2" ).style.display ="block";



}
const save_title_edited=(usename_of_user, card_id , task_id , input_id,input_div_id) =>{
   
    const new_taskvalue = document.getElementById(input_id).value
    const task_index = find_taskid_in_cards(usename_of_user,card_id,task_id)
    cards[task_index[0]].card[task_index[1]].tasks[task_index[2]].value = new_taskvalue
    task_list_when_add_card(usename_of_user)
    document.getElementById(input_div_id).style.display ="none";
    document.getElementById("close-edit-box-task" ).style.display ="none";
    document.getElementById("close-edit-box-task2" ).style.display ="none";



console.log('aaaaaaaaaaa')


}
const consolelog=()=>{
    console.log('aaaaaaaaaaa')


}