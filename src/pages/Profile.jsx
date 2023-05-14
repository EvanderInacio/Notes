import { Input } from '../components/Input'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <div className="w-full mb-12">
      <header className="w-full h-36 bg-background-750 flex max-sm:flex-col  items-center p-[0_124px]">
        <Link className="text-gray-100 text-2xl max-sm:mt-4 " to="/">
          <AiOutlineArrowLeft />
        </Link>
      </header>

      <div className='relative m-[-95px_auto_32px] w-48 h-48 '>
        <img
          className='w-48 h-48 rounded-full max-sm:mt-5' 
          src="https://github.com/EvanderInacio.png" 
          alt="foto usuario" 
        />

        <label 
          className='w-12 h-12 bg-orange-800 rounded-full flex items-center justify-center absolute bottom-2 right-2 cursor-pointer'
          htmlFor="avatar"
        >
          <FiCamera className='w-5 h-5 text-black font-semibold' />

          <input
            className='hidden' 
            id='avatar' 
            type='file' 
          />
        </label>
      </div>

      <form className='max-w-sm m-[30px_auto_0] max-sm:px-2'>
        <Input placeholder="Nome" type="text" icon={FiUser} />

        <Input placeholder="Email" type="text" icon={FiMail} />
        
        <div className='mt-10' />

        <Input placeholder="Senha atual" type="password" icon={FiLock} />

        <Input placeholder="Nova senha" type="password" icon={FiLock} />

        <Button title={'Salvar'} />

      </form>
    </div>
  )
}
