import { observable } from 'mobx';
import appConfig from '../config';
import {
  CognitoUser, CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js';
import { CognitoIdentityCredentials, Config } from 'aws-sdk';

//test 
export class Api {
  @observable todos = ['buy milk', 'buy cheese']
  @observable filter = ['buy milk', 'buy cheese']
}

// 1) dep: userPool
const poolData = {
  UserPoolId : appConfig.UserPoolId,
  ClientId : appConfig.ClientId
}

// 1) dep: userPool
const userPool = new CognitoUserPool(poolData);

// 2) dep: attributeList
const attributeList = [];

// 2) dep: attributeList
const dataEmail = observable({
  Name : 'email',
  Value : ''
});

// export class dataEmail {
// Name: string = 'email'
// @observable Value: string = ''
// }

// 2) dep: attributeList
const attributeEmail = new CognitoUserAttribute(dataEmail);

// 2) dep: attributeList
attributeList.push(attributeEmail);

// post: cognito sign up
// deps: 1. userPool, 2. attributeList 3. username/passsword
// userPool.signUp('username', 'password', attributeList, null, function(err, result){
// if (err) {
// alert(err);
// return;
// }
// const cognitoUser = result.user;
// console.log('user name is ' + cognitoUser.getUsername());
// });

// export default new Api
export { dataEmail };
