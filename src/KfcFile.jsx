import { Component } from "react";
import Navbar from "./classcomponents/Navbar";
import StartOrderbar from "./classcomponents/StartOrderbar";
import BrowseMenuCategory from "./classcomponents/BrowseMenuCategory";
import SaveMoreContainer from "./classcomponents/SaveMoreContainer";
import Footer from "./classcomponents/Footer";
 export default class KfcFile extends Component{
    render(){
        return(
            <>
                <Navbar/>
                <StartOrderbar/>
                <BrowseMenuCategory/>
                {/* <Offers/> */}
                <SaveMoreContainer/>
                <Footer/>
            </>
        )
    }
}