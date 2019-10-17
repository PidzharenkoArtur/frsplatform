<template>
    <div class="reset-password">
        <div class="form-block">
            <div class="top-block">
                <div class="logo-block">
                    <img src="../../assets/img/logo-vector.svg" alt="Logo">
                    <span>FRee Start platform</span>
                </div>
            </div>
            <form>
                <div class="control has-icon has-icon-right">
                    <input v-model="password" v-validate="'required'" name="password" type="password" :class="{'is-danger': errors.has('password')}" ref="password">
                    <span class="highlight"></span><span class="bar"></span>
                    <label for="pass">{{$t('forms.newPass')}}</label>
                </div>
                <div class="control has-icon has-icon-right">
                    <input v-validate="'required|confirmed:password'" name="password_confirmation" type="password" :class="{'is-danger': errors.has('password_confirmation')}" data-vv-as="password">
                    <span class="highlight"></span><span class="bar"></span>
                    <label for="confpass">{{$t('forms.confirmPass')}}</label>
                </div>
                <div class="bottom-block">
                    <ul class="alert clearfix" v-if="errors.items.length !== 0">
                        <li v-for="group in errors.collect()">
                            <ul>
                                <li v-for="error in group">{{ error }}</li>
                            </ul>
                        </li>
                    </ul>
                    <button class="button login-btn" type="submit">{{$t('forms.resetBtn')}}</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'reset',
    data(){
      return{
        password: ''
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
                    &:hover{
                        opacity: 0.9;
                    }
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
                    &:hover{
                        opacity: 0.9;
                    }
                }
                .no-account{
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