import React from 'react'
import PlayerTwo from './PlayerTwo'
import PlayerOne from './PlayerOne'

class GameAdmin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            namePlayerOne: "<name from input field>",
            namePlayerTwo: "<name from input field>"
        }
        this.SetPlayerOneName=this.SetPlayerOneName.bind(this);
        this.SetPlayerTwoName=this.SetPlayerTwoName.bind(this);

    }
    SetPlayerOneName=(event)=>{
        this.setState({
            namePlayerOne: event.target.value
        })
    }
    SetPlayerTwoName=(event)=>{
        this.setState({
            namePlayerTwo: event.target.value
        })
    }
    render(){
        return (
            <div>
                <PlayerOne name={this.state.namePlayerOne}/>
                <PlayerTwo name={this.state.namePlayerTwo}/>
                <div style={{ borderTopStyle: 'solid', borderWidth: 1, marginTop: 15 }}>
                    <div style={{marginTop:15}}>
                        Set Name of Player One
                        <input style={{marginLeft: 15}} type="text" onChange={this.SetPlayerOneName}></input>
                    </div>
                    <div style={{marginTop:15,width: window.innerWidth}}>
                        Set Name of Player Two
                        <input style={{position: "absolute",marginLeft: 15}}  type="text" onChange={this.SetPlayerTwoName}></input>
                    </div>
                </div>
            </div>
            )
    }
}

export default GameAdmin