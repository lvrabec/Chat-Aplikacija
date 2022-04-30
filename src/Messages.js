import React from "react";

class Messages extends React.Component{

randomid(){
    var min = 1;
    var max = 100000;
    var random=min +(Math.random()*(max-min));
    return random;
}


renderMessage(message) {
        const {member,text} = message;
        const{currentMember} = this.props;
        const index = this.randomid();
        const messageFromMe=  member.id === currentMember.id;
        const className= messageFromMe ? "Messages-message currentMember" : "Messages-message";

        return(
            <li  key={index} className={className}>
                <div className="avatar" style={{backgroundColor: member.clientData.color}}></div>
                <div className="Message-content">
                <div className="username">{member.clientData.username}</div>
                <div className="text">{text}</div>
                </div>
            </li>
        );
   
    }

     
    



render(){
    
    
    const {messages} =this.props;


    return(
        <ul className="Messages-list">
            {messages.map((m,id)=>this.renderMessage(m,id))}
        </ul>
    )



}


}
export default Messages ;