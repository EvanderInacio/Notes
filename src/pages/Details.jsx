import { Section } from '../components/Section'
import { Tag } from '../components/Tag'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'

export function Details() {
  return (
    <div className="grid w-full h-screen">
      <header className='w-full h-40 bg-background-800 flex items-center justify-center'>
        <div className='w-screen max-w-6xl h-auto bg-background-750 mt-40 rounded-2xl pb-20'>
          <div className='flex justify-between pt-4'>
            <a href="" className='pl-4 flex items-center gap-1 text-emerald-900'><AiOutlineArrowLeft /> Voltar</a>

            <a href="" className='pr-4 flex items-center gap-1 text-red-900 hover:text-red-800'><RiDeleteBin6Line /> Excluir Nota</a>
          </div>

          <h2 className="text-4xl text-center font-medium pt-5">
            Introdução ao React
          </h2>

        </div>
      </header>

      <main className="relative pt-10 pb-20 flex flex-col lg:flex-row justify-around items-center mt-32">
        <section className="max-w-[550px] max-lg:mb-10">
          <div className="mx-auto flex flex-col">
            

            <p className="text-base mx-2 mt-4 text-center lg:text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              odit natus iusto a sapiente nobis nihil sit impedit non? Eius
              quaerat necessitatibus quod voluptatibus praesentium sit ipsum
              magnam doloribus at. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ipsa ex repellat quo, amet expedita omnis
              obcaecati consequuntur! Quibusdam veniam quas incidunt aliquam
              fugit vitae, expedita in quis, cupiditate iusto harum.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ducimus molestias repellendus facere eius exercitationem id accusamus ut libero omnis dicta quos ipsum, accusantium vitae ullam commodi! Est, libero praesentium?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque sunt nulla laborum quod unde, dolorem harum optio totam cumque blanditiis saepe tempore eveniet facere expedita aperiam nam eligendi atque ab.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque sunt nulla laborum quod unde, dolorem harum optio totam cumque blanditiis saepe tempore eveniet facere expedita aperiam nam eligendi atque ab.
            </p>
          </div>
        </section>

        <section className=''>
          <div className="flex flex-col gap-6">
            <Section title="Links úteis">
              <ul className="list-none mt-3 text-white-800">
                <li>
                  <a href="">https://evander.vercel.app/</a>
                </li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </Section>

            <Section title="Marcadores">
              <Tag title="express" />
              <Tag title="nodejs" />
            </Section>
          </div>
        </section>
      </main>
    </div>
  )
}
