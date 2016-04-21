import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';

let SignIn = ({ dispatch }) => {
  let input

  return (
    <div className="container rp-page">
      <div className="awf-header">
        <h1>Sign In</h1>
      </div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addUser({"name": input.value}))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Sign in
        </button>
      </form>
    </div>
  )
}
SignIn = connect()(SignIn)

export default SignIn