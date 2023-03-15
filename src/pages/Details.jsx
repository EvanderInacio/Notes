import { Button } from "../components/Button";
import { ButtonText } from "../components/ButtonText";
import { Header } from "../components/Header";
import { Section } from "../components/Section";
import { Tag } from "../components/Tag";

export function Details() {
  return (
    <div className="grid w-full h-screen">
      <Header />
      <ButtonText title="Excluir nota" />

      <Section title="Links úteis">
        <ul className="list-none mt-3 text-white-800">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="nodejs"/>
      </Section>


      <Button title="Voltar" />
    </div>
  )
}