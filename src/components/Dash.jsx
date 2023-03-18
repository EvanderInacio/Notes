import { ButtonText } from "./ButtonText";

export function Dash() {
  return (
    <div className="h-screen w-[250px] bg-background-900 relative">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-4xl mt-7 text-orange-800">Notes</h1>
      </div>

      <div className="flex justify-center items-center flex-col mt-28 gap-4">
        <ButtonText title="Todos" />
        <ButtonText title="React" />
        <ButtonText title="Node" />

      </div>

      <button className="absolute bottom-0 w-full bg-orange-800 p-7 text-black">buttom</button>
    </div>
  )
}