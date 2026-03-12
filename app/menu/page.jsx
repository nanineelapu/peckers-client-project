import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import BurgerTitleSection from "./BurgerTitleSection";
import BurgerPageText from "./BurgerPageText";

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
