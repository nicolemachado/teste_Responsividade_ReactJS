import React from 'react'
import '../Modal/modal.css'

function Modal () {
  return (
    <div className="body-modal">
    <div className="modal-1">
      <h1>Entrar</h1>
      <input placeholder="Email ou número de telefone"/>
      <input placeholder="Sua senha" type="password"/>
      <button>Entrar</button>
    </div>
    </div>
  )
}
export default Modal;