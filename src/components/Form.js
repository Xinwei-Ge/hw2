import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"", 
            URL:""
        }

    }

    handleChange = event => {
        this.setState ({...this.state,[event.target.id]:event.target.value})

    }

    onFormSubmit = (event) => {

        // to prevent page reload on form submit
        event.preventDefault();
        const link = {name : this.state.name,URL : this.state.URL}
        console.log(link)
        this.props.handleSubmit(link);
        this.setState ({name:"", URL:""})

        
    

    }



    render() {

        return(
            <form onSubmit = {this.onFormSubmit}>
                
                <label>Name</label>
                <input value = {this.state.name} id = "name" name = "name" type = "text" required onChange = {this.handleChange}></input>
                <label>URL</label>
                <input value = {this.state.URL} id = "URL" name = "URL" type = "text" required onChange = {this.handleChange}></input>
                <input type ="submit" value="Submit"/>
            </form>
        )
    
    }
}

export default Form;
