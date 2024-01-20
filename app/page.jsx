import AllComponents from "./Components/Main/page";
import { Navbar } from "./Components/Navbar/page";
import "./main.css";

export default function Home() {
  return (
    <body className="h-[3500px] warna">
      <Navbar />
      <AllComponents />
    </body>
  );
}
