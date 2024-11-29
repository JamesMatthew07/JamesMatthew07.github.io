import FeaturesSection from "@/components/blocks/features-section-demo-3";
import AboutMe from "@/components/molecules/AboutMe";
import FloatingDock from "@/components/molecules/FloatingDock";
import { GridBackground } from "@/components/molecules/GridBackground";
import MapEmbed from "@/components/molecules/Map";
import TechStack from "@/components/molecules/TechStack";
import Videos from "@/components/molecules/Videos";

export default function Page() {
  return (
    <>
    <div className="select-none">
      <GridBackground />
      <AboutMe/>
      <TechStack/>
      <div className="bg-black">
      <FeaturesSection/>
      <Videos>
      </Videos>
      <MapEmbed></MapEmbed>
      </div>
      <FloatingDock />
  <div className="py-3 bg-black">
    <div className="d-flex justify-content-center align-items-center ">
    </div>
    <div>
      <p className="text-center m-0 text-white"><i className="bi bi-c-circle"></i> @james.dev</p>
    </div>
  </div>
      </div>
    </>
  );
}