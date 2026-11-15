export const RESTAURANT_LOGO =
  "https://6af8443dc6870dc3d38e4623.imgix.net/Senea%20Muslim%20Restaurant%20Logo%20Collection.png";

export const RESTAURANT_VIDEO_URL =
  "https://6af8443dc6870dc3d38e4623.imgix.net/1115.mp4";

export const RESTAURANT_INFO = {
  name: "Senea Muslim Restaurant",
  address: "42C3+VXC, Robe, Bale Robe, Ethiopia.",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=42C3%2BVXC%2C%20Robe%2C%20Ethiopia",
  phones: [
    {
      label: "Phone 1",
      display: "0921979800",
      tel: "tel:0921979800",
      whatsapp: "https://wa.me/251921979800",
    },
    {
      label: "Phone 2",
      display: "0927780761",
      tel: "tel:0927780761",
      whatsapp: "https://wa.me/251927780761",
    },
  ],
};

export const MENU_FILTER_CATEGORIES = [
  "All Menu",
  "Mendi & Tibs",
  "Fish & Chicken",
  "Sides & Extras",
  "Breakfast",
  "Cold Drinks",
  "Juices & Shakes",
  "Hot Drinks & Teas",
  "Snacks",
];

export const CATEGORY_GROUPS = {
  "Main Course": ["Mendi & Tibs", "Fish & Chicken", "Sides & Extras"],
  Drinks: ["Cold Drinks", "Juices & Shakes", "Hot Drinks & Teas"],
};

export const CATEGORY_CARDS = [
  {
    id: "breakfast",
    name: "Breakfast",
    emoji: "🍳",
    image:
      "https://6af8443dc6870dc3d38e4623.imgix.net/Special%20Fetiras.jpg",
    filterKey: "Breakfast",
    comingSoon: false,
  },
  {
    id: "burger-sandwich",
    name: "Burger & Sandwich",
    emoji: "🍔",
    image: null,
    filterKey: null,
    comingSoon: true,
  },
  {
    id: "main-course",
    name: "Main Course",
    emoji: "🍗",
    image: "https://6af8443dc6870dc3d38e4623.imgix.net/Mandi-Chicken1.jpg",
    filterKey: "Main Course",
    comingSoon: false,
  },
  {
    id: "pizza",
    name: "Pizza",
    emoji: "🍕",
    image: null,
    filterKey: null,
    comingSoon: true,
  },
  {
    id: "pasta",
    name: "Pasta",
    emoji: "🍝",
    image: null,
    filterKey: null,
    comingSoon: true,
  },
  {
    id: "salad",
    name: "Salad",
    emoji: "🥗",
    image: null,
    filterKey: null,
    comingSoon: true,
  },
  {
    id: "drinks",
    name: "Drinks",
    emoji: "🥤",
    image:
      "https://6af8443dc6870dc3d38e4623.imgix.net/Special%20juice.jpg",
    filterKey: "Drinks",
    comingSoon: false,
  },
  {
    id: "desserts",
    name: "Desserts",
    emoji: "🍰",
    image: null,
    filterKey: null,
    comingSoon: true,
  },
];
