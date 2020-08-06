import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/37755163?s=460&u=6953bac7835b8b306013b853d83a3ebabc8c9196&v=4" alt="Isaac Aguiar"/>
                <div>
                    <strong>Isaac Aguiar</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br/><br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas
                através de experiências. Mais de 200.000 pessoas já passaram por uma de suas
                explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$20,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
                
            </footer>
        </article>
    )
}

export default TeacherItem