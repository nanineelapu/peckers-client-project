import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import BurgerTitleSection from "./BurgerTitleSection";
import BurgerPageText from "./BurgerPageText";

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

export default async function MenuPage() {
  const menuData = await client.fetch(`*[_type == "menuPage"][0] {
    burgerCarousel[] {
      name,
      image,
      boost
    },
    subtitle,
    protein,
    carbs,
    fats,
    calories,
    energy,
    allergens,
    spiceLevel,
    availabilityText
  }`);

  if (!menuData) return null;

  const initialBurgers = menuData.burgerCarousel?.map((item) => ({
    name: item.name,
    image: urlFor(item.image).url(),
    boost: item.boost || 1,
  })) || [];

  const navbarData = await client.fetch(`*[_type == "menuNavbar"][0].menuItems[] {
    title,
    link,
    isActive
  }`);

  return (
    <>
      <BurgerTitleSection initialBurgers={initialBurgers} initialNavbarData={navbarData} />
      <BurgerPageText initialData={menuData} />
    </>
  );
}
