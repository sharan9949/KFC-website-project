
 const offerData = [
  {
    // id: 1,
    bannerImage: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=75.87",
    // badgeText: "OFFER VALID ONLY ON 1ST ORDER",
    title: "FREE CLASSIC ZINGER",
    minOrderValue: 499,
    ctaText: "Apply Offer",
    detailsLink: "View Details"
  },
  {
    // id: 2,
    bannerImage: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=76.63",
    // badgeText: "ON 2ND AND 3RD ORDER",
    title: "2PC HOT&CRISPY-CHICKEN@ RS99",
    minOrderValue: 499,
    ctaText: "Apply Offer",
    detailsLink: "View Details"
  },
  {
    // id: 3,
    bannerImage: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg?ver=75.87",
    // badgeText: "APPLICABLE ON 4TH ORDER ONWARDS",
    title: "UPTO RS 100 OFF",
    minOrderValue: 699,
    ctaText: "Apply Offer",
    detailsLink: "View Details"
  },
  {
    // id: 4,
    bannerImage: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/PHP75.jpg?ver=75.87",
    // badgeText: "LIMITED PERIOD OFFER",
    title: "RS 75 OFF",
    minOrderValue: 399,
    ctaText: "Apply Offer",
    detailsLink: "View Details"
  },
  {
    // id: 5,
    bannerImage: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/VEGZINGER.jpg?ver=76.7",
    // badgeText: "LIMITED PERIOD OFFER",
    title: "FREE VEG ZINGER",
    minOrderValue: 499,
    ctaText: "Apply Offer",
    detailsLink: "View Details"
  },
  // {
  //   // id: 6,
  //   bannerImage: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/VEGZINGER.jpg?ver=76.7",
  //   // badgeText: "LIMITED PERIOD OFFER",
  //   title: "FREE VEG ZINGER",
  //   minOrderValue: 499,
  //   ctaText: "Apply Offer",
  //   detailsLink: "View Details"
  // }
]; 


const footerData = {
  brand: {
    // name: "KFC",
    logo: "https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg?h=120&w=120&fm=webp&fit=fill"
  },

  columns: [
    {
      heading: "Legal",
      links: [
        "Terms and Conditions",
        "Privacy Center",
        "Disclaimer",
        "Caution Notice"
      ]
    },
    {
      heading: "KFC India",
      links: [
        "About KFC",
        "KFC Care",
        "Careers",
        "Our Golden Past",
        "Responsible Disclosure"
      ]
    },
    {
      heading: "KFC Food",
      links: [
        "Menu",
        "Order Lookup",
        "Gift Card",
        "Nutrition & Allergen"
      ]
    },
    {
      heading: "Support",
      links: [
        "Get Help",
        "Contact Us",
        "KFC Feedback",
        "Privacy Center"
      ]
    }
  ],

  extras: {
    findStore: {
      text: "Find a KFC",
      icon: "fa-solid fa-location-dot fa-fade"
    },
    appLinks: [
      {
        name: "Google Play",
        icon: "https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg?h=90&w=266&fm=webp&fit=fill",
        url: "https://play.google.com/store/apps/details?id=com.yum.kfc"
      },
      {
        name: "App Store",
        icon: "https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg?h=90&w=266&fm=webp&fit=fill",
        url: "https://apps.apple.com/in/app/kfc-india-food-delivery/id1442552566"
      }
    ]
  },

  socialLinks: [
    { name: "Instagram", icon: "fa-brands fa-instagram fa-fade", url: "https://www.instagram.com/kfcindia_official/" },
    { name: "Facebook", icon: "fa-brands fa-facebook fa-fade", url: "https://www.facebook.com/KFCIndia" },
    { name: "Twitter", icon: "fa-brands fa-twitter fa-fade", url: "https://x.com/KFC_India" }
  ],

  copyright:
    "Copyright © KFC Corporation 2025 All rights reserved build pwa-2504-0-9_53cdc423"
}; 
export{offerData,footerData} 