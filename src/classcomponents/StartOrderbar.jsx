import { Component } from "react";
export default class StartOrderbar extends Component{
    render(){
        return(
            <>
                <div id="start_order_container">
                    <h4 className="start_order_text_tools">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h4>
                    <button className="start_order_text_tools" id="start_order_button">Start Order</button>
                </div>
            </>
        )
    }
}