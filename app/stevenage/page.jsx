import { LocationsPageContent } from "../hitchin/LocationsPageContent";
import { client } from "../../sanity/lib/client";

export const metadata = {
    title: "Peckers Stevenage | Best Halal Chicken & Peri Peri in Stevenage",
    description: "Peckers Stevenage is a top-rated chicken restaurant in Hertfordshire offering peri peri grilled chicken, fried chicken, and halal takeaway. Order online for fast delivery in Stevenage.",
    keywords: [
        "best halal food Stevenage",
        "restaurants Stevenage",
        "peri peri chicken Stevenage",
        "takeaway Stevenage",
        "Stevenage restaurants",
        "places to eat Stevenage",
        "halal chicken Stevenage",
        "late night takeaway Stevenage",
        "Peckers Stevenage"
    ]
};

export default async function StevenagePage() {
    const location = "stevenage";
    const query = `*[_type == "locationpage" && (slug.current == $location || lower(name) == lower($location))][0]{
        ...,
        "videoUrl": heroVideo.asset->url,
        "posterUrl": heroPoster.asset->url,
        heroVideoUrl
    }`;
    const data = await client.fetch(query, { location }, { useCdn: false });

    return <LocationsPageContent location={location} initialData={data} />;
}
