import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return (
    <div className="flex justify-between h-[105px] w-full border-b-2 border-background-700 px-20 items-center">
      <div className="flex items-center">
        <img
          className="w-14 h-14 rounded-full"
          src="https://github.com/EvanderInacio.png"
          alt="Foto do usuário"
        />
        <div className="flex flex-col ml-4 leading-relaxed">
          <span className="text-sm text-gray-100"> Bem vindo, </span>
          <strong className="text-lg text-white-800"> Evander Inacio </strong>
        </div>
      </div>

      <div className='text-gray-100 bg-transparent border-0 text-4xl cursor-pointer hover:text-gray-500'>
        <RiShutDownLine />
      </div>
    </div>
  )
}
