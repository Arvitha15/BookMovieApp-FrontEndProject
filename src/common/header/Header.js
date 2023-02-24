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
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";



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
    const history = useHistory();

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
        first_name: '',
        last_name: '',
        email_address: '',
        regPassword: '',
        mobile_number: ''

    });
    const { first_name, last_name, email_address, regPassword, mobile_number } = register;

    const inputChangedHandlerForReg = (e) => {
        const state = register;
        state[e.target.name] = e.target.value;
        setRegister({
            first_name: state["first_name"],
            last_name: state["last_name"],
            email_address: state["email_address"],
            regPassword: state["regPassword"],
            mobile_number: state["mobile_number"]
        });
    }
    const isTextBlank = (val) => val.length === 0;

    async function registerUser(newUser) {

        const rawResponse = await fetch("http://localhost:8085/api/v1/signup",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            }
        );


        const data = await rawResponse.json();

    }


    const onFormSubmitted = (e) => {
        e.preventDefault();

        registerUser(register);
        setRegister({
            first_name: '',
            last_name: '',
            email_address: '',
            regPassword: '',
            mobile_number: ''
        });
        history.push("/")
    }



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
                                <TextField id="first_name" type="text" name="first_name" onChange={inputChangedHandlerForReg}
                                    value={first_name} label="First Name" required
                                    helperText={isTextBlank(first_name) ? "required" : ""}
                                    error={isTextBlank(first_name)} >

                                </TextField>
                            </FormControl>

                            <FormControl>
                                <TextField id="last_name" type="text" name="last_name" onChange={inputChangedHandlerForReg}
                                    value={last_name} label="Last Name" required
                                    helperText={isTextBlank(last_name) ? "required" : ""}
                                    error={isTextBlank(last_name)} >

                                </TextField>
                            </FormControl>
                            <FormControl>
                                <TextField id="email_address" type="text" name="email_address" onChange={inputChangedHandlerForReg}
                                    value={email_address} label="Email" required
                                    helperText={isTextBlank(email_address) ? "required" : ""}
                                    error={isTextBlank(email_address)} >
                                </TextField>
                            </FormControl>
                            <FormControl>
                                <TextField id="regPassword" type="text" name="regPassword" onChange={inputChangedHandlerForReg}
                                    value={regPassword} label="Password" required
                                    helperText={isTextBlank(regPassword) ? "required" : ""}
                                    error={isTextBlank(regPassword)} >
                                </TextField>
                            </FormControl>
                            <FormControl>
                                <TextField id="mobile_number" type="text" name="mobile_number" onChange={inputChangedHandlerForReg}
                                    value={mobile_number} label="Contact No." required
                                    helperText={isTextBlank(mobile_number) ? "required" : ""}
                                    error={isTextBlank(mobile_number)}>
                                </TextField>
                            </FormControl>
                            <FormControl>
                                <Button variant="contained" color="primary" onSubmit={onFormSubmitted}>REGISTER</Button>
                            </FormControl>
                        </div>
                    </TabPanel>
                   
                </Card>
            </Modal>

            {/* <Button variant="contained">Logout</Button> */}
            <Link to="/bookshow/:id">
                <Button variant="contained" color="primary" style={{ position: "absolute", right: 111 }}>Book Show</Button>
            </Link>
        </div>
    )

}

export default Header;