import React, { Component } from 'react'


class Test extends Component{
    componentDidMount = ()=>{
        alert("component did mount")
    }
    render(){
        return(
            <React.Fragment>
                    This is Test
                </React.Fragment>
        )
    }
}

export default Test