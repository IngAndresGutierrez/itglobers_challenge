/* import external modules */
import React from 'react'

/* import internal modules */
import Loading from '../components/commons/Loading'

/** @description This is a functional component landing
 *  @version 1.0.0
 *  @since 19/07/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Landing
 *  @returns {Component} Returns the landing view
 **/

const Landing = () => {
  return (
    <h3>
      LandingView
      <Loading />
    </h3>
  )
}

export default Landing
