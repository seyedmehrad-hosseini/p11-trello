const info=(usename_of_user) =>{

    const user_index =find_user_index(usename_of_user)
    const a = `
                        <div class="information">
                            <span class="info-title">Enter your identification information</span>

                            <div class="name-input" >
                                <span>Name:</span>
                                <input type="text" id="name-input" placeholder="Name" value="${users[user_index].name}">
                            </div>
                            <div class="lastname-input" >
                                <span>Lastname:</span>
                                <input type="text" id="lastname-input" placeholder="Last Name" value="${users[user_index].lastname}">
                            </div>
                            <div class="lastname-input" >
                                <span>E-mail:</span>
                                <input type="text" id="E-mail-input" placeholder="E-mail" value="${users[user_index].email}">
                            </div>
                            <div class="lastname-input" >
                                <span>Phone:</span>
                                <input type="text" id="Phone-input" placeholder="Phone" value="${users[user_index].phone}">
                            </div>
                            <div class="account-profile-photo">
                                <span>select your profile photo:</span>
                                <input type="file" id="profile_pic" name="profile_pic"
                                accept=".jpg, .jpeg, .png">
                            </div>
                            <div class="info-button">
                                <button onclick="add_info('${usename_of_user}')" class="join-button" id="user-info-dashboard">Add</button>

                            </div>
                        </div>
    `

    return a

}