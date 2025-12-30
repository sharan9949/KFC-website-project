import { Component } from "react";
export default class Navbar extends Component{
    render(){
        return(
            <>
                <div id="kfc_set_location_container" className="set_location_data">
                    <img src="https://online.kfc.co.in/static/media/Search_Pin.e88a4d93.svg" alt="location img" />
                    <div className="set_location_data" style={{fontWeight:"50"}}>Allow location access for local store menu and promos</div>
                    <button className=" setLocation-button" data-testid="set-location-button">Set Location</button>
                </div>
                <hr id="horizontal_row" className="set_location_divider" />
                <div id="kfc_header_container">
                    <div id="kcf_logo_image_container">
                        <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="kfc_logo" width="90vw" height="30vw"/>
                    </div>
                    <div id="header_menu_container">
                        <a href="https://online.kfc.co.in/menu" className="menu_text_tools"style={{textDecoration:"none",color:"black"}}>Menu</a>
                        <a href=" https://online.kfc.co.in/offers" className="menu_text_tools" style={{textDecoration:"none",color:"black"}}>Deals</a>
                    </div>
                    <div id="signin_container">  
                        <a href="https://login.kfc.co.in/auth/realms/ki/protocol/openid-connect/auth?scope=openid+phone+profile+email&response_type=code&client_id=reg54y8ws34xvp9&redirect_uri=https://online.kfc.co.in/login&state=X9BEUW20azUzSWXSerYxSPx4VbAh-x7FoNcL60Vj3bk&code_challenge=5SlZb03EOvUlg4VjxgBkvPwocITB_LkKWgWSFlzcuXo&code_challenge_method=S256&platform=undefined&env=PROD&TermsConditions=undefined&MarketPreference=undefined&showVipBanner=true&market=in&gtmKey=GTM-5C886DC&lan=en-US&ui_locales=en" style={{textDecoration:"none"}}>
                            <button className="sign_in_button" style={{width:"9.5vw",height:"7.5vh"}}>
                            <i className="fa-solid fa-circle-user fa-fade" style={{fontSize:"2vw",color:"red"}}></i>
                            <h3 style={{fontSize:"1.55vw"}}>Sign in</h3></button>
                        </a>
                    </div>
                    <div id="kfc_chicken_bucket_img_container">
                        <a href="https://online.kfc.co.in/cart" style={{backgroundImage:"url(https://w7.pngwing.com/pngs/81/810/png-transparent-kfc-bucket-of-fried-chicken-kfc-crispy-fried-chicken-chicken-fingers-kentucky-fried-chicken-popcorn-chicken-vegetarian-cuisine-kfc-food-chicken-meat-cuisine-thumbnail.png)",backgroundSize:"100% 100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"100%", border: "none",outline:"none",borderRadius:"20px"}}><button ></button></a>
                    </div>

                </div>

            </>
        )
    }
}