import { Dash } from '../components/Dash'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { FaSearch } from 'react-icons/fa'
import { Note } from '../components/Note'
import { Section } from '../components/Section'

export function Home() {
  return (
    <main className="w-full h-screen grid bg-background-900">
      <Header />
      <section className="grid sm:grid-cols-[210px_auto] md:grid-cols-[260px_auto]">
        <Dash />
        <div className="flex flex-col items-center max-sm:mb-52 sm:mt-8 px-4 sm:px-8 md:px-10">
          <Input placeholder="Pesquisar pelo título" icon={FaSearch} />

          <h2 className='my-6 text-gray-100 font-medium text-xl'>Minhas Notas</h2>
          <Note
            data={{
              title: 'React',
              tags: [
                {id: '1', name: 'React'},
                {id: '2', name: 'Tailwind'},
              ]
            }}
          />
        </div>
      </section>
    </main>
  )
}
