import { LocationsPageContent } from "./LocationsPageContent";
import { client } from "../../sanity/lib/client";

export const metadata = {
    title: "Peckers Hitchin | Best Halal Chicken Takeaway & Restaurant in Hitchin",
    description: "Peckers Hitchin offers the best peri peri grilled chicken, wings, and halal food in Hitchin. Visit our original location for a seriously good chicken experience. Late night takeaway available.",
    keywords: [
        "halal food Hitchin",
        "best chicken Hitchin",
        "peri peri Hitchin",
        "takeaway Hitchin",
        "restaurants Hitchin",
        "chicken shop Hitchin",
        "late night takeaway Hitchin",
        "Peckers Hitchin"
    ]
};

export default async function LocationPage() {
    const location = "hitchin";
    const query = `*[_type == "locationpage" && (slug.current == $location || lower(name) == lower($location))][0]{
        ...,
        "videoUrl": heroVideo.asset->url,
        "posterUrl": heroPoster.asset->url,
        heroVideoUrl
    }`;
    const data = await client.fetch(query, { location }, { useCdn: false });

    return <LocationsPageContent location={location} initialData={data} />;
}