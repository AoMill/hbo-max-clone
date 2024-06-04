import Image from "next/image"
import styles from "./navbar.module.css"
import { useRouter } from "next/navigation"

export default function Navbar() {
    const router = useRouter()
    function click(){
        router.push("/login")
    }
    function clickHome(){
        router.push("/")
    }
    return (
        <nav className={styles.container}>
            <div className={styles.logo} onClick={clickHome}>
                <Image src={"https://raw.githubusercontent.com/micheleambrosio/hbomax/85ffeaba746bdecaf8a9e4785da6135864cb60f9/assets/images/hbo-logo.svg"}
                    width={160}
                    height={27}
                    alt="Logo HBO"
                />
            </div>
            <div className={styles.options}>
                <p className={styles.entrar} onClick={click}>ENTRAR</p>
                <button className={styles.b_nav}>ASSINE AGORA</button>
            </div>
        </nav>
    )
}
