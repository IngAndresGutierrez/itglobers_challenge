/* import external modules */
import {
  Stack,
  Button,
  Alert as MuiAlert,
  Snackbar as MuiSnackbar,
} from '@mui/material'
import React, { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSnackbar, getCommonsState } from '../../redux/slices/commonsSlice'

/* import internal modules */

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Snackbar = () => {
  const dispatch = useDispatch()
  const { handleSnackbar } = useSelector(getCommonsState)

  const handleClick = () => {
    dispatch(
      setSnackbar({
        handleSnackbar: {
          message: 'Hola',
          status: true,
          severity: handleSnackbar?.severity,
        },
      })
    )
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(
      setSnackbar({
        message: '',
        status: false,
        severity: handleSnackbar?.severity,
      })
    )
  }

  return (
    <Stack spacing={2}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <MuiSnackbar
        onClose={handleClose}
        autoHideDuration={6000}
        open={handleSnackbar?.status}
      >
        <Alert onClose={handleClose} severity={handleSnackbar?.severity}>
          {handleSnackbar?.message}
        </Alert>
      </MuiSnackbar>
    </Stack>
  )
}

export default Snackbar
