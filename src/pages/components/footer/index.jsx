import styles from "./Footer.module.css"
import React from 'react'

export default function Footer() {
  return (
    <footer className={styles.container}>
        <div className={styles.conteudoLinks}>
        <a className={styles.links} href="https://www.hbomax.com/br/pt/sitemap">
          Agora na HBO Max</a>
        <a className={styles.links} href="https://www.hbomax.com/br/pt/coming-soon">
          Em breve</a>
        <a className={styles.links} href="https://www.hbomax.com/br/pt/feature">
          Filme em destaque</a>
        <a className={styles.links} href="https://www.hbomax.com/br/pt/series"
          >Séries</a>
        <a className={styles.links} href="https://help.hbomax.com/br">Ajuda</a>
        </div>
        <p className={styles.descFooter}>
        © 2022 WarnerMedia Direct Latin America, LLC. Todos os direitos
        reservados. HBO Max é usado sob licença.
      </p>
      <div className={styles.RSociais}>
        <a
          href="https://www.facebook.com/HBOMaxBr/"
          className="footer__social-link">
          <img src="assets/logos/fb_0.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com/HBOMaxBR" className="footer__social-link">
          <img src="assets/logos/twitter_0.png" alt="Twitter" />
        </a>
        <a
          href="https://www.instagram.com/hbomaxbr/"
          className="footer__social-link">
          <img src="assets/logos/instagram_0.png" alt="Instagram" />
        </a>
        <a
          href="https://www.youtube.com/c/hbomaxbr"
          className="footer__social-link">
          <img src="assets/logos/youtube_0.png" alt="Youtube" />
        </a>
      </div>
        
    </footer>
  )
}
