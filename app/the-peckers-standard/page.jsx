import { client } from "../../sanity/lib/client";
import UniquenessPageClient from "./page-client";

export const metadata = {
    title: "The Peckers Standard | Our Uniqueness | Peckers Chicken",
    description: "What makes Peckers unique? Learn about our high standards, fresh ingredients, and commitment to serving the best chicken.",
};

export default async function UniquenessPage() {
    // Fetch all uniqueness related data on the server
    const data = await client.fetch(`{
        "landingData": *[_type == "uniquenessLanding"][0],
        "sectionsData": *[_type == "uniquenessSubSection"][0].sections
    }`);

    return <UniquenessPageClient initialData={data} />;
}
