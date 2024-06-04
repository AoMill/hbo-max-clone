import styles from  "./Form.module.css"

export default function Form() {
  return (
    <form action="" className={styles.formulario}>
        <div className={styles.container}>
            <p className={styles.titulo}>ENTRAR</p>
            <span className={styles.span}>Você tem uma conta da HBO Max?</span>
            <input className={styles.inputs} type="email" placeholder="E -mail"/>
            <input className={styles.inputs} type="password" placeholder="Senha" minLength="8"/>
            <div >
                <button className={styles.botao}>ENTRAR</button>
                <span className={styles.esqsenha}>Esqueceu a senha ?</span>
            </div>
        </div>
    </form>
  )
}
