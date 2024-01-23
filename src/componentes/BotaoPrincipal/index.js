import styles from './BotaoPrincipal.module.css'

export default function Botaoprincipal({children, tamanho}){
    return( <button className={`${styles.botao} ${styles[tamanho]}`}>
        {children}
    </button> )
}
