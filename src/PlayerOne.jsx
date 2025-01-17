import React from 'react'

class PlayerOne extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }
    ButtonText=()=>{
        var text;
        if(this.props.play)
            text="Play";
        else{
            text="This player is playing now";
        }
        return text;
    }
    IncrementCount=()=>{
        this.setState((prevState)=>({count:++prevState.count}))
    }
    render(){
        return (
            <div style={{ position:"relative",borderStyle: 'solid', borderWidth: 1, margin: 3 }}>
                <h1 style={{margin:10}}>Player One</h1>
                <div style={{margin:10}}>
                    Name: {this.props.name}
                </div>
                <div style={{margin:10}}>
                    Played number of times: {this.state.count}
                    <button style={{position: "absolute",right:"15px",bottom:"3px",margin: 10,width: 250}} onClick={()=>{
                        this.props.Click();this.IncrementCount()
                    }} disabled={!this.props.play}>
                        {this.ButtonText()}
                    </button>
                </div>
            </div>
        )        
    }
}

export default PlayerOne