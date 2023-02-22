import PropTypes from 'prop-types';
import React from "react";
import { useState } from 'react';
import ImgLogo from "../../assets/logo.svg";
import './Header.css';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { FormControl } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Card p={3}>
                    <Typography>{children}</Typography>
                </Card>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Header() {

    const buttonStyle = { position: "absolute", right: 20 };
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [login, setLogin] = useState({
        userName: '',
        password: ''
    });
    const { userName, password } = login;

    const inputChangedHandler = (e) => {
        const state = login;
        state[e.target.name] = e.target.value;
        setLogin({
            userName: state["userName"],
            password: state["password"]
        });
    }

    const [register, setRegister] = useState({
        firstName: '',
        lastName: '',
        email:'',
        regPassword:'',
        contact:''

    });
    const {firstName, lastName, email, regPassword, contact} = register;

    const inputChangedHandlerForReg = (e) => {
        const state = register;
        state[e.target.name] = e.target.value;
        setRegister({
            firstName: state["firstName"],
            lastName: state["lastName"],
            email: state["email"],
            regPassword: state["regPassword"],
            contact: state["contact"]
        });
    }
    const isTextBlank = (val) => val.length===0;

    return (
        <div className="headerPage">
            <img className="rotate linear infinite" src={ImgLogo} alt="play-logo" />
            <Button variant="contained" style={buttonStyle} onClick={handleOpen}>Login</Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <Card style={style}>

                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="default"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="LOGIN" {...a11yProps(0)} />
                        <Tab label="REGISTER" {...a11yProps(1)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <FormControl>
                                <TextField id="userName" type="text" name="userName" onChange={inputChangedHandler}
                                    value={userName} label="Username" required>

                                </TextField>
                            </FormControl>

                            <FormControl>
                                <TextField id="password" type="text" name="password" onChange={inputChangedHandler}
                                    value={password} label="Password" required>
                                </TextField>
                            </FormControl>
                            <FormControl>
                                <Button variant="contained" color="primary">LOGIN</Button>
                            </FormControl>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <FormControl>
                                <TextField id="firstName" type="text" name="firstName" onChange={inputChangedHandlerForReg}
                                    value={firstName} label="First Name" required
                                    helperText={isTextBlank(firstName)?"required":""}
                                    error={isTextBlank(firstName)} >

                                </TextField>
                            </FormControl>

                            <FormControl>
                                <TextField id="lastName" type="text" name="lastName" onChange={inputChangedHandlerForReg}
                                    value={lastName} label="Last Name" required 
                                    helperText={isTextBlank(lastName)?"required":""}
                                    error={isTextBlank(lastName)} >

                                </TextField>
                            </FormControl>
                            <FormControl>
                                <TextField id="email" type="text" name="email" onChange={inputChangedHandlerForReg}
                                    value={email} label="Email" required
                                    helperText={isTextBlank(email)?"required":""}
                                    error={isTextBlank(email)} >
                                </TextField>
                            </FormControl>
                            <FormControl>
                                <TextField id="regPassword" type="text" name="regPassword" onChange={inputChangedHandlerForReg}
                                    value={regPassword} label="Password" required
                                    helperText={isTextBlank(regPassword)?"required":""}
                                    error={isTextBlank(regPassword)} >
                                </TextField>
                            </FormControl>
                            <FormControl>
                                <TextField id="contact" type="text" name="contact" onChange={inputChangedHandlerForReg}
                                    value={contact} label="Contact No." required
                                    helperText={isTextBlank(contact)?"required":""}
                                    error={isTextBlank(contact)}>
                                </TextField>
                            </FormControl>
                            <FormControl>
                                <Button variant="contained" color="primary">REGISTER</Button>
                            </FormControl>
                        </div>
                    </TabPanel>
                </Card>
            </Modal>

            {/* <Button variant="contained">Logout</Button> */}
            {/* <Button variant="contained" color="primary" style={{ position: "absolute", right: 111 }}>Book Show</Button> */}
        </div>
    )

}

export default Header;