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
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
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
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email_address, setEmailAddress] = useState("");
    const [regPassword, setPassword] = useState("");
    const [mobile_number, setMobileNumber] = useState("");
    const [reqfirst_name, reqsetFirstName] = useState("dispNone");
    const [reqlast_name, reqsetLastName] = useState("dispNone");
    const [reqemail_address, reqsetEmailAddress] = useState("dispNone");
    const [reqregPassword, reqsetPassword] = useState("dispNone");
    const [reqmobile_number, reqsetMobileNumber] = useState("dispNone");
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

    }
    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    };
    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    };
    const emailChangeHandler = (event) => {
        setEmailAddress(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };
    const mobileNumberChangeHandler = (event) => {
        setMobileNumber(event.target.value);
    };

    const onFormSubmitted = () => {
        first_name === "" ? reqsetFirstName("dispBlock") : reqsetFirstName("dispNone");
        last_name === "" ? reqsetLastName("dispBlock") : reqsetLastName("dispNone");
        email_address === "" ? reqsetEmailAddress("dispBlock") : reqsetEmailAddress("dispNone");
        regPassword === "" ? reqsetPassword("dispBlock") : reqsetPassword("dispNone");
        mobile_number === "" ? reqsetMobileNumber("dispBlock") : reqsetMobileNumber("dispNone");

        if (
            first_name === "" ||
            last_name === "" ||
            email_address === "" ||
            regPassword === "" ||
            mobile_number === ""
        ) {
            return;
        }

    };





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

                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="LOGIN" {...a11yProps(0)} />
                        <Tab label="REGISTER" {...a11yProps(1)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>


                        <FormControl required className="formControl">
                            <InputLabel htmlFor="userName" style={{ textAlign: "center" }}>Username</InputLabel>
                            <Input id="userName" name="userName" onChange={inputChangedHandler}
                                value={userName}>

                            </Input>
                            <FormHelperText className={userName}>
                                <span className="red">Required</span>
                            </FormHelperText>
                        </FormControl>
                        <br />
                        <br />

                        <FormControl required className="formControl">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" name="password" onChange={inputChangedHandler}
                                value={password}>
                            </Input>
                            <FormHelperText className={password}>
                                <span className="red">Required</span>
                            </FormHelperText>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <Button variant="contained" color="primary">LOGIN</Button>
                        </FormControl>

                    </TabPanel>
                    <TabPanel value={value} index={1}>

                        <FormControl required className="formControl">
                            <InputLabel htmlFor="first_name">First Name</InputLabel>
                            <Input id="first_name" name="first_name" onChange={firstNameChangeHandler}
                                value={first_name}  >

                            </Input>
                            <FormHelperText className={reqfirst_name}>
                                <span className="red">Required</span>
                            </FormHelperText>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="last_name">Last Name</InputLabel>
                            <Input id="last_name" name="last_name" onChange={lastNameChangeHandler}
                                value={last_name}  >

                            </Input>
                            <FormHelperText className={reqlast_name}>
                                <span className="red">Required</span>
                            </FormHelperText>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="email_address">Email</InputLabel>
                            <Input id="email_address" name="email_address" onChange={emailChangeHandler}
                                value={email_address}  >

                            </Input>
                            <FormHelperText className={reqemail_address}>
                                <span className="red">Required</span>
                            </FormHelperText>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="regPassword">Password</InputLabel>
                            <Input id="regPassword" name="regPassword" onChange={passwordChangeHandler}
                                value={regPassword}  >

                            </Input>
                            <FormHelperText className={reqregPassword}>
                                <span className="red">Required</span>
                            </FormHelperText>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="mobile_number">Contact No.</InputLabel>
                            <Input id="mobile_number" name="mobile_number" onChange={mobileNumberChangeHandler}
                                value={mobile_number}  >

                            </Input>
                            <FormHelperText className={reqmobile_number}>
                                <span className="red">Required</span>
                            </FormHelperText>
                        </FormControl>
                        <br />
                        <br />

                        <FormControl>
                            <Button variant="contained" color="primary" onClick={onFormSubmitted}>REGISTER</Button>
                        </FormControl>

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