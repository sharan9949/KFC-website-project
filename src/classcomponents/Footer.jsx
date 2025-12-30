import { Component } from "react";
import{footerData,offerData} from "../data.js";
export default class Footer extends Component{
    render(){
        return(
            <>
                {/* <div id="kfc_footer_container">
                    <div id="kfc_logo_container" className="logo_img">
                        <a href="#"  className="logo_img">
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg?h=120&w=120&fm=webp&fit=fill" alt="kfc_logo" className="logo_img" />
                        </a>
                    </div>
                    <div id="footer_company_details">
                        <div id="legal_details" className="footer_text_tools_container" >
                            <span className="legal_heading" >legal</span>
                            <ul className="footer_text_tools_list"  id="footer_text_tools_list_legal">
                                <li className="footer_list_text_tools"><a href=" https://online.kfc.co.in/terms-and-conditions" target="main" className="kfc_span_text_toos">Terms and Conditions</a><br /></li>
                                <li className="footer_list_text_tools"><a href="https://privacy.kfc.co.in/policies" target="main"  className="kfc_span_text_toos">Privacy Center</a><br /></li>
                                <li className="footer_list_text_tools"> <a href="https://online.kfc.co.in/about-kfc/disclaimer" target="main"  className="kfc_span_text_toos">Disclaimer</a><br /></li>
                                <li className="footer_list_text_tools"><a href="https://online.kfc.co.in/about-kfc/caution-notice" target="main"  className="kfc_span_text_toos">Caution Notice</a><br /></li>
                            </ul>
                        </div>
                        <div id="kfc_india_details" className="footer_text_tools_container" >
                            <span className="legal_heading">KFC India</span>
                            <ul className="footer_text_tools_list"  id="footer_text_tools_list_kfcIindia">
                                <li className="footer_list_text_tools"><a href="https://online.kfc.co.in/about-kfc " target="main" className="kfc_span_text_toos">About KFC</a><br /></li>
                                <li className="footer_list_text_tools"><a href="https://online.kfc.co.in/about-kfc/kfc-care" target="main"  className="kfc_span_text_toos">KFC Care</a><br /></li>
                                <li className="footer_list_text_tools"> <a href="https://online.kfc.co.in/about-kfc/careers" target="main"  className="kfc_span_text_toos">Careers</a><br /></li>
                                <li className="footer_list_text_tools"><a href="https://online.kfc.co.in/about-kfc/our-golden-past" target="main"  className="kfc_span_text_toos">Our Golden Past</a><br /></li>
                                <li className="footer_list_text_tools"><a href="https://bugcrowd.com/a19f4258-c79b-4a4f-a8bc-d924f85d5c53/external/report" target="main"  className="kfc_span_text_toos">Responsible</a><br /></li>
                                <li className="footer_list_text_tools"><a href="https://bugcrowd.com/a19f4258-c79b-4a4f-a8bc-d924f85d5c53/external/report" target="main"  className="kfc_span_text_toos">Disclosure</a><br /></li>
                            </ul>
                        </div>
                        <div id="kfc_food_details" className="footer_text_tools_container" >
                            <span className="legal_heading">KFC Food</span>
                            <ul className="footer_text_tools_list"  id="footer_text_tools_list_kfcfood">
                                <li className="footer_list_text_tools"><a href="https://online.kfc.co.in/menu " target="main" className="kfc_span_text_toos">Menu</a><br /></li>
                                <li className="footer_list_text_tools"><a href="#" target="main"  className="kfc_span_text_toos">Order Lookup</a><br /></li>
                                <li className="footer_list_text_tools"> <a href="https://online.kfc.co.in/giftcards" target="main"  className="kfc_span_text_toos">Gift Card</a><br /></li>
                                <li className="footer_list_text_tools"><a href="https://online.kfc.co.in/about-kfc/nutrition" target="main"  className="kfc_span_text_toos">Nutrition & Allergen</a><br /></li>
                            </ul>
                        </div>
                        <div id="support_details" className="footer_text_tools_container" >
                            <span className="legal_heading">Support</span>
                            <ul className="footer_text_tools_list"  id="footer_text_tools_list_kfcfood">
                                <li className="footer_list_text_tools"><a href="https://online.kfc.co.in/help " target="main" className="kfc_span_text_toos">Get Help</a><br /></li>
                                <li className="footer_list_text_tools"><a href="https://online.kfc.co.in/contactus" target="main"  className="kfc_span_text_toos">Contact Us</a><br /></li>
                                <li className="footer_list_text_tools"> <a href="https://feedback.kfcindia.co.in/" target="main"  className="kfc_span_text_toos">KFC Feedback</a><br /></li>
                                <li className="footer_list_text_tools"><a href="https://privacy.kfc.co.in/policies" target="main"  className="kfc_span_text_toos">Privacy Center</a><br /></li>
                            </ul>
                        </div>
                    </div>
                    <div id=" footer_location_contanier" className="footer_location_tools">
                        <a href="https://restaurants.kfc.co.in/" className="footer_text_tools">
                                <i className="fa-solid fa-location-dot fa-fade" style={{color:"red"}}></i>
                                Find A KFC
                        </a>
                    </div>
                    <div id="links_contanier" className="links_contanier">
                        <button className="links_contanier buttons_contanier" >
                            <a href="https://play.google.com/store/apps/details?id=com.yum.kfc">
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg?h=90&w=266&fm=webp&fit=fill" alt="" style={{width:"10vw"}}/></a>
                        </button>
                        <button className="links_contanier buttons_contanier" >
                            <a href="https://apps.apple.com/in/app/kfc-india-online-ordering-app/id915824379">
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg?h=90&w=266&fm=webp&fit=fill" alt="" style={{width:"10vw"}}/></a>
                        </button>
                    </div> 
                </div>
                <div id="copy_right_contanier_links" className="copy_right_span">
                            Copyright © KFC Corporation 2025 All rights reserved build pwa-2504-0-9_53cdc423
                            <a href="https://www.facebook.com/KFCIndia"><i className="fa-brands fa-instagram fa-fade"></i></a>
                            <a href="https://www.instagram.com/kfcindia_official/"><i className="fa-brands fa-facebook fa-fade"></i></a>
                            <a href="https://x.com/KFC_India"><i className="fa-brands fa-twitter fa-fade"></i></a>

                    </div> */}

                    <div id="kfc_footer_container">
                        <div id="kfc_logo_container" className="logo_img">
                            <a href="#" className="logo_img">
                                <img src={footerData.brand.logo} alt="brand_logo" className="logo_img" />
                            </a>
                        </div>
                        <div id="footer_company_details">
                        {footerData.columns.map((column) => (
                            <div className="footer_text_tools_container" >
                                <span className="legal_heading" >{column.heading}</span>
                                <a href="">
                                    <ul className="footer_text_tools_list" >
                                        {column.links.map(link=>(
                                            <li className="footer_list_text_tools ">
                                                <a href="#" target="main" className="kfc_span_text_toos">{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div id=" footer_location_contanier" className="footer_location_tools">
                           <a href="https://restaurants.kfc.co.in/" className="footer_text_tools">
                           {footerData.extras.findStore.text}
                           <i className={footerData.extras.findStore.icon} style={{color:"red"}}></i>
                           </a>

                        </div>
                    </div>
                    <div id="links_contanier" className="links_contanier">
                        {footerData.extras.appLinks.map(appLink =>(
                            <>
                                <button className="links_contanier buttons_contanier" >
                                    <a href={appLink.url}>
                                        <img src={appLink.icon} alt={appLink.name} style={{width:"10vw"}}/>

                                    </a>
                                </button>
                            </>
                        ))}
                            
                    </div>
                 </div>
                            <div id="copy_right_contanier_links" className="copy_right_span">
                                {footerData.socialLinks.map(sociallink =>(
                                    <a href={sociallink.url}>
                                        <i className={sociallink.icon}></i>
                                    </a>
                                ))}
                                <br />
                                <p>{footerData.copyright}</p>
                            </div>
                    

            </>
        )
    }
}