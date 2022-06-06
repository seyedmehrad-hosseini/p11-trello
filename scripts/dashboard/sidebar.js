const sidbar_in_dashboard = (id)=>{

    const sidbar = `
    
        <span class="account">
            Account Preferences
        </span>
        <ul class="account-list" id="account-list">
            <li id="list1"  onclick="main_of_dashboard_load(info() , id)">Profile Information</li>
            <li id="list2"  onclick="main_of_dashboard_load(display() , id)">Display</li>
            <li id="list3"  onclick="main_of_dashboard_load(changepass() , id)">Change Password</li>
            <li id="list4"  onclick="main_of_dashboard_load(manage_acc() , id)">Account Management</li>
        </ul>
    

    `
    document.getElementById(id).innerHTML= sidbar

}