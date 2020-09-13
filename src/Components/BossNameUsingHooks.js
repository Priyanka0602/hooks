import React, {useState, useEffect} from 'react';


const BossNameUsingHooks = () => { 
    const [name,setName]=useState("Priyanka");
    const [bossCount,setBossCount]=useState(1);
    useEffect(() => {
        console.log("Welcome to My Office");
     });
    useEffect(() => {
        console.log(`I am THE BOSS ${name}`);
     },[name]);
    return (
    <div>
    <p> <b> BOSS NAME </b> : {name} </p>
    <br />

    <p>Enter your boss name :</p>
    <input type="text" name="enter name" id="1" ></input>
     <button onClick= {() => {
         setName(document.getElementById('1').value);
         setBossCount(
             bossCount + 1
         );
         }}> Update name </button>
    </div>
); }

export default BossNameUsingHooks;
