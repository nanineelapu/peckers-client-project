import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import WrapsPageClient from "./WrapsPageClient";

export const metadata = {
    title: "Peckers Wraps Menu | Halal Chicken Wraps Stevenage & Hitchin",
    description: "Explore the Peckers wraps menu. From the classic OG to the Seoul-inspired Korean wrap, our halal chicken wraps are seriously good.",
};

const DEFAULT_WRAPS_DATA = [
    {
        name: "The OG",
        image: "/images/wraps/default.png",
        ingredients: "Crispy fried chicken, house mayo, and lettuce in a toasted wrap",
        calories: "683.3 Kcal",
        protein: "37.6g Protein",
        carbs: "55.8g Carbs",
        fats: "36.6g Fats",
        allergens: "GLUTEN, MILK, EGGS",
        spiceLevel: "1/4",
        boost: 1.1
    },
    {
        name: "Supercharged OG",
        image: "/images/wraps/default.png",
        ingredients: "Crispy breaded chicken, supercharged sauce, cheese, and lettuce in a wrap",
        calories: "617.6 Kcal",
        protein: "41.1g Protein",
        carbs: "58.1g Carbs",
        fats: "26.5g Fats",
        allergens: "GLUTEN, MILK, EGGS",
        spiceLevel: "3/4",
        boost: 1.1
    },
    {
        name: "Butter me up",
        image: "/images/wraps/default.png",
        ingredients: "Fried chicken and authentic, family-recipe butter chicken sauce in a toasted wrap",
        calories: "671.9 Kcal",
        protein: "38.5g Protein",
        carbs: "60.1g Carbs",
        fats: "32.3g Fats",
        allergens: "GLUTEN, MILK, EGGS",
        spiceLevel: "2/4",
        boost: 1.1
    },
    {
        name: "Buffalo Soldier",
        image: "/images/wraps/default.png",
        ingredients: "Breaded chicken fillet, Buffalo sauce, house mayo, lettuce, and onions, wrapped",
        calories: "759.3 Kcal",
        protein: "38.9g Protein",
        carbs: "60.0g Carbs",
        fats: "42.2g Fats",
        allergens: "GLUTEN, MILK, EGGS",
        spiceLevel: "4/4",
        boost: 1.1
    },
    {
        name: "Murger on the dance floor",
        image: "/images/wraps/default.png",
        ingredients: "Breaded chicken, house masala sauce, onion bhaji, mango chutney, and pickled onions in a toasted wrap.",
        calories: "770.8 Kcal",
        protein: "40.2g Protein",
        carbs: "76.1g Carbs",
        fats: "33.3g Fats",
        allergens: "GLUTEN, MILK, EGGS",
        spiceLevel: "2/4",
        boost: 1.1
    },
    {
        name: "Hert and Seoul",
        image: "/images/wraps/default.png",
        ingredients: "Breaded chicken, Korean glaze, house mayo, OG slaw, and onions in a toasted wrap.",
        calories: "722.0 Kcal",
        protein: "38.8g Protein",
        carbs: "64.9g Carbs",
        fats: "36.2g Fats",
        allergens: "GLUTEN, MILK, EGGS, SESAME",
        spiceLevel: "2/4",
        boost: 1.1
    },
    {
        name: "Mega pecker",
        image: "/images/wraps/default.png",
        ingredients: "Double chicken, hash brown, cheese, house mayo, lettuce, and onions, wrapped",
        calories: "1136.4 Kcal",
        protein: "73.8g Protein",
        carbs: "77.1g Carbs",
        fats: "63.6g Fats",
        allergens: "GLUTEN, MILK, EGGS",
        spiceLevel: "1/4",
        boost: 1.1
    },
    {
        name: "OG Grilled Peri - Peri Wrap",
        image: "/images/wraps/default.png",
        ingredients: "Grilled chicken, house mayo, lettuce, and your choice of marinade, wrapped",
        calories: "-",
        protein: "-",
        carbs: "-",
        fats: "-",
        allergens: "Depends",
        spiceLevel: "1/4",
        boost: 1.1
    },
    {
        name: "Peckers Grilled Snack Wrap",
        image: "/images/wraps/default.png",
        ingredients: "Grilled chicken, house mayo, house- made salsa,  lettuce in a 10\" wrap",
        calories: "-",
        protein: "-",
        carbs: "-",
        fats: "-",
        allergens: "-",
        spiceLevel: "0",
        boost: 1.1
    }
];

export default async function WrapsPage() {
    const wrapsData = await client.fetch(`*[_type == "wrapsPage"][0] {
    wrapsCarousel[] {
      name,
      image,
      boost,
      ingredients,
      calories,
      protein,
      carbs,
      fats,
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

    const initialWraps = wrapsData?.wrapsCarousel?.map((item) => ({
        name: item.name,
        image: item.image ? urlFor(item.image).url() : "/images/wraps/default.png",
        boost: item.boost || 1.1,
        ingredients: item.ingredients,
        calories: item.calories,
        protein: item.protein,
        carbs: item.carbs,
        fats: item.fats,
        energy: item.energy,
        allergens: item.allergens,
        spiceLevel: item.spiceLevel,
        availabilityText: item.availabilityText
    })) || DEFAULT_WRAPS_DATA;

    return (
        <WrapsPageClient initialWraps={initialWraps} initialNavbarData={navbarData} />
    );
}
