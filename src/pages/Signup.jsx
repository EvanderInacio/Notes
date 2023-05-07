import { CgNotes } from 'react-icons/cg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'

export function Signup() {
  return (
    <div className="h-full flex items-center justify-center mt-14">
      <form className="px-2 flex flex-col justify-center items-center text-center">
        <div className="flex gap-2 justify-center items-center">
          <CgNotes className="w-8 h-8 text-orange-800" />
          <h1 className="font-bold text-4xl text-orange-800">Notes</h1>
        </div>
        <p className='text-sm text-gray-100'>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2 className='text-2xl mt-16 mb-6'>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <a 
          href="#" 
          className='mt-12 text-orange-800'
        >
          Voltar para o login
        </a>
      </form>
    </div>
  )
}
