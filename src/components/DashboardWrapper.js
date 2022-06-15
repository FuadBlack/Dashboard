import React from 'react'

export const DashboardWrapper = (props) => {
  return (
    <div className='dashboard-wrapper'>{props.children}</div>
  )
}


export const DashboardWrapperMain = (props) => {
    return (
      <div className='dashboard-wrapper-main'>{props.children}</div>
    )
  }


  export const DashboardWrapperRight = (props) => {
    return (
      <div className='dashboard-wrapper-right'>{props.children}</div>
    )
  }