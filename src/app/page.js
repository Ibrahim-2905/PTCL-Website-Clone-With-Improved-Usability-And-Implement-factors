import Hero from "./components/hero";
import LatestOffers from "./components/latestOffers";
import Support from "./components/support";
import PressReleases from "./components/pressReleases";
import PlayStoreSection from "./components/playStoreSection";
import Footer from "./components/footer";

export default function Home() {
    return (
        <div>
            <Hero />
            <LatestOffers />
            <Support />
            <PressReleases />
            <PlayStoreSection />
            <Footer />
        </div>
    )
}