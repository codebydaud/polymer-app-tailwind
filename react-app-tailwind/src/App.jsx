import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NameCard from "./components/NameCard";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div className="flex justify-center">
      <SignUpForm />
    </div>
  );
}

export default App;
