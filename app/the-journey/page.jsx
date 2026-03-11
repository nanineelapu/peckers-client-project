import { client } from "../../sanity/lib/client";
import TheJourneyPageClient from "./page-client";

export const metadata = {
    title: "The Journey | Our Story | Peckers Chicken",
    description: "Discover the journey of Peckers, from our humble beginnings to becoming a premium destination for Seriously Good Chicken.",
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
