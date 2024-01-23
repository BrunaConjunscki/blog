import'./Rodape.modules.css'
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg'

export default function Rodape(){
    return(
        <footer className='rodape'>
            <MarcaRegistrada/>
            Desenvolvido por Bruna Conjunscki
        </footer>
    )
}