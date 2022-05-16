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
        if (this.state.text === ""){
            alert("Please enter the text in the message field!");
        }
        else
        this.props.onSendMessage(this.state.text);
        this.setState({text:""});
        // console.log("text sent")
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmitMessage}>
                    <input type="text" autoFocus={true} onInput={this.handleInputChange} value={this.state.text} placeholder="Enter text here"></input>
                    <button>Send!</button>
                </form>
            </div>
        );
    }



}

export default Input;