import { CgNotes } from 'react-icons/cg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'

export function Signin() {
  return (
    <div className="h-full flex items-center justify-center mt-14">
      <form className="px-2 flex flex-col justify-center items-center text-center">
        <div className="flex gap-2 justify-center items-center">
          <CgNotes className="w-8 h-8 text-emerald-900" />
          <h1 className="font-bold text-4xl text-emerald-900">Notes</h1>
        </div>
        <p className='text-sm text-gray-100'>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2 className='text-2xl mt-10 mb-6'>Faça seu Login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <span className='mt-12 text-gray-400'>Não tem uma conta?</span>
        <a 
          href="#" 
          className='text-emerald-900 border-[2px] border-gray-600 rounded-md mt-1 p-2 hover:border-emerald-900 brightness-100'
        >
          Criar conta
        </a>
      </form>
    </div>
  )
}
