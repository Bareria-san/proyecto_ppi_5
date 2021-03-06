import React, {useState} from 'react';
import Title from '../Login/components/Title/Title'
import Logo from '../assets/img/Logo.png'
import '../Login/SignUp.css' 
import Label from '../Login/components/Label/Label';
import Input from '../Login/components/Input/Input';
import {Link} from 'react-router-dom';
//import Label from './components/Label/Label'
const SignUp  = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value)
        } else {
            setPassword(value)
        }
    };

    function handleSumit() {
        let account = { user, password }
        if (account) {
            console.log('account:', account)
        }
    };
    function handleCancel() {
        let cancel = 'Cancelando operación'
        if (cancel) {
            console.log(cancel)
        }
    };
    return (
    <div className = 'register-container'>
        <img src={Logo} className='Logo' alt='Logo' />
        <Title text='Registrate' />
        <Label text= 'Nombre completo' />
        <Input 
        attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Ingrese su nombre'
        }}
        handleChange={handleChange}
        />

        <Label text= 'Correo electrónico' />
        <Input 
        attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Ingrese su correo'
        }}
        handleChange={handleChange}
        />
        <Label text= 'Contraseña' />
        <Input 
        attribute={{
            id: 'contraseña',
            name: 'usuario',
            type: 'password',
            placeholder: 'Digite su contraseña'
        }}
        handleChange={handleChange}
        />
        <Label text= 'Confirme su contraseña' />
        <Input 
        attribute={{
            id: 'Confirm-contraseña',
            name: 'Rcontraseña',
            type: 'password',
            placeholder: 'Digite nuevamente su contraseña'
        }}
        handleChange={handleChange}
        />
        <button onClick={handleSumit} type="button" className="Ok" data-toggle="modal" data-target="#exampleModal">
                                    Registrarse</button>


                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">Se ha registrado satisfactoriamente

                                            </div>
                                            <div class="modal-footer">
                                               <a href="/home"> <button type="button" class="btn btn-primary">Continuar</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        <Link to= '/'>
        <button onClick={handleCancel} className= 'cancel'>
                Cancelar
        </button>
        </Link>
        <a>Campos obligatorios marcados con *</a>
    </div>
    )
}

export default SignUp;