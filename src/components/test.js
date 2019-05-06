import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Test extends Component{
    componentDidMount=()=>{
        toast("Wow so easy !");
    }
    render(){
        return(
            <React.Fragment>
                    This is Test
                    <ToastContainer />
                </React.Fragment>
        )
    }
}

export default Test