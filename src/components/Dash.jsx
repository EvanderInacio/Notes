import { BsTags } from 'react-icons/bs'
import { ButtonText } from './ButtonText'

export function Dash() {
  return (
    <div className="w-[200px] md:w-[250px] h-screen bg-background-900 hidden sm:block border-r-2 border-background-700">
      <h2 
        className='font-bold text-3xl text-gray-100 mt-16 flex gap-[5px] justify-center items-center'
      >
        <BsTags /> Tags
      </h2>
      <div className="flex justify-center items-center flex-col mt-8  gap-4">
        <ButtonText title="Todos" />
        <ButtonText title="React" />
        <ButtonText title="Node" />
      </div>
    </div>
  )
}
