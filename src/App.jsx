import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PlantGrowthRecords from './pages/PlantGrowthRecords';
import SeedGermination from './pages/SeedGermination';
import CompostingSoilMix from './pages/CompostingSoilMix';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/plant-growth-records" element={<PlantGrowthRecords />} />
        <Route path="/seed-germination" element={<SeedGermination />} />
        <Route path="/composting-soil-mix" element={<CompostingSoilMix />} />
      </Routes>
    </Router>
  );
}

export default App;
