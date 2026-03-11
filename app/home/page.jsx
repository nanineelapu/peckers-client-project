import { client } from "../../sanity/lib/client";
import HomePageClient from "./page-client";

export const metadata = {
  title: "Peckers | Best Halal Peri Peri & Fried Chicken in Stevenage & Hitchin",
  description: "Peckers is your premium destination for the best peri peri grilled chicken, wings, and halal takeaway in Stevenage and Hitchin. Offering family meals, late night food, and fast delivery across Hertfordshire.",
};

export default async function HomePage() {
  // Fetch homepage data on the server
  const homepageData = await client.fetch(`*[_type == "homepage"][0]{
        "videoUrl": heroVideo.asset->url,
        "posterUrl": heroPoster.asset->url,
        heroTitle,
        heroSubtitle,
        heroImage,
        locationsHeading,
        locationsSubtitle,
        journalHeading,
        journalSubtitle,
        journalCaption,
        ratingSection,
        signupSection {
          ...,
          backgroundImage {
            asset -> {
              _id,
              url
            }
          }
        }
    }`);

  // Fetch slider cards data on the server (for LatestNewsCards)
  const sliderCards = await client.fetch(`*[_type == "sliderCard"] | order(order asc) {
    _id,
    title,
    image,
    order
  }`);

  // Fetch locations data on the server (for CoopImages)
  const locationsList = await client.fetch(`*[_type == "location"]{
    _id,
    name,
    image {
      asset->{
        _id,
        url
      }
    }
  }`);

  // Fetch person details data on the server
  const personDetails = await client.fetch(`*[_type == "homepagePersonDetails"][0] {
    heading,
    description,
    buttonText,
    "imageUrl": image.asset->url
  }`);

  // Fetch reviews data on the server
  const reviews = await client.fetch(`*[_type == "review"]`);

  return <HomePageClient
    initialHomepageData={homepageData}
    initialSliderCards={sliderCards}
    initialLocations={locationsList}
    initialPersonDetails={personDetails}
    initialReviews={reviews}
  />;
}
