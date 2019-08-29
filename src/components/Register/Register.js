import React from "react"
import { Button, Paper, Typography, Checkbox, Grid, FormControl, Input, InputLabel } from '@material-ui/core';
import ContestantFields from "./contestantFields"
import PeopleIcon from '@material-ui/icons/People';
import ReCAPTCHA from "react-google-recaptcha";
import "./../styles/register.css"
import axios from 'axios'


class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            team_name: "",
            institution: "",
            country: "",
            contestant1: {

            },
            contestant2: {

            },
            contestant3: {

            },
        }
        this.contestantChange = this.contestantChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    onChange(value) {
        console.log("Captcha value:", value);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
        // console.log(this.state)
    }

    contestantChange(contestantNumber, contestant) {
        if (contestantNumber === '1') {
            this.setState({
                contestant1: contestant
            })
        }
        else if(contestantNumber === '2') {
            this.setState({
                contestant2: contestant
            })
        }
        else if(contestantNumber === '3') {
            this.setState({
                contestant3: contestant
            })
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        const teamName = this.state.team_name;
        const team_dict = {"team_name": teamName}
        const country_dict = {"name": this.state.country}
        console.log(this.state)
        axios.post('http://localhost:8000/api/register/team/', {
            team_name: teamName,
            is_onsite: true,
            institution: this.state.institution,
            country: country_dict
        })
        this.state.contestant1['team'] = team_dict;
        console.log(this.state.contestant1)
        axios.post("http://localhost:8000/api/register/contestant/onsite", this.state.contestant1);
        // const contestants = [this.state.contestant1, this.state.contestant2, this.state.contestant3]
        // for (var contestant in contestants ) {
        //     contestant['team'] = team_dict
        //     console.log(contestant)
        //     // axios.post("http://localhost:8000/api/register/contestant/onsite", contestant)
        // }

    }

    render() {
        return(
            <form className="register_container" onSubmit={this.onSubmit}>                
                <h1 className="register_page_header">Contest Registration</h1>
                <h3 className="register_page_second_header">19th Amirkabir International Collegiate Programming Contest - 8th of November 2019</h3>
                <div className="team_box">
                    <div className="team_header_box">
                        <PeopleIcon />
                        <h2 className="team_header">Team Information</h2>
                    </div>
                    <div>
                        <FormControl required>
                            <InputLabel htmlFor="team_name">Team Name</InputLabel>
                            <Input
                                className="text_box"
                                name="team_name"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormControl>                    
                        <FormControl required>
                            <InputLabel htmlFor="institution">Institution</InputLabel>
                            <Input
                                className="text_box"
                                name="institution"
                                type="text"
                                placeholder="Amirkabir University of Technology"
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor="country">Country</InputLabel>
                            <Input
                                className="text_box"
                                type="text"
                                name="country"
                                onChange={this.handleChange}
                            />
                        </FormControl>
                    </div>
                </div>
                <br/>
                <ContestantFields
                    memberNumber="1"
                    contestant={this.contestantChange}
                />
                <br/>
                {/* <ContestantFields
                    memberNumber="2"
                    contestant={this.contestantChange}
                />
                <br/>
                <ContestantFields
                    memberNumber="3"
                    contestant={this.contestantChange}
                /> */}
                <Grid align="center">
                    <ReCAPTCHA
                        sitekey="Your client site key"
                        onChange={this.onChange}
                    />
                </Grid>
                <Grid align="center">
                    <Button 
                        style={{fontFamily: "inherit", marginTop: "20px", width: "300px"}} 
                        color="primary" 
                        variant="contained" 
                        className="submit_button"
                        type="submit"
                    >
                        submit
                    </Button>
                </Grid>
            </form>

        )
    }
}

export default Register