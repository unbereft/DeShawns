import { getGreeting } from "./apiManager";
import { useEffect, useState } from "react";
import { AllDogs } from "./components/Dogs/AllDogs";

//TODO: All dogs rendered on Home page

export default function Home() {
  const [greeting, setGreeting] = useState({
    message: "Here is a list of dogs currently in our care:",
  });

  useEffect(() => {
    getGreeting()
      .then(setGreeting)
      .catch(() => {
        console.log("API not connected");
      });
  }, []);

  return (
    <div className="home-container">
      <p>{greeting.message}</p>
      <AllDogs />
    </div>
  )
}
