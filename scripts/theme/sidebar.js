const sidbar = (id)=>{

    const sidbar = `
    
        <span class="account">
            Account Preferences
        </span>
        <ul class="account-list" id="account-list">
            <li id="list1" data-id2="list2" onclick="main_theme_load(info() , id)">Profile Information</li>
            <li id="list2" data-id2="list1" onclick="main_theme_load(display() , id)">Display</li>
            <li id="list3" data-id2="list2" onclick="main_theme_load(changepass() , id)">Change Password</li>
            <li id="list4" data-id2="list3" onclick="main_theme_load(manage_acc() , id)">Account Management</li>
        </ul>
    

    `
    document.getElementById(id).innerHTML= sidbar

}