import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeal from "./components/Meals/AvaliableMeal";
function App() {
  return (
    <div>
      <Header/>
      <MealsSummary/>
      <AvailableMeal/>
    </div>
  );
}

export default App;
