const info=() =>{

    const a = `
                        <div class="information">
                            <span class="info-title">Enter your identification information</span>

                            <div class="name-input" >
                                <span>Name:</span>
                                <input type="text" id="name-input" placeholder="Name">
                            </div>
                            <div class="lastname-input" >
                                <span>Lastname:</span>
                                <input type="text" id="name-input" placeholder="Last Name">
                            </div>
                            <div class="lastname-input" >
                                <span>E-mail:</span>
                                <input type="text" id="E-mail-input" placeholder="E-mail">
                            </div>
                            <div class="lastname-input" >
                                <span>Phone:</span>
                                <input type="text" id="Phone-input" placeholder="Phone">
                            </div>
                            <div class="account-profile-photo">
                                <span>select your profile photo:</span>
                                <input type="file" id="profile_pic" name="profile_pic"
                                accept=".jpg, .jpeg, .png">
                            </div>
                            <div class="info-button">
                                <button class="join-button">ADD</button>

                            </div>
                        </div>
    `
    
    return a
}