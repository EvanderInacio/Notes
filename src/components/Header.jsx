import { FiLogOut } from 'react-icons/fi'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { CgNotes } from 'react-icons/cg'

export function Header({ disabled = false }) {
  return (
    <div className="bg-background-900 flex flex-col max-md:mt-2 sm:flex-row max-sm:gap-5 max-sm:pb-5 sm:justify-between h-40 sm:h-[105px] w-full border-b-2 border-background-700 px-20 items-center">
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

      <div className="hidden md:flex gap-2 justify-center items-center">
        <CgNotes className="w-8 h-8 text-emerald-900" />
        <h1 className="font-bold text-4xl text-emerald-900">Notes</h1>
      </div>

      <div className="flex gap-4 items-center">
        <button className={`${ disabled ? 'hidden' : 'block'} bg-emerald-900 p-3 text-black rounded-md flex gap-1 items-center`}>
          <BiMessageSquareAdd />
          Criar Nota
        </button>
        <div className="text-red-600 bg-transparent border-0 text-3xl cursor-pointer hover:text-red-900">
          <FiLogOut />
        </div>
      </div>
    </div>
  )
}
