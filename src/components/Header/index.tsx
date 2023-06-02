import React from 'react'
import '../../styles/layout/_header.scss'

const Header: React.FC = () => {
  return (
    <header className='header__container'>
      <nav>
        <div><button>1</button></div>
        <div><button>2</button></div>
        <div><button>3</button></div>
        <div><button>4</button></div>

      </nav>
    </header>
  )
}

export default Header