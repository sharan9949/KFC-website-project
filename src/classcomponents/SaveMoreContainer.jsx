import React, { Component } from "react";
import  {offerData}  from "../data.js";
export default class SaveMoreContainer extends Component{
    constructor(props){
        super(props);
      }
      state = {
      translateX: 0
    };

  handleRight = () => {
    this.setState(prev => ({
      translateX: prev.translateX - this.cardWidth
    }));
  };

  handleLeft = () => {
    this.setState(prev => ({
      translateX: prev.translateX + this.cardWidth
    }));
  };

  handleApplyOffer = (offer) => {
    alert(`Applied offer: ${offer.title}`);
  };
//     render(){
//         return(
//             <>
//                     <h2 style={{fontSize:"40px",letterSpacing:".01em",paddingLeft:"40px"}}>Save More as you order</h2>
//                     {/* <div className="offers-container" ref={this.containerRef}>
//                       <div className="offer-card">
//                             <div className="offer-img">
//                             <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=75.87"/>
//                             {/* <span class="offer-note">OFFER VALID ONLY ON 1<sup>st</sup> ORDER</span> */}
//                             </div>
//                             <div className="offer-content">
//                             <h3>FREE CLASSIC ZINGER</h3>
//                             <p>Min. Order Value 499</p>
//                             <a href="#">View Details</a>
//                             </div>
//                         </div> */}

//                         // <div className="offer-card">
//                         //     <div className="offer-img red">
//                         //      <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=75.87" alt="" />
//                         //     {/* <h2>2 PC HOT & CRISPY CHICKEN</h2> */}
//                         //     {/* <h1>@ ₹99/-</h1> */}
//                         //     {/* <span>ON 2<sup>nd</sup> AND 3<sup>rd</sup> ORDER</span> */}
//                         //     </div>
//                         //     <div className="offer-content">
//                         //     <h3>2 PC HOT & CRISPY CHICKEN @ RS 99</h3>
//                         //     <p>Min. Order Value 499</p>
//                         //     <a href="#">View Details</a>
//                         //     </div>
//                         // </div>

//                         // <div className="offer-card">
//                         //     <div className="offer-img red">
//                         //     <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg?ver=75.87" alt="" />
//                         //     {/* <h2>UPTO</h2>
//                         //     <h1>₹100/- OFF</h1>
//                         //     <span>Applicable on 4th order onwards</span> */}
//                         //     </div>
//                         //     <div className="offer-content">
//                         //     <h3>UPTO RS 100 OFF</h3>
//                         //     <p>Min. Order Value 699</p>
//                         //     <a href="#">View Details</a>
//                         //     </div>
//                         // </div>
//                         // <div className="offer-card">
//                         //     <div className="offer-img red">
//                         //     <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/PHP75.jpg?ver=75.87" />
//                         //     </div>
//                         //     <div className="offer-content">
//                         //     <h3>FREE DESSERT</h3>
//                         //     <p>Min. Order Value 399</p>
//                         //     <a href="#">View Details</a>
//                         //     </div>
//                         // </div>
//                         // </div>

//                         // <button className="nav-btn right" onClick={this.scrollRight}>
//                         // &#10095;
//                         // </button>
//                         // <button className="nav-btn left" onClick={this.scrollLeft}>
//                         //  &#10094;
//                         // </button>

                        
//                 </>

//         )
//     }
// }

render(){
  return(
    <>
      <h2 style={{fontSize:"30px",letterSpacing:".01em",paddingLeft:"40px"}}>Save More as you order</h2>
      <div className="offers-container">
        {offerData.map((offer) => (
          <div className="offer-card">
            <span>{offer.id}</span>
            <div className="offer-img red">
              <img src={offer.bannerImage} alt={offer.title} />
              {offer.badgeText && <span className="offer-note">{offer.badgeText}</span>}
            </div>
            <div className="offer-content">
              <h3 className="offer-title">{offer.title}</h3>
              <p>Min Order Value: {offer.minOrderValue}</p>
              <a href="#" className="offer-details">{offer.detailsLink}</a>
              <br />
              <button id="apply_offer_button">{offer.ctaText}</button>
              </div>
          </div>
        ))}
      </div>
      <button className="nav-btn right" onClick={this.handleRight}> &#10095; </button>
      <button className="nav-btn left" onClick={this.handleLeft}>&#10094;</button>

    </>
  )
}
}