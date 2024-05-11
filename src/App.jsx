// import Modbus from "./components/Modbus"
import ReadRecipe from "./components/ReadRecipe";
import WriteRecipe from "./components/WriteRecipe";
import "./App.css";
import "./index.css";
function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-7xl mx-auto w-full p-4 bg-gradient-to-r from-slate-400 to-slate-300 rounded max-h-screen border border-black">
        <h1 className="text-center p-1 font-semibold text-xl border-2 rounded bg-white border-red-500">
          Machine-to-Machine Recipe Transfer
        </h1>
        <ReadRecipe />
        <WriteRecipe />
      </div>
    </div>
  );
}

export default App;
