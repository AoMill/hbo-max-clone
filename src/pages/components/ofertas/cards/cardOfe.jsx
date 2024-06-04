import styles from "./CardsOfe.module.css"
import React from 'react'

export default function CardsOferta({ titulo, valor, children}) {
    return (
        <section className={styles.container} >
            <div className={styles.conteudo} >
                <div className={styles.cabecalho} >
                    <p className={styles.titulo}>{titulo}</p>
                    <p className={styles.me}><span className={styles.valors}>R$ {valor}</span> /mes</p>
                </div>
                <div className={styles.lista}>
                {children}
                </div>
                <button className={styles.b_cardO}>ESCOLHER O PLANO {titulo}</button>
            </div>
        </section>
    )
}
