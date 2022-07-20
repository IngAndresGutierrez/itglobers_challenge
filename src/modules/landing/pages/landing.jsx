/* import external modules */
import React from 'react'

/* import internal modules */
import Loading from '../../../commons/Loading'

/** @description This is a functional component landing page
 *  @version 1.0.0
 *  @since 20/07/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Landing
 *  @returns {Component} Returns the landing view
 **/

const LandingPage = () => {
  return (
    <h3>
      LandingPage
      <Loading />
    </h3>
  )
}

export default LandingPage
