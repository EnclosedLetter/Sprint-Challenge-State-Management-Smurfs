import React, {useEffect}from "react";
import {connect}from "react-redux";
import { retrieveSmurf } from "./Smurfs";
import {SmurfsForm} from "./SmurfsForm";

const SmurfList = (props) => {
    useEffect(() => {
        props.getSmurf();
    }, []); //put empty brackets so API doesn't keep making call

    return(
        <div>
            <SmurfsForm post ={props.postSmurf}/>
            {props.smurfs.map((item)) => (
                <
            )}
        </div>
    )
}