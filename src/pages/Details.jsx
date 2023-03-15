import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { Tag } from '../components/Tag'

export function Details() {
  return (
    <div className="grid w-full h-screen">
      <Header />

      <main className=" overflow-y-scroll py-16 flex justify-around items-center">
        <section className="max-w-[550px]">
          <div className=" my-0 mx-auto flex flex-col">
            <h1 className="text-4xl font-medium pt-16 mb-6">Introdução ao React</h1>

            <p className="text-base mt-4 text-justify">
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

            <div className="flex gap-3 mt-20">
              <Button title="Voltar" />
              <Button title="Excluir nota" color="#f5020b" />
            </div>
          </div>
        </section>

        <section>
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
