import CylinderScene from './compo/CylinderScene'
import HeroSection from './compo/HeroSection'

export default function App() {
  return (
    <div className="relative w-full h-screen">
      {/* backgroud */}
      <CylinderScene />
      {/* fourground */}
      <HeroSection position={"top-0 left-0"} />
      <HeroSection position={"bottom-0 right-0"} />
    </div>
  );
}
