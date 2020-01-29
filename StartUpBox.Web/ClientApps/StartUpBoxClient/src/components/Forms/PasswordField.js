import React from 'react';
 
import FormControlFeedback from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';


class PasswordField extends React.Component {


    constructor(props) {
        super(props);
       
        this.showPassword = this.showPassword.bind(this);
        this.handleClick = this.handleClick.bind(this)
        this.state = { showPassword: false };
    }

    showPassword(e) {

        this.setState(state => ({
            showPassword: !state.showPassword
        }));

    }

    handleClick(e) {
        e.preventDefault();
        this.showPassword(e);
    }

    render() {
        var { ...other } = this.props;
        return (
 
                <div className={"input-group input-group-password mb-6 mt-6 "+ (this.props.isInvalid ? "invalid-input" : "")}>
                   <div className="input-group-prepend">
                        <span className="input-group-text"   >   
                          <img src={`${process.env.PUBLIC_URL}/images/password.svg`}/>
                        </span>
                    </div>
                    <FormControl
                        
                        type="password"
                        {...other} 

                    />
    
          
                </div>


        


        )
            ;
    }
}
export default PasswordField;





