import Inferno from 'inferno'
import Component from 'inferno-component'
import { connect } from 'inferno-mobx';

interface MyProps {
  store;
  dataEmail;
}
interface MyState {}

//todo
// 1) input email
// 2) input username
// 3) handle submit

@connect(['dataEmail'])
export default class Layout extends Component<MyProps, MyState> {
  state = {
    password: 'pass onInput',
    email: 'email onInput',
    message: 'hi',

  }

  handleSubmit = () => {
    // console.log(this.props.dataEmail.Name)
  }
  handleEmailChange = (e) => {
    // console.log(this.props.dataEmail.Name)
    this.props.dataEmail.Value = e.target.value
  }
  handlePasswordChange = () => {
  }
  render({ dataEmail }) {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <div>{dataEmail.Value}</div>
      <input type='text' placeholder= 'Enter Email' value={dataEmail.Value} onInput={this.handleEmailChange} />
      <input type='password' placeholder='Password' value={this.state.message} onInput={this.handlePasswordChange} />
      <input type="submit"/>
      </form>
      </div>
    );
  }
};
