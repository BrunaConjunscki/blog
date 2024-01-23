import PostModelo from 'componentes/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/foto_sobre_mim.png'

export default function SobreMim(){
    return(
        <PostModelo fotoCapa={fotoCapa}
                    titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Bruna!
            </h3>
            <img 
                src={fotoSobreMim}
                alt='Foto da Bruna Conjunscki sorrindo'
                className={styles.fotoSobreMim}
            />
        <p className={styles.paragrafo}> Oi, tudo bem? Sou uma engenheira de software em formação, fico feliz em te ver aqui!</p> 

        <p className={styles.paragrafo}>  Minha trajetória na programação teve início na Universidade Estadual de Ponta Grossa (UEPG), onde decidi seguir carreira nessa área fascinante. Durante meu curso, adquiri conhecimentos em lógica de programação e dominei diversas linguagens, como C, C++, Java, mas desenvolvi um interesse especial em Front-End e UX/UI. Sempre apreciei a harmonia entre tecnologia e criatividade.</p>

        <p className={styles.paragrafo}>Antes de me tornar desenvolvedora, fui professora de inglês, aprimorando habilidades interpessoais. Essa experiência enriquecedora foi crucial para conquistar meu estágio desejado no campo da tecnologia, onde integrei conhecimentos técnicos e competências interpessoais para impulsionar minha carreira.</p>

        <p className={styles.paragrafo}>Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.</p>

        <p className={styles.paragrafo}>Atualmente, estou imersa em projetos práticos que me desafiam a aplicar meus conhecimentos e aprimorar minhas habilidades. Estou animada para explorar ainda mais o mundo da engenharia de software, especialmente no âmbito do Front-End, onde posso combinar minha paixão por tecnologia com a expressão criativa.</p>

        </PostModelo>
    )
}