import Hero from "./components/hero";
import LatestOffers from "./components/latestOffers";
import Support from "./components/support"

export default function Home() {
    return (
        <div>
            <Hero />
            <LatestOffers />
            <Support />
        </div>
    )
}