import React from 'react'

class PlayerTwo extends React.Component{
    render(){
        return (
            <div style={{ position:"relative",borderStyle: 'solid', borderWidth: 1, margin: 3 }}>
                <h1 style={{margin:10}}>Player Two</h1>
                <div style={{margin:10}}>
                    Name: {this.props.name}
                </div>
                <div style={{margin:10}}>Played number of times
                    <button style={{position: "absolute",right:"15px",bottom:"3px",margin: 10,width: 250}}>This player is playing now</button>
                </div>
            </div>
        )
    }
}

export default PlayerTwo