import React from 'react'
import PlayerTwo from './PlayerTwo'
import PlayerOne from './PlayerOne'

class GameAdmin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            namePlayerOne: "<name from input field>",
            namePlayerTwo: "<name from input field>",
            playButton: true
        }
        this.SetPlayerOneName=this.SetPlayerOneName.bind(this);
        this.SetPlayerTwoName=this.SetPlayerTwoName.bind(this);
        this.ClickButtonChangeTurn=this.ClickButtonChangeTurn.bind(this);
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
    ClickButtonChangeTurn=()=>{
        this.setState({
            playButton: !this.state.playButton
        })
    }
    render(){
        return (
            <div>
                <PlayerOne name={this.state.namePlayerOne} Click={this.ClickButtonChangeTurn} play={this.state.playButton}/>
                <PlayerTwo name={this.state.namePlayerTwo} Click={this.ClickButtonChangeTurn} play={this.state.playButton}/>
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