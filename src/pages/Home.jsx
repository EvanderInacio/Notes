import { Dash } from "../components/Dash";
import { Header } from "../components/Header";

export function Home() {
  return (
    <div className="w-full h-screen grid bg-background-800">
      <Header />
      <Dash />
    </div>
  )
}