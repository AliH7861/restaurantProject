import Navbar from "../components/Navbar";
import DashboardPreview from "../components/DashboardPreview";
import Footer from "../components/Footer";
import WeatherHighlights from "../components/WeatherSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-dark text-foreground overflow-x-hidden flex flex-col">
      <Navbar />
      <WeatherHighlights/>
      <DashboardPreview/>
      <Footer />
    </div>
  );
}
