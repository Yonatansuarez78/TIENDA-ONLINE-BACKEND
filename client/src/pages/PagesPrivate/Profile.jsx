import React from 'react'
import NavbarPrivate from '../../components/componentesPrivate/NavbarPrivate'
import { useForm } from 'react-hook-form'

function Profile() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = handleSubmit((data) => {
      console.log(data)
  })

  return (
    <div>
      <NavbarPrivate />
      
      <div className='container'>
        <form class="row g-3" onSubmit={onSubmit}>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Nombre usuario</label>
            <input type="text" class="form-control" id="inputEmail4" {...register("username", { required: true })} placeholder='Nombre de usuario'></input>
            {errors.username && (<p className='text-danger' style={{ fontSize: '13px' }}>Nombre de usuario es requerido</p>)}
          </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Correo electronico</label>
            <input type="email" class="form-control" id="inputEmail4" {...register("email", { required: true })} placeholder='Correo electronico'></input>
            {errors.email && (<p className='text-danger' style={{ fontSize: '13px' }}>Correo electronico es requerido</p>)}
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="inputPassword4" {...register("password", { required: true })} placeholder='Contraseña'></input>
           {errors.password && (<p className='text-danger' style={{ fontSize: '13px' }}>Contraseña es requerida</p>)}
        </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Confirmar contraseña</label>
            <input type="password" class="form-control" id="inputPassword4" {...register("password", { required: true })} placeholder='Contraseña'></input>
            {errors.password && (<p className='text-danger' style={{ fontSize: '13px' }}>confirmacion de contraseña es requerida</p>)}
          </div>
        <div class="col-12">
            <button type="" class="btn btn-primary">Actualizar datos</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Profile
