import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material'
import useStyles from "../../constants/useStyles";

const Login = () => {
    const [body, setBody] = useState({ email: '', password: '' })
    const classes = useStyles()


    const handleChange = e => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        console.log(body)
    }

    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>Sign In</Typography>
                    <form className={classes.form}>
                        <TextField
                            fullWidth
                            autoFocus
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Email'
                            name='email'
                            value={body.email}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            type='password'
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Password'
                            name='password'
                            value={body.password}
                            onChange={handleChange}
                        />
                        <Button
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={() => onSubmit()}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Container>
        </Grid>
    )
}

export default Login
