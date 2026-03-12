
import { client } from "../../sanity/lib/client";
import TheJourneyPageClient from "./page-client";

export const metadata = {
    title: "The Journey | Our Story | Peckers Chicken - Better Than the Competition",
    description: "Discover the journey of Peckers, the premium alternative to Chicken George and Dave's Hot Chicken. From our humble beginnings in Hitchin to becoming Hertfordshire's top-rated destination for Seriously Good Chicken.",
    keywords: [
        "Peckers story",
        "best chicken Hertfordshire history",
        "Chicken George vs Peckers",
        "Dave's Hot Chicken UK origins",
        "halal chicken background",
        "Peckers Hitchin history",
        "seriously good chicken journey"
    ]
};

export default async function TheJourneyPage() {
    // Fetch all story related data on the server
    const storyData = await client.fetch(`{
        "pageData": *[_type == "ourStoryPage"][0]{
            heading,
            content,
            quote,
            founderImage {
                asset->{
                    _id,
                    url
                }
            },
            circleSectionHeading,
            establishedYear,
            timeline
        },
        "bottomPageData": *[_type == "ourStoryBottomPage"][0]{
            journeySection,
            mobileRoadmap
        },
        "bottomTimeline": *[_type == "timeline"] | order(order asc)
    }`);

    return <TheJourneyPageClient initialStoryData={storyData} />;
}
