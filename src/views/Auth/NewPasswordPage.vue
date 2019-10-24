<template>
    <div>
    <div class="registration-modal" v-if="dialog">
        <v-sheet class="text-center" height="150px">
            <v-btn
            class="mt-6"
            color="success"
            @click="dialog=false"
            :to="{ name: ROUTER_NAMES.AUTH.LOGIN }"
            >
            {{ $t('forms.loginPage') }}
            </v-btn>
            <div class="py-3">{{ $t('forms.newPassword') }}</div>
        </v-sheet>
    </div>
    <div class="reset-password">
        <div class="form-block">
            <div class="top-block">
                <div class="logo-block">
                    <img src="../../assets/img/logo-vector.svg" alt="Logo">
                    <span>FRee Start platform</span>
                </div>
            </div>
            <form @submit.prevent="validateBeforeSubmit">
                <div class="control has-icon has-icon-right">
                    <input v-model="data.password" v-validate="'required'" name="password" type="password" :class="{'is-danger': errors.has('password')}" ref="password">
                    <span class="highlight"></span><span class="bar"></span>
                    <label for="pass">{{$t('forms.newPass')}}</label>
                </div>
                <div class="control has-icon has-icon-right">
                    <input v-model="data.passwordConfirmation"  v-validate="'required|confirmed:password'" name="password_confirmation" type="password" :class="{'is-danger': errors.has('data.password_confirmation')}" data-vv-as="password">
                    <span class="highlight"></span><span class="bar"></span>
                    <label for="confpass">{{$t('forms.confirmPass')}}</label>
                </div>
                <div class="bottom-block">
                    <ul class="alert clearfix" v-if="errors.items.length !== 0">
                        <li v-for="(group, index) in errors.collect()" :key="index">
                            <ul>
                                <li v-for="(error, index) in group" :key="index">{{ error }}</li>
                            </ul>
                        </li>
                    </ul>
                    <v-btn class="button login-btn" type="submit">{{$t('forms.resetBtn')}}</v-btn>
                </div>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
import { ROUTER_NAMES } from '../../router/routerConstants'

export default {
  name: 'reset',
  data () {
    return {
        data: {
            password: '',
            passwordConfirmation: ''     
        },
        dialog: false,
        ROUTER_NAMES: ROUTER_NAMES

    }
  },
  methods: {
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
    .reset-password{
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
                margin-bottom: 20px;
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
                        top: -14px;
                        //font-size: 14px;
                        /*color: #fff;*/
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
            }
        }
    }
</style>
