import React from 'react'

export const Footer = () => {
  let footerStyle = {
    width: '100%',
    bottom: '0',
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; MyTodoList
      </p>
    </footer>
  )
}
