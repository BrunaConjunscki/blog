import './Banner.modules.css'
import circuloColorido from 'assets/circuloColorido.png'
import minhaFoto from 'assets/foto_home.png'

export default function Banner(){
    return (
        <div className='banner'>
            <div className='apresentacao'>
                <h1>Hello, World!</h1>
                <p className='paragrafo'>Boas vindas ao meu espaço pessoal! Sou Bruna Conjunscki, estudante de Engenharia de Software na UEPG. Aqui compartilho projetos e ideias que refletem minha paixão por  inovação e aprendizado constante ;) </p>
            </div>

            <div className='imagens'>
                <img 
                    className='circuloColorido'
                    src={circuloColorido} 
                    aria-hidden={true}
                    alt="Circulo colorido"/>
                <img
                    className='minhaFoto'
                    src={minhaFoto}
                    alt="Foto da Bruna Conjunscki sorrindo"
                />
            </div>

        </div>
    )
}