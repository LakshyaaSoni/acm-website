import React from "react"
import axios from "axios"
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'
import background from "./../img/patern.jpg"

class TimelineContainer extends React.Component{
    

    render() {
        
        return (
            <div style = {{
                backgroundImage : "url("+background+")",
                backgroundColor : "rgba(0,0,0,.7)"
            }}>
                <Timeline lineColor={'#ddd'}>
                    {
                        this.props.data.map((item,index) => (
                            <TimelineItem
                            key = {index.toString()}
                            dateText = {item.dateText}
                            style = {item.style}
                            dateInnerStyle= {item.dateInnerStyle}
                            >
                            <h3 style ={{color : "#ffffff"}}>{item.title}</h3>
                            <p style ={{color : "#ffffff"}}>
                                {item.innerHTML}
                            </p>
                            </TimelineItem>
                        ))
                    }
                    {/* {this.props.data} */}
                    {/* <TimelineItem
                        key="001"
                        dateText="17th to 28th of October 2019"
                        // dateText={this.props.name}
                        style={{ color: '#4b82c3' }}
                        dateInnerStyle={{ background: '#4b82c3' }}
                    >
                        <h3 style ={{color : "#ffffff"}}>Registration Dates</h3>
                        <p style ={{color : "#ffffff"}}>
                            The contest will be held both online and on-site.<br></br>
                            <strong>Registration period of On-Site contest for Iranian teams is from 17th to 28th of October 2019</strong>.<br></br>
                            Others can register until 4th of November 2019.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="002"
                        dateText="5th of November 2019"
                        style={{ color: '#ffd51e' }}
                        dateInnerStyle={{ background: '#ffd51e' }}
                    >
                        <h3 style ={{color : "#ffffff"}}>Orientation Day</h3>
                        <p style ={{color : "#ffffff"}}>
                            All Iranian team members in on-site contest, are required to be present at the Orientation Day.                                
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="003"
                        dateText="8th of November 2019"
                        style={{ color: '#b12b1a' }}
                        dateInnerStyle={{ background: '#b12b1a' }}
                    >
                        <h3 style ={{color : "#ffffff"}}>On-Site Contest</h3>
                        <p style ={{color : "#ffffff"}}>
                            07:00:00 (UTC)<br></br>
                            <strong style ={{color : "#ffffff"}}>10:30:00 (GMT +3:30 - Tehran, Iran Standard Time)</strong><br></br>
                            The online contest will be held at least two hours after the on-site contest.
                        </p>
                    </TimelineItem> */}
                </Timeline>
            </div>
        )
    }
}

export default TimelineContainer
 
