import "./App.css";
import { Cart } from "./components/Cart";

function App() {
  const data = [
    {
      id: "1",
      date: "28/10/2020",
      logo: "https://imgs.search.brave.com/5O-ZAd6vi2RIX7U7_CH1EVeGZqjSh7AmiOUYBb2kGgA/rs:fit:1121:922:1/g:ce/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9hbWF6b24vYW1h/em9uX1BORzUucG5n",
      btnName: "Case Study",
      heading: "Amazon Gift",
      subheading: "Pay",
      devices: "Desktop - Mobile",
      color: "orange",
    },
    {
      id: "2",
      date: "28/10/2020",
      logo: "https://imgs.search.brave.com/0wd4gqzujEEvO4GhENUHcP1NuB7bxAe9MaXh72-C0iY/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9wbmdt/aW5kLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wOC9B/cHBsZS1Mb2dvLVBu/Zy1UcmFuc3BhcmVu/dC1CYWNrZ3JvdW5k/LTEucG5n",
      btnName: "Case Study",
      heading: "Apple Gift",
      subheading: "Payment",
      devices: "MacOS - Mobile",
      color: "white",
    },
  ];

  return (
    <div className="App">
      {data.map((data) => (
        <Cart key={data.id} {...data} />
      ))}
    </div>
  );
}

export default App;
