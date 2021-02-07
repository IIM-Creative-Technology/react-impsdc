import React from "react";
import "../../scss/components/user/login-component.scss";
import "../../scss/components/generic/form-component.scss";
import "../../scss/components/generic/file-input-component.scss";
import TextInput from "../textInput";
import Btn from "../btn";
import axios from "axios"
import md5 from "md5";

export default class RegisterForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username : "",
            password : "",
            avatar : "",
            error : {
                state:false,
                description:""
            }
        }
    }

    onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state unless for file
        */
       if(e.target.name !== 'avatar'){
           this.setState({ [e.target.name]: e.target.value });
       }else{
           this.setState({avatar : e.target.files[0]})
           
       }
      }

    test(base) {
        console.log(base)
    this.setState = {
        avatar : base
    }
    }

    getBase64(file) {
        let reader = new FileReader();
        if (file && file.type.match('image.*')) {
             reader.readAsDataURL(file)
        }
        else{
            this.setState({
                error : {
                    state:false,
                    description:"Avatar is not a valid file"
                }
            })
        }
        return new Promise((reslove, reject) => {
            reader.onload = () => reslove(reader.result );
            reader.onerror = (error) => reject(error);
          })
    }

    async handleForm(e) {
        e.preventDefault()
        const username = this.state.username
        const password = md5(this.state.password)
        let avatar = await this.getBase64(this.state.avatar);
        console.log({username, password, avatar})
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        };
        axios.post(`${process.env.REACT_APP_QUIZZ_API}/player/create`, {username, password, avatar}, config)
            .then((res) => {
                console.log(res)
                if(res.data.success){
                    console.log("ol")
                }
                else{
                    this.setState({
                        error: {
                            state:true,
                            description: "Username already exist"
                        }
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            }); 
    }

    render() {
        return (
            <div className={'contain'}>   
                {this.state.error.state ? 
                    <p className={'error'}>{this.state.error.description}</p>   
                    :''
                }        
                <form className={'form-component'}>
                    <input
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        className={"text-input-component"}
                        placeholder="Username"
                        required 
                    />
                    <input
                        name="password"
                        value={this.state.mdp}
                        onChange={this.onChange}
                        type="password"
                        className={"text-input-component"}
                        placeholder='Password'
                        required 
                    />

                    <div class="file-input-component">
                    <input 
                        name="avatar"
                        value={this.state.img}
                        onChange={this.onChange}
                        ref='img'
                        type="file" 
                        accept="image/*" 
                        id='imageInput'
                    />
                     
                    <label for="imageInput" class="image-button"><i class="far fa-image"></i>Upload an avatar</label>
                    </div>

                    <div onClick={this.handleForm.bind(this)}>
                        <Btn  content="Sign in"  slug={null} />
                    </div>
                </form>
            </div>
        )
    }
}