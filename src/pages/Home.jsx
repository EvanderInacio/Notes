import { Dash } from "../components/Dash";
import { Header } from "../components/Header";

export function Home() {
  return (
    <div className="w-full h-screen grid grid-cols-[250px_auto] bg-background-800">
      <Dash />
      <Header />
    </div>
  )
}