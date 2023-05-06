import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { Tag } from '../components/Tag'

export function Details() {
  return (
    <div className="grid w-full h-screen">
      <Header />

      <main className="relative py-1 flex flex-col lg:flex-row justify-around items-center">
        <section className="max-w-[550px] max-lg:mb-10">
          <div className="mx-auto flex flex-col">
            <h1 className=" text-3xl md:text-4xl text-center font-medium pt-24 mb-6">Introdução ao React</h1>

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

            <div className="flex flex-col lg:flex-row gap-3 mt-20">
              <Button title="Voltar" />
              <Button title="Excluir nota" color="#f5020b" />
            </div>
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
