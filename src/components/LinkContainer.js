import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            favLinks : [],            
        }
    }

    removeLink = index => {
        this.setState ({favLinks : [...this.state.favLinks.slice(0,index),...this.state.favLinks.slice(index+1)]})

    }


    handleSubmit = favLink => {
        this.setState ({favLinks : [...this.state.favLinks,favLink]})
        
    }

    render() {


        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                <Table 
                linkData = {this.state.favLinks}
                removeLink = {this.removeLink}
                />
                
                <br/>

                <h3>Add New</h3>
                <Form handleSubmit = {this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;