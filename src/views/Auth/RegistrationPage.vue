<template>
    <div>
    <v-sheet v-if="dialog" class="registration-modal text-center" height="150px">
        <v-btn
        class="mt-6"
        color="error"
        @click="dialog=false"
        >Закрыть</v-btn>
        <div class="py-3">{{$t('forms.registerSuccess')}}</div>
    </v-sheet>
    <div class="registration">
        <div class="form-block">
            <div class="top-block">
                <div class="logo-block">
                    <img src="../../assets/img/logo-vector.svg" alt="Logo">
                    <span>FRee Start platform</span>
                </div>
                <p>{{$t('forms.regLabelForm')}} <span>{{$t('forms.regButton')}}</span></p>
            </div>

            <form @submit.prevent="sendForm">
                <div class="control has-icon has-icon-right">
                    <input name="firstname" id="name" v-model="data.firstName" v-validate="'required|alpha|min:2'" :class="{'input': true, 'is-danger': errors.has('data.firstName') }" type="text" autocomplete="off" required>
                    <span class="highlight"></span><span class="bar"></span>
                    <label for="name">{{$t('forms.name')}}</label>
                </div>
                <div class="control has-icon has-icon-right">
                    <input name="surname" id="surname" v-model="data.lastName" v-validate="'required|alpha|min:2'" :class="{'input': true, 'is-danger': errors.has('data.lastName') }" type="text" autocomplete="off" required>
                    <span class="highlight"></span><span class="bar"></span>
                    <label for="surname">{{$t('forms.surname')}}</label>
                </div>
                <div class="control has-icon has-icon-right">
                    <input name="birthday" id="birthday" v-model="data.birthDate" v-validate="'required|min:8'" :class="{'input': true, 'is-danger': errors.has('data.birthDate') }" type="date" value="2012-06-01" autocomplete="off">
                    <span class="highlight"></span><span class="bar"></span>
                    <label for="birthday">{{$t('forms.birthday')}}</label>
                </div>
                <div class="control has-icon has-icon-right">
                    <input id="phone" name="phone" v-model="data.phoneNumber" v-validate="{ required: true, regex: /\+[0-9]{12}/ }" :class="{'input': true, 'is-danger': errors.has('data.phoneNumber') }" v-mask="'+############'" type="tel" autocomplete="off" required>
                    <span class="highlight"></span><span class="bar"></span>
                    <label for="phone">{{$t('forms.phone')}}</label>
                </div>
                <div class="control has-icon has-icon-right">
                    <input id="login" name="email" v-model="data.email" v-validate="{ required: true, regex: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ }" :class="{'input': true, 'is-danger': errors.has('data.email') }" type="email" autocomplete="off" required>
                    <span class="highlight"></span><span class="bar"></span>
                    <label for="login">Email</label>
                </div>
                <div class="control has-icon has-icon-right">
                    <input id="emailRef" name="referral" v-model="data.ref" v-validate="{ required: false, regex: /^\s*$|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$|[0-9]|[0-9]+/}" :class="{'input': true, 'is-danger': errors.has('data.ref') }" type="text" autocomplete="off">
                    <span class="highlight"></span><span class="bar"></span>
                    <label for="emailRef">{{$t('forms.emailRef')}}</label>
                </div>
                <div class="bottom-block">
                    <label class="remember">
                        <input type="checkbox" class="option-input checkbox" checked="checked" v-model="data.usa" v-validate="'required|alpha'" required/>
                        <span>{{$t('forms.usa')}}</span>
                    </label>
                    <ul class="alert clearfix" v-if="errors.items.length !== 0">
                        <li v-for="(group, index) in errors.collect()" :key="index">
                            <ul>
                                <li v-for="(error, index) in group" :key="index">{{ error }}</li>
                            </ul>
                        </li>
                        <li v-if="errors.has('phone')">
                            <ul>
                                <li>
                                    {{"The phone field is correct +XXXXXXXXXXXX"}}
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <v-btn class="button login-btn" type="submit">{{$t('forms.regButton')}}</v-btn>
                    <div class="transition">{{$t('forms.privacyLabel')}} <router-link to="/">{{$t('forms.privacyPolicy')}}</router-link></div>
                    <div class="transition">{{$t('forms.hasAccount')}} <router-link :to="{ name: ROUTER_NAMES.AUTH.LOGIN }">{{$t('forms.loginBtn')}}</router-link></div>

                    <div class="error-block" v-show="errorLogin">
                        <strong>{{errorBackend}}</strong><hr>{{$t('forms.error')}}
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'

import { ROUTER_NAMES } from '../../router/routerConstants'

export default {
  name: 'RegistrationPage',
  data () {
    return {
      data: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        birthDate: '',
        email: '',
        ref: '',
        usa: false
      },
      errorLogin: false,
      errorBackend: '',

      dialog: false,
      ROUTER_NAMES: ROUTER_NAMES
    }
  },
  methods: {
    ...mapActions([
      'sendRegistrationForm'
    ]),

    sendForm () {
        let testData  = {
        "email": "foo@bar.com",
        "password": "foobarbaz",
        "firstName": "John",
        "lastName": "Doe",
        "dob": "2019-10-24T16:27:30.282Z",
        "phoneNumber": "+380671234567"
}
        this.sendRegistrationForm(testData);
        this.validateBeforeSubmit();
    },

    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.dialog = true
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .registration{
        height: 100vh;
        position: relative;
        margin-bottom: 200px;
        top: 100px;
        .form-block{
            .alert{
                margin: 10px 0;
                li{
                    color: #fff;
                    font-size: 12px;
                }
            }
            .top-block{
                text-align: center;
                margin-bottom: 40px;
                .logo-block{
                    margin-bottom: 15px;
                    img{
                        max-width: 60px;
                    }
                    span{
                        margin-left: 10px;
                        color: #f89428;
                        font-size: 28px;
                        line-height: normal;
                        font-weight: 600;
                    }
                }
                p{
                    font-size: 14px;
                    color: #fff;
                    span{
                        color: #f89428;
                    }
                }
            }
            width: 400px;
            border: 2px solid #f89428;
            padding: 30px;
            position: absolute;
            top: 50%;
            Left: 50%;
            transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            z-index: 999;
            .control{
                margin-bottom: 25px;
                position: relative;
                .bar {
                    position: relative;
                    display: block;
                    width: 100%;
                    &:before {
                        content: '';
                        height: 2px;
                        width: 0;
                        bottom: 0px;
                        position: absolute;
                        background: #f89428;
                        transition: all 0.3s ease-in-out;
                        -o-transition: all 0.3s ease-in-out;
                        -moz-transition: all 0.3s ease-in-out;
                        -webkit-transition: all 0.3s ease-in-out;
                        -ms-transition: all 0.3s ease-in-out;
                        left: 0%;
                    }
                }
                label{
                    color: #fff;
                    font-size: 16px;
                    font-weight: normal;
                    position: absolute;
                    pointer-events: none;
                    left: 5px;
                    top: 10px;
                    transition: all 0.3s ease-in-out;
                    -o-transition: all 0.3s ease-in-out;
                    -moz-transition: all 0.3s ease-in-out;
                    -webkit-transition: all 0.3s ease-in-out;
                    -ms-transition: all 0.3s ease-in-out;
                }
                input{
                    background: none;
                    color: #fff;
                    font-size: 18px;
                    padding: 10px 10px 10px 5px;
                    display: block;
                    width: 100%;
                    border: none;
                    border-radius: 0;
                    border-bottom: 1px solid  mix(white, #424242, 70%);
                    box-shadow: none;

                    &::-webkit-outer-spin-button,
                    &::-webkit-inner-spin-button {
                         display: none;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        margin: 0;
                    }
                    &:focus {
                        outline: none;
                    }
                    &:focus ~ label,
                    &:valid ~ label{
                        top: -20px;
                    }
                    &:focus ~ .bar:before {
                        width: 100%;
                    }
                }
            }
            .bottom-block{
                position: relative;
                .error-block{
                    margin-top: 15px;
                    padding: 15px 10px;
                    background: #cc4b37;
                    color: #fff;
                    font-size: 12px;
                    text-align: center;
                }
                .login-btn{
                    padding: 6px 15px;
                    font-size: 14px;
                    line-height: 1.57142857;
                    border-radius: 50px;
                    -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);
                    box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);
                    -webkit-transition: border .2s linear,color .2s linear,width .2s linear,background-color .2s linear;
                    -o-transition: border .2s linear,color .2s linear,width .2s linear,background-color .2s linear;
                    transition: border .2s linear,color .2s linear,width .2s linear,background-color .2s linear;
                    -webkit-font-smoothing: subpixel-antialiased;
                    color: #fff;
                    background: #f89428;
                    width: 100%;
                    margin: 15px 0;
                }
                .remember{
                    color: #fff;
                    margin-top: -3px;
                    @keyframes click-wave {
                        0% {
                            height: 20px;
                            width: 20px;
                            opacity: 0.35;
                            position: relative;
                        }
                        100% {
                            height: 100px;
                            width: 100px;
                            margin-left: -40px;
                            margin-top: -40px;
                            opacity: 0;
                        }
                    }

                    .option-input {
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        -ms-appearance: none;
                        -o-appearance: none;
                        appearance: none;
                        position: relative;
                        top: 5px;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        height: 20px;
                        width: 20px;
                        transition: all 0.15s ease-out 0s;
                        background: #fff;
                        border: none;
                        color: #fff;
                        cursor: pointer;
                        display: inline-block;
                        margin-right: 0.5rem;
                        margin-bottom: 0;
                        outline: none;
                        position: relative;
                        z-index: 1000;
                    }
                    .option-input:hover {
                        background: #9faab7;
                    }
                    .option-input:checked {
                        background: #f89428;
                    }
                    .option-input:checked::before {
                        height: 20px;
                        width: 20px;
                        position: absolute;
                        content: '✔';
                        display: inline-block;
                        font-size: 18px;
                        text-align: center;
                        line-height: 20px;
                    }
                    .option-input:checked::after {
                        -webkit-animation: click-wave 0.65s;
                        -moz-animation: click-wave 0.65s;
                        animation: click-wave 0.65s;
                        background: #40e0d0;
                        content: '';
                        display: block;
                        position: relative;
                        z-index: 100;
                    }
                    .option-input.radio {
                        border-radius: 50%;
                    }
                    .option-input.radio::after {
                        border-radius: 50%;
                    }
                }
                .lost-password{
                    color: #f89428;
                    font-weight: 500;
                    float: right;
                    position: absolute;
                    right: 0;
                    top: 5px;
                }
                .transition{
                    font-size: 12px;
                    color: #fff;
                    text-align: center;
                    a{
                        color: #f89428;
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
</style>
