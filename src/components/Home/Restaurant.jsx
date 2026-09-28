import React, { useEffect, useMemo, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import "./Restaurant.css";

import restaurantbg from "../../assets/restaurantbg.png";
import chefbgremove from "../../assets/chefbgremove.png";
import vegpaneernoodles from "../../assets/vegpaneernoodles.png";
import vegpaneerhakkanoodles from "../../assets/vegpaneerhakkanoodles.png";
import vegpaneerschezwannoodles from "../../assets/vegpaneerschezwannoodles.png";
import vegpaneerschezwanfriedrice from "../../assets/vegpaneerschezwanfriedrice.png";
import vegpaneermushroomfriedrice from "../../assets/vegpaneermushroomfriedrice.png";
import springrollvegpaneer from "../../assets/springrollvegpaneer.png";
import americancorncrispy from "../../assets/americancorncrispy.png";
import vegcrispy from "../../assets/vegcrispy.png";
import chillipaneer from "../../assets/chillipaneer.png";
import vegmanchurian from "../../assets/vegmanchurian.png";
import veglollipop from "../../assets/veglollipop.png";
import paneer65 from "../../assets/paneer65.png";
import mushroomchilli from "../../assets/mushroomchilli.png";
import harabharakabab from "../../assets/harabharakabab.png";
import burasikebab from "../../assets/burasikebab.png";
import paneermalaitikka from "../../assets/paneermalaitikka.png";
import paneertikka from "../../assets/paneertikka.png";
import PaneerGarlicTikka from "../../assets/PaneerGarlicTikka.png";
import PaneerJahangiriTikka from "../../assets/PaneerJahangiriTikka.png";
import PaneerAmritsariTikka from "../../assets/PaneerAmritsariTikka.png";
import PaneerLahoriTikka from "../../assets/PaneerLahoriTikka.png";
import PaneerGilafiKebab from "../../assets/PaneerGilafiKebab.png";
import PaneerSufiyanaTikka from "../../assets/PaneerSufiyanaTikka.png";
import PaneerBhattiKaTikka from "../../assets/PaneerBhattiKaTikka.png";

/* =========================================================
   INTERNET FOOD IMAGE HELPER
   ---------------------------------------------------------
   Each menu item gets a different internet image based on
   the food keywords.

   The lock value keeps each item's image consistent instead
   of changing every time the component renders.
========================================================= */

const foodImage = (keywords, lock) =>
  `https://loremflickr.com/700/700/${keywords}?lock=${lock}`;

/* =========================================================
   RESTAURANT MENU DATA
========================================================= */

const restaurantMenu = [
  /* =======================================================
     BEVERAGES
  ======================================================= */

  {
    id: "beverage-001",
    name: "Packaged Drinking Water Bottle",
    category: "Beverages",
    type: "beverages",
    price: "₹30",
    keywords: "bottled,water,restaurant",
    image: foodImage("bottled,water,restaurant", 101),
    description:
      "1 litre packaged drinking water bottle with service. In-house RO treated water is recommended.",
  },

  {
    id: "beverage-002",
    name: "Tea / Coffee",
    category: "Beverages",
    type: "beverages",
    price: "₹45",
    keywords: "tea,coffee,cup,restaurant",
    image: foodImage("tea,coffee,cup,restaurant", 102),
    description: "Freshly prepared hot tea or coffee served warm.",
  },

  {
    id: "beverage-003",
    name: "Buttermilk",
    category: "Beverages",
    type: "beverages",
    price: "₹80",
    keywords: "buttermilk,chaas,indian,drink",
    image: foodImage("buttermilk,chaas,indian,drink", 103),
    description: "Refreshing buttermilk available in sweet, salted or plain.",
  },

  {
    id: "beverage-004",
    name: "Lassi",
    category: "Beverages",
    type: "beverages",
    price: "₹100",
    keywords: "lassi,indian,yogurt,drink",
    image: foodImage("lassi,indian,yogurt,drink", 104),
    description:
      "Traditional chilled lassi available in sweet, salted or plain.",
  },

  {
    id: "beverage-005",
    name: "Soft Drink",
    category: "Beverages",
    type: "beverages",
    price: "₹35",
    keywords: "soft,drink,soda,restaurant",
    image: foodImage("soft,drink,soda,restaurant", 105),
    description: "Refreshing chilled soft drink served with service.",
  },

  {
    id: "beverage-006",
    name: "Fresh Lime Water",
    category: "Beverages",
    type: "beverages",
    price: "₹60",
    keywords: "fresh,lime,lemon,water,drink",
    image: foodImage("fresh,lime,lemon,water,drink", 106),
    description: "Refreshing fresh lime water prepared with fresh citrus.",
  },

  {
    id: "beverage-007",
    name: "Fresh Lime Soda",
    category: "Beverages",
    type: "beverages",
    price: "₹70",
    keywords: "fresh,lime,soda,lemon,drink",
    image: foodImage("fresh,lime,soda,lemon,drink", 107),
    description: "Refreshing fresh lime soda with a sparkling citrus finish.",
  },

  /* =======================================================
     CHINESE MAIN COURSE - VEG
  ======================================================= */

  {
    id: "veg-main-001",
    name: "Veg / Paneer Noodles",
    category: "Chinese Main Course - Veg",
    type: "veg",
    price: "₹310",
    keywords: "vegetable,paneer,noodles,chinese",
    image: vegpaneernoodles,
    description:
      "Fresh boiled noodles tossed with seasonal vegetables or paneer in light Chinese sauces.",
  },

  {
    id: "veg-main-002",
    name: "Veg / Paneer Hakka Noodles",
    category: "Chinese Main Course - Veg",
    type: "veg",
    price: "₹310",
    keywords: "paneer,hakka,noodles,chinese",
    image: vegpaneerhakkanoodles,
    description:
      "Fresh boiled and crispy fried noodles tossed with seasonal vegetables or paneer and light Chinese sauces.",
  },

  {
    id: "veg-main-003",
    name: "Veg / Paneer Schezwan Noodles",
    category: "Chinese Main Course - Veg",
    type: "veg",
    price: "₹310",
    keywords: "schezwan,vegetable,paneer,noodles",
    image: vegpaneerschezwannoodles,
    description:
      "Boiled noodles tossed in spicy Schezwan sauce with vegetables or paneer.",
  },

  {
    id: "veg-main-004",
    name: "Veg / Paneer Schezwan Fried Rice",
    category: "Chinese Main Course - Veg",
    type: "veg",
    price: "₹310",
    keywords: "schezwan,vegetable,paneer,fried,rice",
    image: vegpaneerschezwanfriedrice,
    description:
      "Basmati rice tossed in homemade spicy Schezwan sauce with vegetables or paneer.",
  },

  {
    id: "veg-main-005",
    name: "Veg / Paneer / Mushroom Fried Rice",
    category: "Chinese Main Course - Veg",
    type: "veg",
    price: "₹310",
    keywords: "vegetable,paneer,mushroom,fried,rice",
    image: vegpaneermushroomfriedrice,
    description:
      "Basmati rice tossed in light soya sauce with vegetables, paneer or mushroom.",
  },

  /* =======================================================
     CHINESE MAIN COURSE - NON VEG
  ======================================================= */

  {
    id: "nonveg-main-001",
    name: "Egg / Chicken Noodles",
    category: "Chinese Main Course - Nonveg",
    type: "nonveg",
    price: "₹340",
    keywords: "chicken,egg,noodles,chinese",
    image: foodImage("chicken,egg,noodles,chinese", 301),
    description:
      "Fresh boiled noodles tossed in fresh egg or chicken with light Chinese sauces.",
  },

  {
    id: "nonveg-main-002",
    name: "Egg / Chicken Hakka Noodles",
    category: "Chinese Main Course - Nonveg",
    type: "nonveg",
    price: "₹340",
    keywords: "chicken,egg,hakka,noodles",
    image: foodImage("chicken,egg,hakka,noodles", 302),
    description:
      "A blend of fresh boiled and crispy fried noodles tossed with fresh egg or chicken and light Chinese sauces.",
  },

  {
    id: "nonveg-main-003",
    name: "Egg / Chicken Schezwan Noodles",
    category: "Chinese Main Course - Nonveg",
    type: "nonveg",
    price: "₹340",
    keywords: "chicken,egg,schezwan,noodles",
    image: foodImage("chicken,egg,schezwan,noodles", 303),
    description:
      "Boiled noodles tossed in homemade spicy Schezwan sauce with egg or chicken.",
  },

  {
    id: "nonveg-main-004",
    name: "Egg / Chicken Fried Rice",
    category: "Chinese Main Course - Nonveg",
    type: "nonveg",
    price: "₹340",
    keywords: "chicken,egg,fried,rice,chinese",
    image: foodImage("chicken,egg,fried,rice,chinese", 304),
    description: "Basmati rice tossed in light soya sauce with egg or chicken.",
  },

  {
    id: "nonveg-main-005",
    name: "Egg / Chicken Schezwan Fried Rice",
    category: "Chinese Main Course - Nonveg",
    type: "nonveg",
    price: "₹340",
    keywords: "chicken,egg,schezwan,fried,rice",
    image: foodImage("chicken,egg,schezwan,fried,rice", 305),
    description:
      "Basmati rice tossed in homemade spicy Schezwan sauce with egg or chicken.",
  },

  /* =======================================================
     CHINESE STARTERS - VEG
  ======================================================= */

  {
    id: "veg-starter-001",
    name: "Spring Roll Veg / Paneer",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹320",
    keywords: "vegetable,paneer,spring,roll,chinese",
    image: springrollvegpaneer,
    description:
      "Vegetable or paneer stuffing seasoned with Chinese sauces, rolled in rice-based sheets and deep fried.",
  },

  {
    id: "veg-starter-002",
    name: "American Corn Crispy",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹320",
    keywords: "crispy,corn,chinese,starter",
    image: americancorncrispy,
    description: "Crispy corn kernels tossed in sweet and tangy sauce.",
  },

  {
    id: "veg-starter-003",
    name: "Veg Manchurian",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹320",
    keywords: "veg,manchurian,chinese",
    image: vegmanchurian,
    description: "Seasonal vegetable balls tossed in mild Chinese sauces.",
  },

  {
    id: "veg-starter-004",
    name: "Veg Crispy",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹320",
    keywords: "crispy,vegetables,chinese,starter",
    image: vegcrispy,
    description:
      "Deep-fried crispy vegetables tossed in sweet and tangy sauce.",
  },

  {
    id: "veg-starter-005",
    name: "Veg Lollipop",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹320",
    keywords: "vegetable,lollipop,chinese,starter",
    image: veglollipop,
    description:
      "Lollipop made with finely chopped vegetables and coated with garlic sauce.",
  },

  {
    id: "veg-starter-006",
    name: "Paneer Chilli",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "paneer,chilli,chinese,starter",
    image: chillipaneer,
    description:
      "Crispy and crunchy paneer tossed in fresh green chilli flavoured sauce.",
  },

  {
    id: "veg-starter-007",
    name: "Paneer 65",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹320",
    keywords: "paneer,65,indian,chinese,starter",
    image: paneer65,
    description:
      "Fresh paneer chunks tossed in a curd-based sauce flavoured with curry leaves and dry red chilli.",
  },

  {
    id: "veg-starter-008",
    name: "Mushroom Chilli",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "mushroom,chilli,chinese,starter",
    image: mushroomchilli,
    description:
      "Crispy and crunchy mushroom tossed in fresh green chilli flavoured sauce.",
  },

  /* =======================================================
     CHINESE STARTERS - SEA FOOD
  ======================================================= */

  {
    id: "seafood-starter-001",
    name: "Fish Chilli",
    category: "Chinese Starters - Sea Food",
    type: "nonveg",
    price: "₹460",
    keywords: "fish,chilli,chinese,seafood",
    image: foodImage("fish,chilli,chinese,seafood", 501),
    description:
      "Boneless basa fish tossed in fresh green chilli flavoured sauce.",
  },

  {
    id: "seafood-starter-002",
    name: "Fish Schezwan",
    category: "Chinese Starters - Sea Food",
    type: "nonveg",
    price: "₹460",
    keywords: "fish,schezwan,chinese,seafood",
    image: foodImage("fish,schezwan,chinese,seafood", 502),
    description:
      "Deep-fried boneless basa fish chunks tossed in homemade spicy Schezwan sauce.",
  },

  {
    id: "seafood-starter-003",
    name: "Fish Korean",
    category: "Chinese Starters - Sea Food",
    type: "nonveg",
    price: "₹460",
    keywords: "fish,korean,chilli,chinese",
    image: foodImage("fish,korean,chilli,chinese", 503),
    description:
      "Crispy boneless basa fish chunks tossed in Korean-style red chilli sauce.",
  },

  {
    id: "seafood-starter-004",
    name: "Fish Pepper Blast",
    category: "Chinese Starters - Sea Food",
    type: "nonveg",
    price: "₹460",
    keywords: "fish,black,pepper,chinese,seafood",
    image: foodImage("fish,black,pepper,chinese,seafood", 504),
    description: "Boneless basa fish tossed in hot black pepper sauce.",
  },

  /* =======================================================
     PRAWN STARTERS
  ======================================================= */

  {
    id: "prawn-starter-001",
    name: "Prawns Chilli",
    category: "Chinese Starters - Sea Food",
    type: "nonveg",
    price: "₹490",
    keywords: "prawns,chilli,chinese,seafood",
    image: foodImage("prawns,chilli,chinese,seafood", 505),
    description: "Peeled prawns tossed in fresh green chilli flavoured sauce.",
  },

  {
    id: "prawn-starter-002",
    name: "Prawns Schezwan",
    category: "Chinese Starters - Sea Food",
    type: "nonveg",
    price: "₹490",
    keywords: "prawns,schezwan,chinese,seafood",
    image: foodImage("prawns,schezwan,chinese,seafood", 506),
    description: "Peeled prawns tossed in homemade spicy Schezwan sauce.",
  },

  {
    id: "prawn-starter-003",
    name: "Prawns Korean",
    category: "Chinese Starters - Sea Food",
    type: "nonveg",
    price: "₹490",
    keywords: "prawns,korean,chilli,seafood",
    image: foodImage("prawns,korean,chilli,seafood", 507),
    description: "Peeled prawns tossed in Korean-style red chilli sauce.",
  },

  {
    id: "prawn-starter-004",
    name: "Prawns Pepper Blast",
    category: "Chinese Starters - Sea Food",
    type: "nonveg",
    price: "₹490",
    keywords: "prawns,black,pepper,chinese,seafood",
    image: foodImage("prawns,black,pepper,chinese,seafood", 508),
    description: "Peeled prawns tossed in hot black pepper sauce.",
  },

  /* =======================================================
     NON VEG SOUP
  ======================================================= */

  {
    id: "soup-001",
    name: "Chicken Clear Soup",
    category: "Nonveg Soup",
    type: "nonveg",
    price: "₹210",
    keywords: "chicken,clear,soup",
    image: foodImage("chicken,clear,soup", 601),
    description:
      "Clear liquid soup made in chicken stock with chunks of fresh chicken.",
  },

  {
    id: "soup-002",
    name: "Chicken Manchow Soup",
    category: "Nonveg Soup",
    type: "nonveg",
    price: "₹210",
    keywords: "chicken,manchow,soup",
    image: foodImage("chicken,manchow,soup", 602),
    description:
      "Fresh chicken chunks in soup seasoned with Chinese sauces and served with fried noodles.",
  },

  {
    id: "soup-003",
    name: "Chicken Hot And Sour Soup",
    category: "Nonveg Soup",
    type: "nonveg",
    price: "₹210",
    keywords: "chicken,hot,sour,soup",
    image: foodImage("chicken,hot,sour,soup", 603),
    description:
      "Chicken stock-based soup seasoned with soya sauce and hot black pepper.",
  },

  {
    id: "soup-004",
    name: "Chicken Noodles Soup",
    category: "Nonveg Soup",
    type: "nonveg",
    price: "₹210",
    keywords: "chicken,noodles,soup",
    image: foodImage("chicken,noodles,soup", 604),
    description: "Mild and thick-bodied soup with noodles and chicken chunks.",
  },

  {
    id: "soup-005",
    name: "Cream of Chicken Soup",
    category: "Nonveg Soup",
    type: "nonveg",
    price: "₹210",
    keywords: "cream,chicken,soup",
    image: foodImage("cream,chicken,soup", 605),
    description:
      "Thick-bodied soup made with chicken stock, chicken chunks, salt and pepper.",
  },

  /* =======================================================
     TANDOORI STARTERS - NON VEG
  ======================================================= */

  {
    id: "tandoori-nonveg-001",
    name: "Chicken Tandoori",
    category: "Tandoori Starters - Nonveg",
    type: "nonveg",
    price: "₹650 / ₹380",
    keywords: "tandoori,chicken,indian",
    image: foodImage("tandoori,chicken,indian", 701),
    description:
      "Whole fresh chicken carcass coated with mustard-flavoured hung curd marination and roasted in tandoor.",
  },

  {
    id: "tandoori-nonveg-002",
    name: "Chicken Tikka",
    category: "Tandoori Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "chicken,tikka,tandoori",
    image: foodImage("chicken,tikka,tandoori", 702),
    description:
      "Tandoor-baked fresh boneless chicken coated with mustard oil flavoured hung curd marination.",
  },

  {
    id: "tandoori-nonveg-003",
    name: "Chicken Malai Tikka",
    category: "Tandoori Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "chicken,malai,tikka,tandoori",
    image: foodImage("chicken,malai,tikka,tandoori", 703),
    description:
      "Tandoor-baked boneless chicken coated with cashew paste and fresh cream-based marination.",
  },

  {
    id: "tandoori-nonveg-004",
    name: "Chicken Garlic Tikka",
    category: "Tandoori Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "chicken,garlic,tikka,tandoori",
    image: foodImage("chicken,garlic,tikka,tandoori", 704),
    description:
      "Garlic-flavoured boneless chicken coated with fried garlic marination and baked in tandoor.",
  },

  {
    id: "tandoori-nonveg-005",
    name: "Murg Jahangiri Tikka",
    category: "Tandoori Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "murg,jahangiri,tikka,chicken",
    image: foodImage("murg,jahangiri,tikka,chicken", 705),
    description:
      "Mint-flavoured green chilli spiced boneless chicken tikka baked in tandoor.",
  },

  {
    id: "tandoori-nonveg-006",
    name: "Chicken Dalchini Kebab",
    category: "Tandoori Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "chicken,cinnamon,seekh,kebab",
    image: foodImage("chicken,cinnamon,seekh,kebab", 706),
    description:
      "Cinnamon-flavoured seekh kebab made with chicken minced meat and baked in tandoor.",
  },

  {
    id: "tandoori-nonveg-007",
    name: "Chicken Gilafi Kebab",
    category: "Tandoori Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "chicken,gilafi,kebab,seekh",
    image: foodImage("chicken,gilafi,kebab,seekh", 707),
    description:
      "Seekh kebab made with chicken minced meat coated with mixed bell pepper and cheese.",
  },

  /* =======================================================
     TANDOORI STARTERS - VEG
  ======================================================= */

  {
    id: "tandoori-veg-001",
    name: "Harabhara Kebab",
    category: "Tandoori Starters - Veg",
    type: "veg",
    price: "₹320",
    keywords: "hara,bhara,kebab,vegetarian",
    image: harabharakabab,
    description:
      "Deep-fried vegetable kebabs made with seasonal vegetables and spinach.",
  },

  {
    id: "tandoori-veg-002",
    name: "Burasi Kebab",
    category: "Tandoori Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "beetroot,kebab,cheese,vegetarian",
    image: burasikebab,
    description:
      "Crispy and crunchy kebab made with beetroot and stuffed with cheese.",
  },

  {
    id: "tandoori-veg-003",
    name: "Paneer Tikka",
    category: "Tandoori Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "paneer,tikka,tandoori,indian",
    image: paneertikka,
    description:
      "Tandoor-baked fresh paneer coated with mustard oil flavoured hung curd marination.",
  },

  {
    id: "tandoori-veg-004",
    name: "Paneer Malai Tikka",
    category: "Tandoori Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "paneer,malai,tikka,tandoori",
    image: paneermalaitikka,
    description:
      "Tandoor-baked paneer coated with cashew paste and fresh cream-based marination.",
  },

  {
    id: "tandoori-veg-005",
    name: "Paneer Garlic Tikka",
    category: "Tandoori Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "paneer,garlic,tikka,tandoori",
    image: PaneerGarlicTikka,
    description:
      "Garlic-flavoured paneer coated with fried garlic marination and baked in tandoor.",
  },

  {
    id: "tandoori-veg-006",
    name: "Paneer Jahangiri Tikka",
    category: "Tandoori Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "paneer,jahangiri,tikka,green,chilli",
    image: PaneerJahangiriTikka,
    description:
      "Mint-flavoured green chilli spiced stuffed paneer tikka baked in tandoor.",
  },

  {
    id: "tandoori-veg-007",
    name: "Paneer Gilafi Kebab",
    category: "Tandoori Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "paneer,gilafi,kebab,bell,pepper",
    image: PaneerGilafiKebab,
    description: "Paneer seekh kebab coated with mixed bell pepper and cheese.",
  },

  {
    id: "tandoori-veg-008",
    name: "Paneer Amritsari Tikka",
    category: "Tandoori Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "paneer,amritsari,tikka,indian",
    image: PaneerAmritsariTikka,
    description:
      "Paneer with ajwain-flavoured spicy red chilli flex marination and baked in tandoor.",
  },

  {
    id: "tandoori-veg-009",
    name: "Paneer Sufiyana Tikka",
    category: "Tandoori Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "paneer,sufiyana,tikka,tandoori",
    image: PaneerSufiyanaTikka,
    description:
      "Fennel-flavoured hung curd marination coated on paneer and baked in tandoor.",
  },

  {
    id: "tandoori-veg-010",
    name: "Paneer Lahori Tikka",
    category: "Tandoori Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "lahori,paneer,tikka,indian",
    image: PaneerLahoriTikka,
    description:
      "Clove-flavoured spicy marination with mustard oil coated on paneer and baked in tandoor.",
  },

  {
    id: "tandoori-veg-011",
    name: "Paneer Bhatti Ka Tikka",
    category: "Tandoori Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "paneer,bhatti,tikka,indian",
    image: PaneerBhattiKaTikka,
    description:
      "Fried onion-flavoured cashew paste and fresh cream marination coated on paneer and baked in tandoor.",
  },

  {
    id: "tandoori-veg-012",
    name: "VILLA 24 Special Tikka",
    category: "Tandoori Starters - Veg",
    type: "veg",
    price: "₹390",
    keywords: "paneer,tikka,platter,tandoori,indian",
    image: foodImage("paneer,tikka,platter,tandoori,indian", 812),
    description:
      "Assorted three types of delicious marination coated on paneer and baked in tandoor.",
  },

  /* =======================================================
     TANDOORI STARTERS - SEA FOOD
  ======================================================= */

  {
    id: "tandoori-seafood-001",
    name: "Fish Tandoori Tikka",
    category: "Tandoori Starters - Sea Food",
    type: "nonveg",
    price: "₹460",
    keywords: "fish,tandoori,tikka,seafood",
    image: foodImage("fish,tandoori,tikka,seafood", 901),
    description:
      "Sea-watered boneless basa fish coated with mustard-flavoured hung curd marination and roasted in tandoor.",
  },

  {
    id: "tandoori-seafood-002",
    name: "Fish Jahangiri Tikka",
    category: "Tandoori Starters - Sea Food",
    type: "nonveg",
    price: "₹460",
    keywords: "fish,jahangiri,tikka,seafood",
    image: foodImage("fish,jahangiri,tikka,seafood", 902),
    description:
      "Mint-flavoured green chilli spiced boneless basa fish tikka baked in tandoor.",
  },

  {
    id: "tandoori-seafood-003",
    name: "Fish Amritsari Tikka",
    category: "Tandoori Starters - Sea Food",
    type: "nonveg",
    price: "₹460",
    keywords: "fish,amritsari,tikka,seafood",
    image: foodImage("fish,amritsari,tikka,seafood", 903),
    description:
      "Boneless basa fish with ajwain-flavoured and spicy red chilli flakes marination baked in tandoor.",
  },

  {
    id: "tandoori-seafood-004",
    name: "Fish Lahori Tikka",
    category: "Tandoori Starters - Sea Food",
    type: "nonveg",
    price: "₹460",
    keywords: "fish,lahori,tikka,seafood",
    image: foodImage("fish,lahori,tikka,seafood", 904),
    description:
      "Clove-flavoured spicy marination with mustard oil coated on boneless basa fish and baked in tandoor.",
  },

  {
    id: "tandoori-seafood-005",
    name: "Prawns Tandoori",
    category: "Tandoori Starters - Sea Food",
    type: "nonveg",
    price: "₹490",
    keywords: "prawns,tandoori,seafood",
    image: foodImage("prawns,tandoori,seafood", 905),
    description:
      "Sea-watered peeled prawns coated with mustard-flavoured hung curd marination and roasted in tandoor.",
  },

  {
    id: "tandoori-seafood-006",
    name: "Prawns Jahangiri",
    category: "Tandoori Starters - Sea Food",
    type: "nonveg",
    price: "₹490",
    keywords: "prawns,jahangiri,seafood",
    image: foodImage("prawns,jahangiri,seafood", 906),
    description:
      "Mint-flavoured green chilli spiced peeled prawns baked in tandoor.",
  },

  {
    id: "tandoori-seafood-007",
    name: "Prawns Amritsari",
    category: "Tandoori Starters - Sea Food",
    type: "nonveg",
    price: "₹490",
    keywords: "prawns,amritsari,seafood",
    image: foodImage("prawns,amritsari,seafood", 907),
    description:
      "Peeled prawns with ajwain-flavoured and spicy red chilli flakes marination baked in tandoor.",
  },

  {
    id: "tandoori-seafood-008",
    name: "Prawns Lahori",
    category: "Tandoori Starters - Sea Food",
    type: "nonveg",
    price: "₹490",
    keywords: "prawns,lahori,seafood",
    image: foodImage("prawns,lahori,seafood", 908),
    description:
      "Clove-flavoured spicy marination with mustard oil coated on prawns and baked in tandoor.",
  },

  /* =======================================================
     TANDOORI STARTERS - NON VEG - ADDITIONAL
  ======================================================= */

  {
    id: "tandoori-nonveg-008",
    name: "Murg Amritsari Tikka",
    category: "Tandoori Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "murg,amritsari,tikka,chicken",
    image: foodImage("murg,amritsari,tikka,chicken", 708),
    description:
      "Boneless chicken with ajwain-flavoured and spicy red chilli flakes marination baked in tandoor.",
  },

  {
    id: "tandoori-nonveg-009",
    name: "Chicken Sufiyana Tikka",
    category: "Tandoori Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "chicken,sufiyana,tikka,fennel",
    image: foodImage("chicken,sufiyana,tikka,fennel", 709),
    description:
      "Fennel-flavoured hung curd marination coated on boneless chicken and baked in tandoor.",
  },

  {
    id: "tandoori-nonveg-010",
    name: "Murg Lahori Tikka",
    category: "Tandoori Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "murg,lahori,tikka,chicken",
    image: foodImage("murg,lahori,tikka,chicken", 710),
    description:
      "Clove-flavoured spicy marination with mustard oil coated on boneless chicken and baked in tandoor.",
  },

  {
    id: "tandoori-nonveg-011",
    name: "Bhatti Ka Murg Tikka",
    category: "Tandoori Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "bhatti,murg,tikka,chicken",
    image: foodImage("bhatti,murg,tikka,chicken", 711),
    description:
      "Fried onion-flavoured cashew paste and fresh cream marination coated on chicken and baked in tandoor.",
  },

  {
    id: "tandoori-nonveg-012",
    name: "Murg Tangdi Kebab",
    category: "Tandoori Starters - Nonveg",
    type: "nonveg",
    price: "₹460",
    keywords: "murg,tangdi,kebab,chicken",
    image: foodImage("murg,tangdi,kebab,chicken", 712),
    description:
      "Medium-spicy clove and cardamom-flavoured chicken leg piece cooked in tandoor with hung curd and cream marination.",
  },

  {
    id: "tandoori-nonveg-013",
    name: "VILLA 24 Special Tikka",
    category: "Tandoori Starters - Nonveg",
    type: "nonveg",
    price: "₹460",
    keywords: "villa,24,special,tikka,chicken",
    image: foodImage("villa,24,special,tikka,chicken", 713),
    description:
      "Assorted three types of delicious marination coated on boneless chicken and baked in tandoor.",
  },

  /* =======================================================
     CHINESE STARTERS - NON VEG - ADDITIONAL
  ======================================================= */

  {
    id: "nonveg-starter-001",
    name: "Chicken Spring Roll",
    category: "Chinese Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "chicken,spring,roll,chinese",
    image: foodImage("chicken,spring,roll,chinese", 601),
    description:
      "Chicken stuffing seasoned with Chinese sauces, rolled in rice-based sheets and deep fried.",
  },

  {
    id: "nonveg-starter-002",
    name: "Chicken Chilli",
    category: "Chinese Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "chicken,chilli,chinese,starter",
    image: foodImage("chicken,chilli,chinese,starter", 602),
    description:
      "Crispy and crunchy chicken tossed in fresh green chilli flavoured sauce.",
  },

  {
    id: "nonveg-starter-003",
    name: "Chicken Crispy",
    category: "Chinese Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "chicken,crispy,chinese,starter",
    image: foodImage("chicken,crispy,chinese,starter", 603),
    description:
      "Deep-fried crunchy chicken chunks tossed in mild Chinese sauces.",
  },

  {
    id: "nonveg-starter-004",
    name: "Chicken Lollipop",
    category: "Chinese Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "chicken,lollipop,chinese,starter",
    image: foodImage("chicken,lollipop,chinese,starter", 604),
    description: "Lollipop-shaped chicken wings tossed in garlic sauce.",
  },

  {
    id: "nonveg-starter-005",
    name: "Chicken 65",
    category: "Chinese Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "chicken,65,chinese,starter",
    image: foodImage("chicken,65,chinese,starter", 605),
    description:
      "Fresh chicken chunks tossed in curd-based sauce flavoured with curry leaves and dry red chilli.",
  },

  {
    id: "nonveg-starter-006",
    name: "Chicken Schezwan",
    category: "Chinese Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "chicken,schezwan,chinese,starter",
    image: foodImage("chicken,schezwan,chinese,starter", 606),
    description: "Deep-fried chicken tossed in homemade spicy Schezwan sauce.",
  },

  {
    id: "nonveg-starter-007",
    name: "Korean Chicken Wings",
    category: "Chinese Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "korean,chicken,wings,chinese",
    image: foodImage("korean,chicken,wings,chinese", 607),
    description:
      "Crispy chicken wings tossed in Korean-style red chilli sauce.",
  },

  {
    id: "nonveg-starter-008",
    name: "Chicken Pepper Blast",
    category: "Chinese Starters - Nonveg",
    type: "nonveg",
    price: "₹420",
    keywords: "chicken,pepper,blast,chinese",
    image: foodImage("chicken,pepper,blast,chinese", 608),
    description: "Chicken chunks tossed in hot black pepper sauce.",
  },

  /* =======================================================
     CHINESE STARTERS - VEG - ADDITIONAL
  ======================================================= */

  {
    id: "veg-starter-009",
    name: "Veg Chilli",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹320",
    keywords: "veg,chilli,chinese,starter",
    image: foodImage("veg,chilli,chinese,starter", 409),
    description:
      "Crispy and crunchy seasonal vegetables tossed in fresh green chilli flavoured sauce.",
  },

  {
    id: "veg-starter-010",
    name: "Cheese Corn Balls",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "cheese,corn,balls,chinese,starter",
    image: foodImage("cheese,corn,balls,chinese,starter", 410),
    description: "American sweet corn balls made with processed cheese.",
  },

  {
    id: "veg-starter-011",
    name: "Oriental Cheese Fritters",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "oriental,cheese,fritters,chinese",
    image: foodImage("oriental,cheese,fritters,chinese", 411),
    description:
      "Cheesy vegetable fritters tossed in lemongrass and Thai ginger flavoured sauce.",
  },

  {
    id: "veg-starter-012",
    name: "Veg Schezwan Momos",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹320",
    keywords: "veg,schezwan,momos,chinese",
    image: foodImage("veg,schezwan,momos,chinese", 412),
    description:
      "Deep-fried vegetable momos tossed in homemade spicy Schezwan sauce.",
  },

  {
    id: "veg-starter-013",
    name: "Sweet Chilli Potato",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹320",
    keywords: "sweet,chilli,potato,chinese",
    image: foodImage("sweet,chilli,potato,chinese", 413),
    description: "Kids-friendly potato preparation in sweet chilli sauce.",
  },

  {
    id: "veg-starter-014",
    name: "Paneer Korean",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "paneer,korean,chinese,starter",
    image: foodImage("paneer,korean,chinese,starter", 414),
    description: "Crispy paneer cubes tossed in Korean-style red chilli sauce.",
  },

  {
    id: "veg-starter-015",
    name: "Paneer Pepper Blast",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "paneer,pepper,blast,chinese",
    image: foodImage("paneer,pepper,blast,chinese", 415),
    description: "Paneer chunks tossed in hot black pepper sauce.",
  },

  {
    id: "veg-starter-016",
    name: "Paneer Cheesy Garden",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "paneer,cheesy,garden,chinese",
    image: foodImage("paneer,cheesy,garden,chinese", 416),
    description:
      "Paneer cubes tossed in spinach-based cheesy and creamy sauce.",
  },

  {
    id: "veg-starter-017",
    name: "Paneer Dragon",
    category: "Chinese Starters - Veg",
    type: "veg",
    price: "₹360",
    keywords: "paneer,dragon,chinese,starter",
    image: foodImage("paneer,dragon,chinese,starter", 417),
    description:
      "Paneer juliennes tossed in spicy and tangy sauce with mixed bell pepper.",
  },

  /* =======================================================
     INDIAN MAIN COURSE - VEG
  ======================================================= */

  {
    id: "indian-veg-main-001",
    name: "Veg Kadai",
    category: "Indian Main Course - Veg",
    type: "veg",
    price: "₹360",
    keywords: "veg,kadai,indian,main,course",
    image: foodImage("veg,kadai,indian,main,course", 1001),
    description:
      "Seasonal vegetable mild preparation made with a blend of tomato gravy and onion gravy.",
  },

  {
    id: "indian-veg-main-002",
    name: "Veg Handi",
    category: "Indian Main Course - Veg",
    type: "veg",
    price: "₹360",
    keywords: "veg,handi,indian,main,course",
    image: foodImage("veg,handi,indian,main,course", 1002),
    description:
      "Seasonal vegetable mild preparation made with tomato gravy and a light touch of onion gravy.",
  },

  {
    id: "indian-veg-main-003",
    name: "Veg Kolhapuri",
    category: "Indian Main Course - Veg",
    type: "veg",
    price: "₹360",
    keywords: "veg,kolhapuri,indian,main,course",
    image: foodImage("veg,kolhapuri,indian,main,course", 1003),
    description: "Spicy vegetable preparation made with onion-based gravy.",
  },

  {
    id: "indian-veg-main-004",
    name: "Veg Egg Curry",
    category: "Indian Main Course - Veg",
    type: "veg",
    price: "₹360",
    keywords: "veg,egg,curry,kofta,indian",
    image: foodImage("veg,egg,curry,indian", 1004),
    description:
      "Egg-shaped koftas made with paneer and potato prepared in spicy Indian gravy.",
  },

  {
    id: "indian-veg-main-005",
    name: "Veg Nizami Handi",
    category: "Indian Main Course - Veg",
    type: "veg",
    price: "₹360",
    keywords: "veg,nizami,handi,hyderabadi",
    image: foodImage("veg,nizami,handi,hyderabadi", 1005),
    description:
      "Hyderabad-style Mughlai preparation made with a blend of white gravy and tomato gravy.",
  },

  {
    id: "indian-veg-main-006",
    name: "Veg Maratha",
    category: "Indian Main Course - Veg",
    type: "veg",
    price: "₹360",
    keywords: "veg,maratha,kofta,indian",
    image: foodImage("veg,maratha,kofta,indian", 1006),
    description: "Varhadi-style spicy kofta preparation in onion-based gravy.",
  },

  {
    id: "indian-veg-main-007",
    name: "Palak Ke Moti",
    category: "Indian Main Course - Veg",
    type: "veg",
    price: "₹360",
    keywords: "palak,moti,paneer,indian",
    image: foodImage("palak,ke,moti,indian", 1007),
    description:
      "Small golden fried paneer balls prepared in palak-based gravy.",
  },

  {
    id: "indian-veg-main-008",
    name: "Veg Chekori",
    category: "Indian Main Course - Veg",
    type: "veg",
    price: "₹360",
    keywords: "veg,chekori,stuffed,capsicum,indian",
    image: foodImage("veg,chekori,indian", 1008),
    description:
      "Stuffed capsicum rings with veg keema prepared in a blend of tomato and onion gravy.",
  },

  {
    id: "indian-veg-main-009",
    name: "Veg Rajwadi",
    category: "Indian Main Course - Veg",
    type: "veg",
    price: "₹360",
    keywords: "veg,rajwadi,cashew,indian",
    image: foodImage("veg,rajwadi,indian", 1009),
    description:
      "Seasonal vegetable preparation in yellow gravy with a touch of cashew gravy and finished with ghee, butter and cream.",
  },

  {
    id: "indian-veg-main-010",
    name: "Nargisi Kofta",
    category: "Indian Main Course - Veg",
    type: "veg",
    price: "₹360",
    keywords: "nargisi,kofta,paneer,indian",
    image: foodImage("nargisi,kofta,indian", 1010),
    description:
      "Paneer-based kofta stuffed with cheese and dry fruits and prepared with a blend of tomato and cashew gravy.",
  },
  /* =======================================================
     DAL
  ======================================================= */

  {
    id: "dal-001",
    name: "Dal Jeera",
    category: "Dal",
    type: "veg",
    price: "₹180",
    keywords: "dal,jeera,indian",
    image: foodImage("dal,jeera,indian", 1101),
    description: "Simple yellow dal tempered with aromatic cumin.",
  },

  {
    id: "dal-002",
    name: "Dal Fry",
    category: "Dal",
    type: "veg",
    price: "₹200",
    keywords: "dal,fry,indian",
    image: foodImage("dal,fry,indian", 1102),
    description:
      "Traditional dal preparation finished with aromatic Indian tempering.",
  },

  {
    id: "dal-003",
    name: "Dal Tadka",
    category: "Dal",
    type: "veg",
    price: "₹220",
    keywords: "dal,tadka,indian",
    image: foodImage("dal,tadka,indian", 1103),
    description: "Yellow dal finished with a flavourful Indian tadka.",
  },

  {
    id: "dal-004",
    name: "Dal Dhaba",
    category: "Dal",
    type: "veg",
    price: "₹220",
    keywords: "dal,dhaba,indian",
    image: foodImage("dal,dhaba,indian", 1104),
    description:
      "Dhaba-style dal prepared with rich Indian spices and tempering.",
  },

  {
    id: "dal-005",
    name: "Dal Kolhapuri",
    category: "Dal",
    type: "veg",
    price: "₹220",
    keywords: "dal,kolhapuri,indian",
    image: foodImage("dal,kolhapuri,indian", 1105),
    description:
      "Spicy Kolhapuri-style dal prepared with aromatic Indian spices.",
  },

  /* =======================================================
     RICE
  ======================================================= */

  {
    id: "rice-001",
    name: "Steam Rice",
    category: "Rice",
    type: "veg",
    price: "₹170 / ₹120",
    keywords: "steam,rice,indian",
    image: foodImage("steam,rice,indian", 1201),
    description: "Steamed rice prepared with aromatic long-grain rice.",
  },

  {
    id: "rice-002",
    name: "Jeera Rice",
    category: "Rice",
    type: "veg",
    price: "₹200 / ₹130",
    keywords: "jeera,rice,indian",
    image: foodImage("jeera,rice,indian", 1202),
    description: "Fragrant rice tempered with aromatic cumin.",
  },

  {
    id: "rice-003",
    name: "Jeera Garlic Rice",
    category: "Rice",
    type: "veg",
    price: "₹220",
    keywords: "jeera,garlic,rice,indian",
    image: foodImage("jeera,garlic,rice,indian", 1203),
    description: "Aromatic cumin and garlic flavoured rice.",
  },

  {
    id: "rice-004",
    name: "Curd Rice",
    category: "Rice",
    type: "veg",
    price: "₹240",
    keywords: "curd,rice,indian",
    image: foodImage("curd,rice,indian", 1204),
    description: "Cooling curd rice prepared with seasoned yogurt and rice.",
  },

  {
    id: "rice-005",
    name: "Dal Khichadi",
    category: "Rice",
    type: "veg",
    price: "₹280",
    keywords: "dal,khichadi,rice,indian",
    image: foodImage("dal,khichadi,indian", 1205),
    description:
      "Comforting preparation of rice and dal cooked together with Indian spices.",
  },

  {
    id: "rice-006",
    name: "Paneer Pulao",
    category: "Rice",
    type: "veg",
    price: "₹320",
    keywords: "paneer,pulao,rice,indian",
    image: foodImage("paneer,pulao,indian", 1206),
    description:
      "Fragrant pulao prepared with paneer and aromatic Indian spices.",
  },

  {
    id: "rice-007",
    name: "Veg Pulao",
    category: "Rice",
    type: "veg",
    price: "₹280",
    keywords: "veg,pulao,rice,indian",
    image: foodImage("veg,pulao,indian", 1207),
    description: "Aromatic rice pulao prepared with seasonal vegetables.",
  },

  {
    id: "rice-008",
    name: "Veg Biryani",
    category: "Rice",
    type: "veg",
    price: "₹340",
    keywords: "veg,biryani,rice,indian",
    image: foodImage("veg,biryani,indian", 1208),
    description:
      "Flavourful vegetable biryani prepared with aromatic basmati rice and Indian spices.",
  },

  {
    id: "rice-009",
    name: "Egg Biryani",
    category: "Rice",
    type: "nonveg",
    price: "₹340",
    keywords: "egg,biryani,rice,indian",
    image: foodImage("egg,biryani,indian", 1209),
    description:
      "Aromatic biryani prepared with egg, basmati rice and Indian spices.",
  },

  {
    id: "rice-010",
    name: "Chicken Biryani",
    category: "Rice",
    type: "nonveg",
    price: "₹390",
    keywords: "chicken,biryani,rice,indian",
    image: foodImage("chicken,biryani,indian", 1210),
    description:
      "Aromatic chicken biryani prepared with basmati rice and traditional Indian spices.",
  },

  {
    id: "rice-011",
    name: "Mutton Biryani",
    category: "Rice",
    type: "nonveg",
    price: "₹490",
    keywords: "mutton,biryani,rice,indian",
    image: foodImage("mutton,biryani,indian", 1211),
    description:
      "Rich and aromatic mutton biryani prepared with basmati rice and traditional spices.",
  },

  /* =======================================================
     INDIAN MAIN COURSE - CHICKEN
  ======================================================= */

  {
    id: "indian-chicken-main-001",
    name: "Murg Jafrani",
    category: "Indian Main Course - Chicken",
    type: "nonveg",
    price: "₹450 / ₹770 / ₹1270",
    keywords: "murg,jafrani,chicken,indian",
    image: foodImage("murg,jafrani,chicken,indian", 1301),
    description:
      "Javitri-flavoured medium-spicy chicken preparation made with a blend of cashew and onion gravy.",
  },

  {
    id: "indian-chicken-main-002",
    name: "Murg Nizami Korma",
    category: "Indian Main Course - Chicken",
    type: "nonveg",
    price: "₹450 / ₹770 / ₹1270",
    keywords: "murg,nizami,korma,chicken,indian",
    image: foodImage("murg,nizami,korma,chicken,indian", 1302),
    description:
      "Hyderabad-style pudina-flavoured medium-spicy spinach gravy preparation made with bony chicken pieces.",
  },

  {
    id: "indian-chicken-main-003",
    name: "Murg Bukhara",
    category: "Indian Main Course - Chicken",
    type: "nonveg",
    price: "₹450 / ₹770 / ₹1270",
    keywords: "murg,bukhara,chicken,indian",
    image: foodImage("murg,bukhara,chicken,indian", 1303),
    description:
      "Medium-spicy bony chicken preparation with tomato and cashew gravy having whole green chillies.",
  },

  /* =======================================================
     INDIAN MAIN COURSE - MUTTON
  ======================================================= */

  {
    id: "indian-mutton-main-001",
    name: "Mutton Handi",
    category: "Indian Main Course - Mutton",
    type: "nonveg",
    price: "₹490 / ₹770 / ₹1310",
    keywords: "mutton,handi,indian",
    image: foodImage("mutton,handi,indian", 1401),
    description:
      "Indian dhaba-style medium-spicy gravy preparation made with goat meat.",
  },

  {
    id: "indian-mutton-main-002",
    name: "Mutton Curry",
    category: "Indian Main Course - Mutton",
    type: "nonveg",
    price: "₹490 / ₹770 / ₹1310",
    keywords: "mutton,curry,indian",
    image: foodImage("mutton,curry,indian", 1402),
    description:
      "Home-style medium-spicy goat meat preparation in thin-consistency curry.",
  },

  {
    id: "indian-mutton-main-003",
    name: "Mutton Rogan Josh",
    category: "Indian Main Course - Mutton",
    type: "nonveg",
    price: "₹490 / ₹770 / ₹1310",
    keywords: "mutton,rogan,josh,kashmiri",
    image: foodImage("mutton,rogan,josh,kashmiri", 1403),
    description:
      "Kashmiri-style goat meat preparation with mild Kashmiri mirch powder.",
  },

  {
    id: "indian-mutton-main-004",
    name: "Mutton Saoji",
    category: "Indian Main Course - Mutton",
    type: "nonveg",
    price: "₹490 / ₹770 / ₹1310",
    keywords: "mutton,saoji,nagpuri,indian",
    image: foodImage("mutton,saoji,nagpuri,indian", 1404),
    description:
      "Spicy Nagpuri Saoji curry preparation with homemade bhuna onion and khada masala paste.",
  },

  {
    id: "restaurant-paneer-001",
    name: "Paneer Butter Masala",
    category: "Paneer",
    type: "veg",
    price: "₹390",
    description:
      "Tomato based sweet and rich gravy preparation of paneer finished with cream, butter and khoya.",
  },
  {
    id: "restaurant-paneer-002",
    name: "Paneer Kadai",
    category: "Paneer",
    type: "veg",
    price: "₹390",
    description:
      "Paneer, onion and mix bell pepper preparation made with blend of tomato gravy and onion gravy.",
  },
  {
    id: "restaurant-paneer-003",
    name: "Paneer Laccha",
    category: "Paneer",
    type: "veg",
    price: "₹390",
    description:
      "Paneer, mix bell pepper and onion julian prepared in mild onion based yellow gravy.",
  },
  {
    id: "restaurant-paneer-004",
    name: "Paneer Tikka Masala",
    category: "Paneer",
    type: "veg",
    price: "₹390",
    description:
      "Tandoor roasted paneer preparation in tomato gravy with the touch of onion gravy.",
  },
  {
    id: "restaurant-paneer-005",
    name: "Paneer Palak",
    category: "Paneer",
    type: "veg",
    price: "₹390",
    description: "Spinach based mild and creamy gravy made with paneer cubes.",
  },
  {
    id: "restaurant-paneer-006",
    name: "Paneer Cheese Ghotala",
    category: "Paneer",
    type: "veg",
    price: "₹390",
    description:
      "Minced paneer preparation made with mild tomato and touch of onion gravy loaded with processed cheese.",
  },
  {
    id: "restaurant-paneer-007",
    name: "Paneer Popular",
    category: "Paneer",
    type: "veg",
    price: "₹390",
    description:
      "Paneer stuffed with cheese prepared in yellow gravy with medium spicy taste.",
  },
  {
    id: "restaurant-paneer-008",
    name: "Paneer Khurchan",
    category: "Paneer",
    type: "veg",
    price: "₹390",
    description:
      "Crumbled paneer preparation with the blend of red and yellow gravy.",
  },
  {
    id: "restaurant-paneer-009",
    name: "Paneer Chakori",
    category: "Paneer",
    type: "veg",
    price: "₹390",
    description:
      "Stuffed capsicum rings with paneer prepared in blend of tomato and onion gravy.",
  },
  {
    id: "restaurant-paneer-010",
    name: "Paneer Rajwadi",
    category: "Paneer",
    type: "veg",
    price: "₹390",
    description:
      "Paneer preparation in yellow gravy with the touch of cashew gravy and finished with ghee, butter and cream.",
  },

  // =========================
  // CHICKEN
  // =========================
  {
    id: 11,
    name: "Chicken Butter Masala",
    category: "Chicken",
    type: "nonveg",
    price: "₹420 / ₹720 / ₹1120",
    description:
      "Tomato based sweet and rich gravy preparation of chicken finished with cream, butter and khoya.",
  },
  {
    id: 12,
    name: "Chicken Kadhai",
    category: "Chicken",
    type: "nonveg",
    price: "₹420 / ₹720 / ₹1120",
    description:
      "Chicken, onion and mix bell pepper preparation made with blend of tomato gravy and onion gravy.",
  },
  {
    id: 13,
    name: "Chicken Dhaba Curry",
    category: "Chicken",
    type: "nonveg",
    price: "₹420 / ₹720 / ₹1120",
    description:
      "Indian dhaba style medium spicy thin gravy preparation made with bony broiler chicken.",
  },
  {
    id: 14,
    name: "Chicken Saoji",
    category: "Chicken",
    type: "nonveg",
    price: "₹420 / ₹720 / ₹1120",
    description:
      "Spicy Nagpuri saoji curry preparation with homemade bhuna onion with khada masala pest and bony broiler chicken.",
  },
  {
    id: 15,
    name: "Chicken Rara",
    category: "Chicken",
    type: "nonveg",
    price: "₹450 / ₹770 / ₹1270",
    description:
      "With bony chicken and chicken keema cooked together with medium spicy yellow gravy based preparation.",
  },
  {
    id: 16,
    name: "Murg Burada Ghotala",
    category: "Chicken",
    type: "nonveg",
    price: "₹450 / ₹770 / ₹1270",
    description:
      "Flakey boneless chicken with medium spicy preparation made with blend of masala gravy.",
  },
  {
    id: 17,
    name: "Murg Rizala",
    category: "Chicken",
    type: "nonveg",
    price: "₹450 / ₹770 / ₹1270",
    description:
      "Boneless malai tikka cooked with medium spicy cashew gravy and flavoured with green cardamom powder.",
  },

  // =========================
  // TANDOORI BREADS
  // =========================
  {
    id: 18,
    name: "Plain Tandoori Roti",
    category: "Tandoori Breads",

    price: "₹30",
  },
  {
    id: 19,
    name: "Butter Tandoori Roti",
    category: "Tandoori Breads",
    type: "veg",
    price: "₹35",
  },
  {
    id: 20,
    name: "Laccha Paratha",
    category: "Tandoori Breads",
    type: "veg",
    price: "₹40",
  },
  {
    id: 21,
    name: "Plain Naan",
    category: "Tandoori Breads",
    type: "veg",
    price: "₹35",
  },
  {
    id: 22,
    name: "Butter Naan",
    category: "Tandoori Breads",
    type: "veg",
    price: "₹45",
  },
  {
    id: 23,
    name: "Garlic Naan",
    category: "Tandoori Breads",
    type: "veg",
    price: "₹50",
  },
  {
    id: 24,
    name: "Chilli Garlic Naan",
    category: "Tandoori Breads",
    type: "veg",
    price: "₹50",
  },
  {
    id: 25,
    name: "Chur Chur Naan Amritsari",
    category: "Tandoori Breads",
    type: "veg",
    price: "₹100",
  },
  {
    id: 26,
    name: "Cheese Naan",
    category: "Tandoori Breads",
    type: "veg",
    price: "₹125",
  },
  {
    id: 27,
    name: "Stuff Paratha",
    category: "Tandoori Breads",
    type: "veg",
    price: "₹125",
  },

  // =========================
  // PAPAD / SALAD / RAITA
  // =========================
  {
    id: 28,
    name: "Roasted Papad",
    category: "Papad / Salad / Raita",
    type: "veg",
    price: "₹25",
  },
  {
    id: 29,
    name: "Fried Papad",
    category: "Papad / Salad / Raita",
    type: "veg",
    price: "₹35",
  },
  {
    id: 30,
    name: "Masala Papad",
    category: "Papad / Salad / Raita",
    type: "veg",
    price: "₹40",
  },
  {
    id: 31,
    name: "Green Salad",
    category: "Papad / Salad / Raita",
    type: "veg",
    price: "₹120",
  },
  {
    id: 32,
    name: "Plain Curd",
    category: "Papad / Salad / Raita",
    type: "veg",
    price: "₹60",
  },
  {
    id: 33,
    name: "Boondi Raita",
    category: "Papad / Salad / Raita",
    type: "veg",
    price: "₹120",
  },
  {
    id: 34,
    name: "Mix Veg Raita",
    category: "Papad / Salad / Raita",
    type: "veg",
    price: "₹120",
  },

  // =========================
  // DESSERTS
  // =========================
  {
    id: 35,
    name: "Hot Gulab Jamun",
    category: "Desserts",
    type: "veg",
    price: "₹30",
  },
  {
    id: 36,
    name: "Ice-cream Scoop Single",
    category: "Desserts",
    type: "veg",
    price: "₹50",
  },
  {
    id: 37,
    name: "Hot Gulab Jamun with Ice-cream",
    category: "Desserts",
    type: "veg",
    price: "₹90",
  },
  {
    id: 38,
    name: "Hot Chocolate Brownie",
    category: "Desserts",
    type: "veg",
    price: "₹180",
  },
];

/* =========================================================
   CHEF IMAGE
========================================================= */

const chefImage = chefbgremove;

/* =========================================================
   RESTAURANT COMPONENT
========================================================= */

const Restaurant = () => {
  const navigate = useNavigate();

  const restaurantRef = useRef(null);

  /* =======================================================
     MENU TYPE
  ======================================================= */

  const [menuType, setMenuType] = useState("veg");

  /* =======================================================
     CATEGORY FILTER
  ======================================================= */

  const [selectedCategory, setSelectedCategory] = useState("all");

  /* =======================================================
     PAGINATION
  ======================================================= */

  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 6;

  /* =======================================================
     CHEF VISIBILITY
  ======================================================= */

  const [chefVisible, setChefVisible] = useState(false);

  /* =======================================================
     CHEF SCROLL REVEAL
  ======================================================= */

  useEffect(() => {
    const sectionElement = restaurantRef.current;

    if (!sectionElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setChefVisible(true);

          observer.unobserve(sectionElement);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =======================================================
     TYPE FILTER
  ======================================================= */

  const typeFilteredMenu = useMemo(() => {
    return restaurantMenu.filter((item) => item.type === menuType);
  }, [menuType]);

  /* =======================================================
     CATEGORY OPTIONS
     Automatically generated from existing menu data
  ======================================================= */

  const categoryOptions = useMemo(() => {
    const categories = [
      ...new Set(typeFilteredMenu.map((item) => item.category).filter(Boolean)),
    ];

    return categories;
  }, [typeFilteredMenu]);

  /* =======================================================
     CATEGORY + TYPE FILTER
  ======================================================= */

  const filteredMenu = useMemo(() => {
    if (selectedCategory === "all") {
      return typeFilteredMenu;
    }

    return typeFilteredMenu.filter(
      (item) => item.category === selectedCategory,
    );
  }, [typeFilteredMenu, selectedCategory]);

  /* =======================================================
     RESET PAGINATION WHEN FILTER CHANGES
  ======================================================= */

  useEffect(() => {
    setCurrentPage(1);
  }, [menuType, selectedCategory]);

  /* =======================================================
     TOTAL PAGES
  ======================================================= */

  const totalPages = Math.ceil(filteredMenu.length / ITEMS_PER_PAGE);

  /* =======================================================
     CURRENT PAGE ITEMS
  ======================================================= */

  const paginatedMenu = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    const endIndex = startIndex + ITEMS_PER_PAGE;

    return filteredMenu.slice(startIndex, endIndex);
  }, [filteredMenu, currentPage]);

  /* =======================================================
     RESERVE TABLE
  ======================================================= */

  const handleReserveTable = (dish) => {
    navigate("/contact", {
      state: {
        reservationType: "restaurant",
        selectedDish: dish.name,
        selectedDishType: dish.type,
        selectedDishPrice: dish.price,
        selectedDishCategory: dish.category,
      },
    });
  };

  /* =======================================================
     IMAGE ERROR HANDLER
  ======================================================= */

  const handleImageError = (event) => {
    event.currentTarget.style.opacity = "0";

    const parent = event.currentTarget.parentElement;

    if (parent) {
      parent.classList.add("restaurant-menu-image-fallback");
    }
  };

  /* =======================================================
     CHANGE MENU TYPE
  ======================================================= */

  const handleMenuTypeChange = (type) => {
    setMenuType(type);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  /* =======================================================
     CHANGE CATEGORY
  ======================================================= */

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  /* =======================================================
     PAGINATION
  ======================================================= */

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    if (restaurantRef.current) {
      restaurantRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      ref={restaurantRef}
      className={`restaurant-section ${
        chefVisible ? "restaurant-chef-visible" : ""
      }`}
      style={{
        backgroundImage: `url(${restaurantbg})`,
      }}
    >
      {/* ===================================================
          DECORATIVE SHAPES
      =================================================== */}

      <div
        className="restaurant-background-shape restaurant-background-shape-one"
        aria-hidden="true"
      />

      <div
        className="restaurant-background-shape restaurant-background-shape-two"
        aria-hidden="true"
      />

      {/* ===================================================
          MAIN CONTAINER
      =================================================== */}

      <div className="restaurant-container">
        {/* =================================================
            HEADER
        ================================================= */}

        <header className="restaurant-header">
          <span className="restaurant-subtitle">OUR RESTAURANT</span>

          <div className="restaurant-heading-line">
            <span />
            <span />
            <span />
          </div>

          <h2 className="restaurant-title">
            Welcome To Our Sleep N Eat
            <span>Restaurant</span>
          </h2>

          <p className="restaurant-header-description">
            Explore our carefully selected Indian, Chinese, tandoori and
            refreshing beverage specialties.
          </p>
        </header>

        {/* =================================================
            MENU SWITCH
        ================================================= */}

        <div className="restaurant-menu-switch-wrapper">
          <div
            className="restaurant-menu-switch"
            role="tablist"
            aria-label="Restaurant menu type"
          >
            <button
              type="button"
              role="tab"
              aria-selected={menuType === "veg"}
              className={`restaurant-switch-button ${
                menuType === "veg" ? "restaurant-switch-active" : ""
              }`}
              onClick={() => handleMenuTypeChange("veg")}
            >
              <span className="restaurant-switch-dot restaurant-switch-dot-veg">
                ✓
              </span>

              <span>Veg</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={menuType === "nonveg"}
              className={`restaurant-switch-button ${
                menuType === "nonveg" ? "restaurant-switch-active" : ""
              }`}
              onClick={() => handleMenuTypeChange("nonveg")}
            >
              <span className="restaurant-switch-dot restaurant-switch-dot-nonveg">
                ✓
              </span>

              <span>Non-Veg</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={menuType === "beverages"}
              className={`restaurant-switch-button ${
                menuType === "beverages" ? "restaurant-switch-active" : ""
              }`}
              onClick={() => handleMenuTypeChange("beverages")}
            >
              <span className="restaurant-switch-dot restaurant-switch-dot-beverage">
                ✦
              </span>

              <span>Drinks</span>
            </button>
          </div>
        </div>

        {/* =================================================
    CATEGORY FILTER
================================================= */}

        <div className="restaurant-filter-wrapper">
          <div className="restaurant-filter-content">
            <div className="restaurant-filter-label">
              <span className="restaurant-filter-icon">✦</span>

              <div>
                <span className="restaurant-filter-kicker">EXPLORE MENU</span>

                <h3 className="restaurant-filter-title">
                  Choose Your Category
                </h3>
              </div>
            </div>

            <div className="restaurant-filter-select-wrapper">
              <select
                className="restaurant-filter-select"
                value={selectedCategory}
                onChange={handleCategoryChange}
                aria-label="Filter restaurant menu by category"
              >
                <option value="all">
                  All{" "}
                  {menuType === "veg"
                    ? "Veg"
                    : menuType === "nonveg"
                      ? "Non-Veg"
                      : "Drinks"}{" "}
                  Items
                </option>

                {categoryOptions.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </select>

              <span className="restaurant-filter-chevron">↓</span>
            </div>
          </div>
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="restaurant-content">
          <div className="restaurant-menu">
            {/* ===============================================
        SELECTED CATEGORY TITLE
    =============================================== */}

            <div className="restaurant-category-header">
              <div className="restaurant-category-icon">✦</div>

              <div>
                <span className="restaurant-category-kicker">SLEEP N EAT</span>

                <h3 className="restaurant-category-title">
                  {selectedCategory === "all"
                    ? menuType === "veg"
                      ? "Vegetarian Menu"
                      : menuType === "nonveg"
                        ? "Non-Vegetarian Menu"
                        : "Beverages"
                    : selectedCategory}
                </h3>
              </div>

              <span className="restaurant-category-line" />
            </div>

            {/* ===============================================
        MENU GRID
    =============================================== */}

            {paginatedMenu.length > 0 ? (
              <div className="restaurant-category-grid">
                {paginatedMenu.map((item) => (
                  <article className="restaurant-menu-card" key={item.id}>
                    {/* =====================================
                IMAGE
            ===================================== */}

                    <div className="restaurant-menu-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="restaurant-menu-image"
                        loading="lazy"
                        onError={handleImageError}
                      />

                      <span
                        className={`restaurant-menu-type-badge ${
                          item.type === "veg"
                            ? "restaurant-menu-type-badge-veg"
                            : item.type === "beverages"
                              ? "restaurant-menu-type-badge-beverage"
                              : "restaurant-menu-type-badge-nonveg"
                        }`}
                      >
                        {item.type === "veg"
                          ? "VEG"
                          : item.type === "beverages"
                            ? "DRINK"
                            : "NON-VEG"}
                      </span>
                    </div>

                    {/* =====================================
                INFORMATION
            ===================================== */}

                    <div className="restaurant-menu-info">
                      <div className="restaurant-menu-top">
                        <div className="restaurant-menu-name-wrapper">
                          <h4 className="restaurant-menu-name">{item.name}</h4>

                          <p className="restaurant-menu-price">{item.price}</p>
                        </div>

                        <button
                          type="button"
                          className="restaurant-reserve-button"
                          onClick={() => handleReserveTable(item)}
                          aria-label={`Reserve table for ${item.name}`}
                        >
                          Reserve
                        </button>
                      </div>

                      <div className="restaurant-menu-divider" />

                      <p className="restaurant-menu-description">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="restaurant-empty-state">
                <span className="restaurant-empty-icon">✦</span>

                <h4>No menu items found</h4>

                <p>Try selecting another category.</p>
              </div>
            )}

            {/* ===============================================
        PAGINATION
    =============================================== */}

            {totalPages > 1 && (
              <div
                className="restaurant-pagination"
                aria-label="Restaurant menu pagination"
              >
                <button
                  type="button"
                  className="restaurant-pagination-button restaurant-pagination-prev"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  aria-label="Previous page"
                >
                  ←
                </button>

                <div className="restaurant-pagination-pages">
                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1,
                  ).map((page) => (
                    <button
                      type="button"
                      key={page}
                      className={`restaurant-pagination-page ${
                        currentPage === page
                          ? "restaurant-pagination-page-active"
                          : ""
                      }`}
                      onClick={() => handlePageChange(page)}
                      aria-current={currentPage === page ? "page" : undefined}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="restaurant-pagination-button restaurant-pagination-next"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  aria-label="Next page"
                >
                  →
                </button>
              </div>
            )}
          </div>

          {/* =================================================
      CHEF
  ================================================= */}

          <div
            className={`restaurant-chef ${
              chefVisible ? "restaurant-chef-enter" : ""
            }`}
            aria-hidden="true"
          >
            <img
              src={chefImage}
              alt=""
              className="restaurant-chef-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
