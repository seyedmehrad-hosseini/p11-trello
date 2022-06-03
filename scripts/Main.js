const login_load = ()=>{

    const box_id = document.getElementById("welcome-login-box")
    const removed_welcom_tag = box_id.getElementsByTagName("div")[0]
    box_id.removeChild(removed_welcom_tag)

    login_page(box_id)

}
