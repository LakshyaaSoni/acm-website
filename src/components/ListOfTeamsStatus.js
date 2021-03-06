import React from "react"
import SituationCard from "./SituationCard"
import "./styles/situation-card.css"

class ListOfTeamsStatus extends React.Component { 
    constructor() { 
        super() 
        this.state = {
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.7)",
        }
    }
   

    render() {
        const cards = this.props.data.map((cardData) => <div className = "cards-container" ><SituationCard data = {cardData}/></div>)
        return (     
            <div className = "super-status-cards-container" >  
                
                    <div className = "help-container">
                            <h1>OnSite Registered Teams</h1>
                            <p>
                                Here is the list of OnSite registered teams.<br/>
                                If your team name was not in registerd team list 24 hours after regitration, please inform us by:<br/> 
                                Email: <a href="mailto:ceit.ssc94@gmail.com">ceit.ssc94@gmail.com</a><br/>
                                Telegram: <a href="https://t.me/ceitssc">@ceitssc</a> <br/>
                            </p>
                            <div className = "help-box">
                                <div className = "help"> <div className = "color-circle" style = {{backgroundColor : "#6b6b6b"}}></div> <p>  Pending Approval</p></div>
                                <div className = "help"> <div className = "color-circle" style = {{backgroundColor : "#3c9440"}}></div> <p>  Approved for payment</p></div>
                                <div className = "help"> <div className = "color-circle" style = {{backgroundColor : "#3065a3"}}></div> <p>  Finalized</p></div>
                                <div className = "help"> <div className = "color-circle" style = {{backgroundColor : "#aa740b"}}></div> <p>  Reserved registration beforehand</p></div>
                                <div className = "help"> <div className = "color-circle" style = {{backgroundColor : "#e23838"}}></div> <p>  Denied Participation</p></div>
                            </div>
                    </div>
              
               
                <div className = "status-cards-container">
                    {cards}
                </div>
            </div>
        )
    }
}

export default ListOfTeamsStatus
