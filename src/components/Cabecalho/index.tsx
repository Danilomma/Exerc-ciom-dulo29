import { type } from 'os'
import styles from './Cabecalho.module.css'

type Props = {
  children: string
}

const Cabecalho = (props: Props) => (
  <header className={styles.cabecalho}>
    <h1>{props.children}</h1>
  </header>
)

export default Cabecalho
