import React from 'react'
import PlayerTwo from './PlayerTwo'
import PlayerOne from './PlayerOne'

class GameAdmin extends React.Component{
  render(){
    return (
        <div>
            <PlayerOne/>
            <PlayerTwo/>
            <div style={{ borderTopStyle: 'solid', borderWidth: 1, marginTop: 15 }}>
                <div style={{marginTop:15}}>
                    Set Name of Player One
                    <input style={{marginLeft: 15}} type="text"></input>
                </div>
                <div style={{marginTop:15,width: window.innerWidth}}>
                    Set Name of Player Two
                    <input style={{position: "absolute",marginLeft: 15}}  type="text"></input>
                </div>
            </div>
        </div>
        )
  }
}

export default GameAdmin