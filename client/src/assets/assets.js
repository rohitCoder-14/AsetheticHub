import logo from "./NewLogo.png";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import add_address_iamge from "./add_address_image.svg";
import main from "./main.jpg";
import main_sm from "./main_sm.jpg";
import bt from "./bt.jpg";
import bt_sm from "./bt_sm.jpg";
import bag from "./bag.png";
import T_shirt from "./clothes.png";
import caps from "./caps.png";
import glasses from "./glasses.png";
import pants from "./jeans.png";
import hoodie from "./hoodie.png";
import shoes from "./shoes.png";

export const assets = {
  main,
  main_sm,
  bt,
  bt_sm,
  logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  add_address_iamge,
  box_icon,
};

export const categories = [
  {
    text: "T-Shirts",
    path: "T-Shirts",
    image: T_shirt,
    bgColor: "#FEF6DA",
  },
  {
    text: "Pants",
    path: "Pants",
    image: pants,
    bgColor: "#FEE0E0",
  },
  {
    text: "Hoodies",
    path: "Hoodies",
    image: hoodie,
    bgColor: "#E1F5EC",
  },
  {
    text: "Sneakers",
    path: "Sneakers",
    image: shoes,
    bgColor: "#F0F5DE",
  },
  {
    text: "Bags",
    path: "Bags",
    image: bag,
    bgColor: "#FEE6CD",
  },
  {
    text: "Caps",
    path: "Caps",
    image: caps,
    bgColor: "#E0F6FE",
  },
  {
    text: "Sunglasses",
    path: "Sunglasses",
    image: glasses,
    bgColor: "#F1E3F9",
  },
];

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Fastest Delivery",
    description: "Atricles delivered in under 5 working days.",
  },
  {
    icon: leaf_icon,
    title: "Made by Silk",
    description: "Treanding product straight from the source.",
  },
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "Quality Collections at unbeatable prices.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];
