import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Textarea } from '../components/Textarea'
import { NoteItem } from '../components/NoteItem'
import { Button } from '../components/Button'

export function New() {
  return (
    <div className="w-full h-screen grid grid-rows-[105px_auto]">
      <Header disabled />

      <main>
        <form className="max-w-xl m-[38px_auto]">
          <header className="flex items-center justify-between mb-9">
            <h1 className="text-xl">Criar nota</h1>
            <a className=" text-gray-100 flex items-center gap-1" href="/">
              <AiOutlineArrowLeft /> Voltar
            </a>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <div className="mt-10">
            <h2 className="pb-2 mb-6 text-gray-100 font-normal text-xl border-b-2 border-gray-300">
              Links Úteis
            </h2>

            <NoteItem value="teste" />
            <NoteItem isNew placeholder="Novo link" />
          </div>

          <div className="my-10 ">
            <h2 className="pb-2 mb-6 text-gray-100 font-normal text-xl border-b-2 border-gray-300">
              Marcadores
            </h2>

            <div className='flex justify-between flex-wrap'>
              <NoteItem value="tag" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </div>

          <Button title="Salvar" />
        </form>
      </main>
    </div>
  )
}
