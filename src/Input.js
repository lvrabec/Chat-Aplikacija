import React from "react";

class Input extends React.Component{

    state= {
        text :""
    }
   
    handleInputChange = event=>{

        this.setState({text: event.target.value})
        // console.log(this.state.text)
    }
    handleSubmitMessage = event=>{
        event.preventDefault();
        this.setState({text:""})
        this.props.onSendMessage(this.state.text);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmitMessage}>
                    <input type="text" autoFocus={true} onChange={this.handleInputChange} value={this.state.text}></input>
                    <button>Send!</button>
                </form>
            </div>
        );
    }



}

export default Input;