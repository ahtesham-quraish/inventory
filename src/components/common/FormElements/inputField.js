import React, { Component } from 'react'


export default function InputField(props){
    console.log(props)
    return(
        <React.Fragment>
            <div class="form-group">
				<label for="projectinput1">{props.label}</label>
                <input 
                type={props.type} 
                id={props.type} 
                class="form-control"
                value={props.value}
                placeholder={props.placeholder}
                onChange = {(e)=>{props.onChange(e)}}
                onBlur = {props.onBlur}
                />
                {props.error === true ? 
                <p style={{color:"red"}}>{props.helpText}</p>:null    
            }
			</div>
            </React.Fragment>
    )
}