import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import RecipeSection from "./RecipeSection/RecipeSection";

function App() {

  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <RecipeSection></RecipeSection>
    </div>
  )
}

export default App;
