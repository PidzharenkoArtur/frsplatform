<template>
    <div>
    <v-sheet v-if="dialog" class="login-modal text-center" height="150px">
        <v-btn
        class="mt-6"
        color="error"
        @click="dialog=false"
        >Закрыть</v-btn>
        <div class="py-3">{{$t('forms.error2FA')}}</div>
    </v-sheet>
    <div class="login-page">
        <div class="visible-sm visible-xs bg-amber-50"></div>
        <div class="visible-sm visible-xs bg-amber-50"></div>
        <div v-if="isFormBlock" class="form-block">
            <div class="top-block">
                <div class="logo-block">
                    <img src="../../assets/img/logo-vector.svg" alt="Logo">
                    <span>FRee Start platform</span>
                </div>
                <p>{{$t('forms.labelForm')}}</p>
            </div>
            <form autocomplete="off" @submit.prevent="send">
                <div class="control has-icon has-icon-right">
                    <input name="email" v-model="data.email" v-validate="{ required: true, regex: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ }" :class="{'input': true, 'is-danger': errors.has('data.email') }" type="email" autocomplete="off" required>
                    <span class="highlight"></span><span class="bar"></span>
                    <label for="email">Email</label>
                </div>
                <div class="control has-icon has-icon-right">
                        <input name="password" v-model="data.password" v-validate="'required|min:6'" :class="{'input': true, 'is-danger': errors.has('data.password') }" type="password" autocomplete="off" required>
                    <span class="highlight"></span><span class="bar"></span>
                    <label for="pass">{{$t('forms.pass')}}</label>
                </div>
                <div class="bottom-block">
                        <label class="remember">
                            <input type="checkbox" class="option-input checkbox" checked="checked" v-model="check" />
                            <span>{{$t('forms.remember')}}</span>
                        </label>
                    <router-link class="lost-password" :to="{ name: ROUTER_NAMES.AUTH.RESET }">{{$t('forms.lostPass')}}</router-link>
                    <ul class="alert clearfix" v-if="errors.items.length !== 0">
                        <li v-for="(group, index) in errors.collect()" :key="index">
                            <ul>
                                <li v-for="(error, index) in group" :key="index">{{ error }}</li>
                            </ul>
                        </li>
                    </ul>
                    <v-btn class="button login-btn" type="submit">{{$t('forms.loginBtn')}}</v-btn>
                    <div class="transition">{{$t('forms.noAccount')}} <router-link :to="{ name: ROUTER_NAMES.AUTH.REGISTRATION }">{{$t('forms.regLink')}}</router-link></div>
                    <div class="error-block" v-show="errorLogin">
                        {{$t('forms.error')}}
                    </div>
                    <div class="error-block" v-show="reset">
                        {{$t('forms.reset')}}
                    </div>
                </div>
            </form>
        </div>
        <div v-if="!isFormBlock" class="form-block modal-2FA">
            <div class="top-block">
                <div class="logo-block">
                    <img src="../../assets/img/logo-vector.svg" alt="Logo">
                    <span>FRee Start platform</span>
                </div>
                <p>{{$t('forms.labelForm2FA')}}</p>
            </div>
            <form autocomplete="off" @submit.prevent="sendForm2FA">
                <div class="control has-icon has-icon-right">
                    <input id="code2FA" name="code" v-model="code" v-validate="{ required: false, regex: /1/ }" :class="{'input': true, 'is-danger': errors.has('code') }" v-mask="'XXXXXX'" type="password" autocomplete="off" required>
                    <span class="highlight"></span><span class="bar"></span>
                    <label for="code2FA">{{$t('forms.code2FA')}}</label>
                </div>
                <div class="bottom-block">
                    <v-btn class="button login-btn" type="submit">{{$t('forms.resetBtn')}}</v-btn>
                </div>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
import { ROUTER_NAMES } from '../../router/routerConstants'

export default {
  name: 'login',
  components: {
  },
  data () {
    return {
      data: {
        email: '',
        password: '',
        
      },
      code: '',
      check: false,
      usa: false,
      errorLogin: false,
      reset: false,
      isFormBlock: true,
      dialog: false,
      ROUTER_NAMES: ROUTER_NAMES
    }
  },
  computed: {
    //  ...mapState([
    //      'accessToken',
    //      'refreshToken'
    //  ]),
     ...mapGetters([
         'accessToken',
         'refreshToken'
     ])
  },
  methods: {
    ...mapActions([
        'sendLoginForm',
        'sendSSOToken',
        'getSSOToken1',
        
    ]),
    
    ...mapMutations([
        //'getAccessTokenStore'
        // 'getAccessToken',
        // 'getRefreshToken'
    ]),

    send () {
        this.sendLoginForm(this.data);
        console.log(this.accessToken);
                console.log(this.refreshToken);

        this.getSSOToken1();
        this.isFormBlock = !this.isFormBlock;
    },

    sendForm2FA () {
        this.dialog = true;
    }
  }
}
</script>

<style scoped lang="scss">
    .login-page{
        height: 100vh;
        position: relative;
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
                    font-size: 18px;
                    color: #fff;
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
                margin-bottom: 27px;
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
                    &:focus {
                        outline: none;
                    }
                    &:focus ~ label,
                    &:valid ~ label {
                        top: -22px;
                    }
                    &:focus ~ .bar:before {
                        width: 100%;
                    }
                    &:-webkit-autofill{
                        background-color: transparent !important;
                        background-image: none !important;
                        color: #fff !important;
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
