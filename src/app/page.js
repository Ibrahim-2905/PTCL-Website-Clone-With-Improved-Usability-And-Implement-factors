import Hero from "./components/hero";
import LatestOffers from "./components/latestOffers";
import Support from "./components/support";
import PressReleases from "./components/pressReleases";
import PlayStoreSection from "./components/playStoreSection";

export default function Home() {
    return (
        <div>
            <Hero />
            <LatestOffers />
            <Support />
            <PressReleases />
            <PlayStoreSection />
        </div>
    )
}