import React from 'react'
import PropTypes from 'prop-types'
import SignUpForm from "./SignUpForm"
export const Page = ({setInfo, info}) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Register your store now! </h2>
    <SignUpForm/>
    {info}
  </div>
)

Page.propTypes = {
  setInfo: PropTypes.func.isRequired,
}

export default Page
