import React from 'react'
import {Link} from 'react-router-dom';
import './Logo.css'

class Logo extends React.Component {
    render() {
        return (
            <Link to='/' className='logo' />
        )
    }
}

export default Logo