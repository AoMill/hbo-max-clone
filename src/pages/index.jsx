import Cabecalho from "./components/cabecalho";
// import Navbar from "./components/nav";
// import styles from "@/styles/Home.module.css"
import Ofertas from "./components/ofertas";
import CardFilm from "./components/cardfilm";

export default function Home() {
  return (
    <>
    {/* <nav className={styles.container}>
      <Navbar />
    </nav> */}
      <Cabecalho />
      <Ofertas />
      <CardFilm />
     
   
    </>
  )
}
