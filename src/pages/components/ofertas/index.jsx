import styles from "./cards.module.css"
import CardsOferta from "./cards/cardOfe"


export default function Ofertas() {
  return (
    <main className={styles.container}>
      <div className={styles.conteudo}>
        <p className={styles.tituloOfert}>Conheça nossos planos e economizena assinatura trimestral ou anual com o pagamento antecipado.</p>
        <section className={styles.ofert}>
          <div className={styles.mobile}>
          <CardsOferta 
          titulo={"Mobile"}
          valor={"19,90"}
           >
            <ul className={styles.lista}>
              <li className={styles.lista}>Aproveite em smartphones e tablets, onde quiser.</li>
              <li>Assista em 1 tela por vez.</li>
              <li> Tenha conteúdo em resolução adaptada para cada dispositivo.</li>
              <li>Baixe suas séries e filmes favoritos, assista onde e quando
                  quiser. </li>
            </ul>
          </CardsOferta>
          </div>
          <div className={styles.mult}>
          <CardsOferta
          titulo={"Multitelas"}
          valor={"27,90"}
          >
            <ul>
              <li> Aproveite em todos os seus dispositivos.</li>
              <li> Chromecast e Airplay disponíveis.</li>
              <li> Assista em até 3 telas ao mesmo tempo.</li>
              <li>Tenha conteúdo em alta definição, com qualidade 4K. </li>
              <li>Baixe suas séries e filmes favoritos, assista onde e quando
                    quiser.</li>
              <li>Crie até 5 perfis diferentes.</li>
            </ul>

          </CardsOferta>
          </div>
        </section>
      </div>
    </main>
  )
}
