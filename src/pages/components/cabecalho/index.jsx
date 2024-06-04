import Image from 'next/image'
import styles from './cabecalho.module.css'

export default function Cabecalho() {
  return (
   <header className={styles.container}>
    <section className={styles.conteudo}>
        <div className={styles.canais}>
            <img className={styles.canal} src={"/assets/hbo.png"}  alt='logo hbo'/>
            <img className={styles.canal} src={"/assets/dc.png"}  alt='logo cartoon'/>
            <img className={styles.canal} src={"/assets/wb.png"}  alt='logo hbo'/>
            <img className={styles.canal} src={"/assets/cartoon-network_neutral.png"}  alt='logo hbo'/>
            <img className={styles.canal} src={"/assets/max_originals.png"} alt='logo hbo'/>
        </div>
        <div className={styles.texto}>
            <span className={styles.span}>CURTA AS MELHORES HISTÓRIAS</span>
           <h1 className={styles.titulo}>
            PARA TODO MUNDO
           </h1>
        </div>
        <div className={styles.borda}></div>
        <div className={styles.obs}>
            <p className={styles.desc}>Assinaturas a partir de <span className={styles.preco}>R$14,15</span> /mes</p>
            {/* <span className={styles.preco}>R$14,15 <span>/mes</span></span> */}
            <button className={styles.botao}>ASSINE AGORA</button>
            <p className={styles.text}>aplicavel ao plano anual com o pagamento antecipado</p>
        </div>
    </section>
   </header>
  )
}
