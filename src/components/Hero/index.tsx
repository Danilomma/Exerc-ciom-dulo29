import styles from './Hero.module.css'
import { Type } from 'typescript'

type Props = {
  children: string
}

const Hero = (props: Props) => (
  <form className={styles.form}>
    <div className="container">
      <h2 className={styles.heroTitle}>{props.children}</h2>
    </div>
  </form>
)

export default Hero
