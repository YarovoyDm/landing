import React from 'react'
import './Subscribe.css'

class Subscribe extends React.Component {
    render() {
        return (
            <div className='subscribe'>
                <div className='subscribe_text'>
                    Підпишіться на наші новини
                </div>
                <div className='subscribe_inputs'>
                    <input placeholder='Ваш Email' />
                    <div className='subscribe_button'>
                        Підписатись
                </div>
                </div>
            </div>
        )
    }
}

export default Subscribe