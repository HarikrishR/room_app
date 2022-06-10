import React from "react";

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user : {
                name: "hari",
                age: "24",
                company: "verizon"
            }
        }
    }
    render(){
        return(
            <>
                <h1>Home</h1>
                <ul>
                {Object.keys(this.state.user).map(
          (objKey) =>
            <li key={objKey}>{this.state.user[objKey]}</li>
        )}
                </ul>
            </>
        )
    }
}

export default Home;