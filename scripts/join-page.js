const join_page = () =>{
    const d = `
    <div class="join-login-box">
        <div class="logo-homepage">
            <img src="images/trello-logo-blue.svg" alt="">
        </div>
        <div class="welcome-login-box" id="welcome-login-box">
            <div class="welcome">

                <span class="title">Trello helps teams move work forward</span>
                <p>Click join to login or signin</p>
                <button id="join-button" class="join-button"  onclick="login_page()">join</button>

            </div>
            <div>
                
            </div>
            
        </div>
    </div>
    <div class="home-bg-left"><img src="images/backgrond-svg-left.png" alt=""></div>
    <div class="home-bg-right"><img src="images/backgrond-svg-right.png" alt=""></div> 

    
    `
    console.log(d)
    console.log(document.getElementById("container"))

    document.getElementById("container").innerHTML = d

}
console.log("aaa")
join_page()