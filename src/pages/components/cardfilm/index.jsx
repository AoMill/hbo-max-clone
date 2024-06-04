import styles from "./cardFilm.module.css"

export default function CardFilm() {
  return (
    <aside className={styles.container}>
      <p className={styles.titulo}>Descubra novos universos</p>
      <div className={styles.conteudo}>
        <div className={styles.conteudoCard}>
          <img className={styles.conteudoImg} src="/assets/imgfilm/hbo-Default_0.png" alt="" />
        </div>
        <div className={styles.conteudoCard}>
          <img className={styles.conteudoImg} src="/assets/imgfilm/MAX-Default.png" alt="" />
        </div>
        <div className={styles.conteudoCard}>
          <img className={styles.conteudoImg} src="/assets/imgfilm/DC_Default.png" alt="" />
        </div>
        <div className={styles.conteudoCard}>
          <img className={styles.conteudoImg} src="/assets/imgfilm/WB-Default.png" alt="" />
        </div>
        <div className={styles.conteudoCard}>
          <img className={styles.conteudoImg} src="/assets/imgfilm/CN-Default.png" alt="" />
        </div>
        <div className={styles.conteudoCard}>
          <img className={styles.conteudoImg} src="/assets/imgfilm/UCL-Default.png" alt="" />
        </div>
      </div>
    </aside>
  )
}
