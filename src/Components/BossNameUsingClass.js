import React, { Component } from 'react'

class BossNameUsingClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            bossName : "Priyanka",
            bossCount : 1
        }
        this.onClick = this.onClick.bind(this);
    }
    componentDidMount(){
        console.log("Welcome to My Office");
    }
    componentDidUpdate(prevProps){
        console.log(`Previous Props : ${prevProps.bossName}`);
        console.log(`Current Props : ${this.props.bossName}`);
        if(prevProps.bossName !== this.props.bossName){
        console.log(`I am THE BOSS ${this.state.bossName}`)
        }
    }

    render() {
        return (
            <div>
            <p> <b> BOSS NAME </b> : {this.state.bossName} </p>
            <br />
        
            <p>Enter your boss name :</p>
            <input type="text" name="enter name" id="1" ></input>
             <button onClick= {() => {
                 this.setState({ bossName : document.getElementById('1').value,
                                 bossCount: this.state.bossCount+1});
                 }}> Update name </button>
            </div>
        )
        }   
    }

    export default BossNameUsingClass;
