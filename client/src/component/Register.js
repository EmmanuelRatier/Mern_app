import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
     constructor(props) {
    super(props)
    

    this.handleInscription = this.handleInscription.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.state = {
      email: '',
      password: ''
    }

  } 
        handleChangeEmail = ev => {
            this.setState({ email: ev.target.value });
        }
    
        handleChangePassword = ev => {
          this.setState({ password: ev.target.value });
        }
    
      handleInscription = ev => {
          ev.preventDefault();

          console.log(this.state)
          const data = {
            email: this.state.email,
            password: this.state.password
          } 
          
          axios.post('/users', {data})

        }
        render() {
            return (
                <div>
                  <form>
                        <input 
                            type="text"
                            name="email"
                            value={this.state.email}   
                            onChange={this.handleChangeEmail}                    
                        />
                        <input 
                            type="password"
                            name="password"
                            value={this.state.password}        
                            onChange={this.handleChangePassword}
                            />
                    <input type="button" value="Inscription" onClick={this.handleInscription}/>
                </form>
                </div>
    
            )
        }
}
export default User;