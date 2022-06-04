
const header = (id) =>{
    const a = `
            <div class="header">

                <ul class="header-list">
                    <li>
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                    </li>
                    <li>
                        <img src="images/header-logo-spirit.d947df93bc055849898e.gif" alt="">
                    </li>
                    <li>workspace</li>
                    <li>recent</li>
                    <li>starred</li>
                    <li>templates</li>
                    <li>create</li>
                    <li class="search-box">
                            
                        <div>
                            <i class="fa fa-search"></i>
                            <input type="search" placeholder="Search">
                        </div>
                    </li>
                    <li>
                        <span>
                            i
                        </span>


                    </li>
                    <li>
                        <i class='far fa-bell'></i>

                    </li>
                    <li>
                        <img src="images/tabiat.jpg" alt="">
                    </li>
                </ul>

            </div>
    `

    document.getElementById(id).innerHTML= a
}