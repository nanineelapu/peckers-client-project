import SaucesPageClient from "./page-client";
import { client } from "../../sanity/lib/client";

export const metadata = {
    title: "House-Made Sauces | Peckers Chicken",
    description: "Explore our range of house-made sauces. From Honey Glaze BBQ to Hot Honey, we've got the perfect dip for your chicken.",
};

export default async function SaucesPage() {
    // Fetch sauces data on the server
    const saucesData = await client.fetch(`*[_type == "sauce"] | order(_createdAt asc)`);

    return <SaucesPageClient initialSaucesData={saucesData} />;
}
