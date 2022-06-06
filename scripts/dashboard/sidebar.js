const sidbar_in_dashboard = (id ,usename_of_user)=>{

    const sidbar = `
    
        <span class="account">
            Account Preferences
        </span>
        <ul class="account-list" id="account-list">
            <li id="list1"  onclick="main_of_dashboard_load(info('${usename_of_user}') , id)">Profile Information</li>
            <li id="list2"  onclick="main_of_dashboard_load(display('${usename_of_user}') , id)">Display</li>
            <li id="list3"  onclick="main_of_dashboard_load(changepass('${usename_of_user}') , id)">Change Password</li>
            <li id="list4"  onclick="main_of_dashboard_load(manage_acc('${usename_of_user}') , id)">Account Management</li>
        </ul>
    

    `
    document.getElementById(id).innerHTML= sidbar

}