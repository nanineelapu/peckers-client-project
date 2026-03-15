import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import BurgerPageClient from "./BurgerPageClient";

export const metadata = {
  title: "Peckers Menu | Halal Peri Peri Chicken, Gourmet Burgers & Wings",
  description: "Explore the Peckers menu - the best alternative to Dave's Hot Chicken and Chicken George. From our signature peri peri grilled chicken to our mouth-watering gourmet burgers and spicy wings. 100% Halal and seriously good.",
  keywords: [
    "Peckers menu",
    "halal burgers Stevenage",
    "peri peri chicken menu",
    "best burgers Hitchin",
    "Chicken George menu comparison",
    "Dave's Hot Chicken style burgers",
    "halal grilled chicken wings",
    "Peckers delivery menu",
    "halal food Hertfordshire"
  ]
};

const DEFAULT_BURGERS_DATA = [
  {
    name: "The OG",
    image: "/images/burgers/default.png", // Fallback image path if needed
    ingredients: "Pressure-fried tenders and house mayo with crisp lettuce",
    calories: "544.4 Kcal",
    protein: "36.5g Protein",
    carbs: "38.0g Carbs",
    fats: "29.6g Fats",
    allergens: "GLUTEN, MILK, EGGS",
    spiceLevel: "1/4",
    boost: 1.1
  },
  {
    name: "Supercharged OG",
    image: "/images/burgers/default.png",
    ingredients: "Crispy chicken and house mayo finished with sriracha and a spice blend.",
    calories: "532.9 Kcal",
    protein: "40.0g Protein",
    carbs: "40.2g Carbs",
    fats: "25.8g Fats",
    allergens: "GLUTEN, MILK, EGGS",
    spiceLevel: "3/4",
    boost: 1.1
  },
  {
    name: "Butter me up",
    image: "/images/burgers/default.png",
    ingredients: "Crispy chicken in a secret family butter sauce for a rich, authentic taste",
    calories: "579.7 Kcal",
    protein: "35.3g Protein",
    carbs: "42.1g Carbs",
    fats: "31.6g Fats",
    allergens: "GLUTEN, MILK, EGGS",
    spiceLevel: "2/4",
    boost: 1.1
  },
  {
    name: "Honey-glazed BBQ classic",
    image: "/images/burgers/default.png",
    ingredients: "Golden chicken fillet and melted cheese glazed in-house-made honey BBQ",
    calories: "634.5 Kcal",
    protein: "41.9g Protein",
    carbs: "56.1g Carbs",
    fats: "29.2g Fats",
    allergens: "GLUTEN, MILK, EGGS",
    spiceLevel: "1/4",
    boost: 1
  },
  {
    name: "Buffalo Soldier",
    image: "/images/burgers/default.png",
    ingredients: "Seeded brioche with crunchy breaded chicken, house mayo, and our secret buffalo sauce",
    calories: "593 Kcal",
    protein: "37.1g Protein",
    carbs: "41.3g Carbs",
    fats: "32.9g Fats",
    allergens: "GLUTEN, MILK, EGGS",
    spiceLevel: "4/4",
    boost: 1.1
  },
  {
    name: "Murger on the dance floor",
    image: "/images/burgers/default.png",
    ingredients: "Seeded brioche with crunchy chicken, onion bhaji, and our signature butter sauce.",
    calories: "665.1 Kcal",
    protein: "36.5g Protein",
    carbs: "57.4g Carbs",
    fats: "33.3g Fats",
    allergens: "GLUTEN, MILK, EGGS",
    spiceLevel: "2/4",
    boost: 1.1
  },
  {
    name: "Hert and Seoul",
    image: "/images/burgers/default.png",
    ingredients: "Crunchy breaded chicken in a Korean glaze and house mayo with OG slaw.",
    calories: "620.7 Kcal",
    protein: "35.5g Protein",
    carbs: "48.4g Carbs",
    fats: "33.8g Fats",
    allergens: "GLUTEN, MILK, EGGS, SESAME",
    spiceLevel: "2/4",
    boost: 1.1
  },
  {
    name: "Mega pecker",
    image: "/images/burgers/default.png",
    ingredients: "Double-crunchy chicken, hash brown, and melted cheese with house-made mayo.",
    calories: "997.5 Kcal",
    protein: "72.6g Protein",
    carbs: "59.3g Carbs",
    fats: "56.6g Fats",
    allergens: "GLUTEN, MILK, EGGS",
    spiceLevel: "1/4",
    boost: 1.1
  },
  {
    name: "Peri - Peri Grilled chicken burger",
    image: "/images/burgers/default.png",
    ingredients: "Flame-grilled chicken in your choice of marinade with house-made mayo.",
    calories: "-",
    protein: "-",
    carbs: "-",
    fats: "-",
    allergens: "Depends",
    spiceLevel: "Depends",
    boost: 1.1
  }
];

export default async function MenuPage() {
  const menuData = await client.fetch(`*[_type == "menuPage"][0] {
    burgerCarousel[] {
      name,
      image,
      boost,
      ingredients,
      protein,
      carbs,
      fats,
      calories,
      energy,
      allergens,
      spiceLevel,
      availabilityText
    }
  }`);

  const navbarData = await client.fetch(`*[_type == "menuNavbar"][0].menuItems[] {
    title,
    link,
    isActive
  }`);

  const initialBurgers = menuData?.burgerCarousel?.map((item) => ({
    name: item.name,
    image: item.image ? urlFor(item.image).url() : "/images/burgers/default.png",
    boost: item.boost || 1,
    ingredients: item.ingredients,
    protein: item.protein,
    carbs: item.carbs,
    fats: item.fats,
    calories: item.calories,
    energy: item.energy,
    allergens: item.allergens,
    spiceLevel: item.spiceLevel,
    availabilityText: item.availabilityText
  })) || DEFAULT_BURGERS_DATA;

  return (
    <BurgerPageClient initialBurgers={initialBurgers} initialNavbarData={navbarData} />
  );
}
