import React from 'react'
import './Subscribe.css'

class Subscribe extends React.Component {
    render() {
        return (
            <div className='subscribe'>
                <div className='subscribe_text'>
                    Підпишіться на наші новини
                </div>
                <form className='subscribe_inputs'>
                    <input type='email' required placeholder='Ваш Email' />
                    <button className='subscribe_button'>
                        Підписатись
                    </button>
                </form>
            </div>
        )
    }
}

export default Subscribe