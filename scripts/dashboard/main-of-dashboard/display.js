const display=(usename_of_user) =>{

    const a = `
                    <div class="display-theme" id="display-dashboard">
                        <span class="display-title">Select background image for app</span>
                        <div id="display-bg1" onclick="select_bg(id ,'${usename_of_user}')" value="tick1">
                            <img src="images/bg-1.jpg" alt="" value="bg-1">
                            <span id="tick1">
                                <i class="fa fa-check" aria-hidden="true"></i>

                            </span>
                        </div>
                        <div id="display-bg2" onclick="select_bg(id ,'${usename_of_user}')" value="tick2">
                            <img src="images/bg-2.jpg" alt="" value="images/bg-2.jpg">
                            <span id="tick2">
                                <i class="fa fa-check" aria-hidden="true"></i>

                            </span>
                        </div>
                        <div id="display-bg3" onclick="select_bg(id ,'${usename_of_user}')" value="tick3">
                            <img src="images/bg-3.jpg" alt="" value="bg-3">
                            <span id="tick3">
                                <i class="fa fa-check" aria-hidden="true"></i>

                            </span>
                        </div>
                        <div id="display-bg4" onclick="select_bg(id ,'${usename_of_user}')" value="tick4">
                            <img src="images/bg-4.jpg" alt="" value="bg-4">
                            <span id="tick4">
                                <i class="fa fa-check" aria-hidden="true"></i>

                            </span>
                        </div>

                    </div>

    `
    return a
}