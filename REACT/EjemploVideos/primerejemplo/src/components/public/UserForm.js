import React from 'react'
import { useUserForm } from '../../hooks/Custom.hooks'
import { useState } from 'react';
import { useEffect } from 'react';


const UserForm = () => {
  const { form, setForm, handleChanges } = useUserForm();
  const [areEquals, setAreEquals] = useState(true);
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  }
  useEffect(() => {
    const { password } = form;
    setAreEquals(password === passwordConfirmation);
  }, [passwordConfirmation])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

  }
  return (
    <div classNale="w-25 mx-auto mt-5">
      <h4 className="mb-3">Humano Registrate!</h4>
      <form className="needs-validation" noValidate>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
              name="email"
              onChange={handleChanges}
            />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Clave
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Clave"
              name="password"
              onChange={handleChanges}
            />
          </div>
          <div className="col-12">
            <label htmlFor="password2" className="form-label">
              Repetir Clave
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Repetir Clave"
              onChange={handlePasswordConfirmation}
            />
          </div>
          {!areEquals && (
            <div className="form-text list-group-item-danger">
              Las Claves no son iguales.
            </div>
          )}
          <hr className="my-4" />
          <button
            disabled={!areEquals}
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Registrarme
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserForm
