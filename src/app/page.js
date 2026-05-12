import Hero from "./components/hero";
import LatestOffers from "./components/latestOffers";
import Support from "./components/support";
import PressReleases from "./components/pressReleases";

export default function Home() {
    return (
        <div>
            <Hero />
            <LatestOffers />
            <Support />
            <PressReleases />
        </div>
    )
}