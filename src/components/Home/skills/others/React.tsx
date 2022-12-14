import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";

export const Reactjs = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root
      className="CollapsibleRoot"
      open={open}
      onOpenChange={setOpen}
    >
      <div>
        <Collapsible.Trigger className="CollapsibleTrigger">
          <button className="Button">
            <img src="/react.png" alt="" className="IMG" />
            <h2 className="Title">React.js</h2>
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content>
          <div className="Dgrid">
            <h2 className="H2">Formação</h2>
            <p className="P">
              inicialmente aprendi enquanto participei e fiz o projeto do evento
              NLW da RocketSeat, mas principalmente com documentação e youtube
              durante o desenvolvimento desse website. Posteriormente, alcancei
              o modulo de React no curso Discover - Especializar.
            </p>
          </div>

          <div className="Dgrid">
            <h2 className="H2">Prática</h2>
            <p className="P">
              Desenvolvi um projeto utilizando React.js, sendo um sistema para
              jogadores online encontrarem equipes, no NLW Ignite eSports,
              evento promovido pela RocketSeat.
            </p>
            <p className="P">
              Utilizei React.js, no desenvolvimento desse website, também de
              componentes a biblioteca de componentes Radix UI
            </p>
            <p className="P">
              Utilizei React.js no desenvolvimento desse site, também de
              componentes a biblioteca de componentes Radix UI
            </p>
          </div>

          <div className="Dgrid">
            <h2 className="H2">Projetos</h2>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://github.com/Ldragk/NLW-Ignite-2022"
            >
              <p className="Proj">NLW Ignite eSports </p>
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://github.com/Ldragk/Portfolio"
            >
              <p className="Proj">Este site portfólio</p>
            </a>
          </div>

          <div className="Dgrid">
            <h2 className="H2">Ferramentas</h2>
            <div className="Ferramentas">
              <img className="Fimg" src="/radix.png" alt="" />
              <p className="P">Radix UI</p>
            </div>
          </div>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
