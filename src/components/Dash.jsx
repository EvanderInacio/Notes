import { ButtonText } from './ButtonText'

export function Dash() {
  return (
    <div className="w-[200px] md:w-[250px] h-screen bg-background-900 hidden sm:block border-r-2 border-background-800">
      <div className="flex justify-center items-center flex-col mt-28 gap-4">
        <ButtonText title="Todos" />
        <ButtonText title="React" />
        <ButtonText title="Node" />
      </div>
    </div>
  )
}
