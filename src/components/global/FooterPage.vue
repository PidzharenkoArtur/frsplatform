<template>
    <footer class="footer clearfix" id="footer">
        <div class="row ">
            <div class="center-column">
                <div class="medium-3 small-6 columns first-sidebar">
                    <div class="title-column">
                        {{$t('footer.firstTitle')}}
                    </div>
                    <ul class="app-menu menu">
                        <li><a href="https://play.google.com/store/apps/details?id=com.frsplatform.freestartplatform" target="_blank"><i class="fa fa-android" aria-hidden="true"></i> Android app</a></li>
                        <li><a href="https://itunes.apple.com/ua/app/freestart-platform/id1437616831?l=ru&mt=8" target="_blank"><i class="fa fa-apple" aria-hidden="true"></i> IOS app</a></li>
                    </ul>
                    <ul class="menu api-menu">
                        <li><a href=""><i class="fa fa-wrench" aria-hidden="true"></i> API DOC exchange</a></li>
                        <li><a href=""><i class="fa fa-wrench" aria-hidden="true"></i> API DOC Merchant</a></li>
                    </ul>
                </div>
                <div class="medium-3 small-6 columns second-sidebar">
                    <div class="title-column">{{$t('footer.aboutTitle')}}</div>
                    <ul class="menu">
                        <li><a href="http://freestart.io" target="_blank">FReeStart.io</a></li>
                        <li><a href="https://frscoin.com/" target="_blank">FRee Start coin</a></li>
                        <li><a href="">{{$t('menu.listing')}}</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>
                <div class="medium-3 small-6 columns second-sidebar">
                    <div class="title-column">
                        {{$t('footer.privacy')}}
                    </div>
                    <ul class="menu">
                        <li><router-link to="/mission">{{$t('footer.privacyOne')}}</router-link></li>
                        <li><router-link to="/security-policy">{{$t('footer.privacyTwo')}}</router-link></li>
                        <li><router-link to="/how-use-exchange">{{$t('footer.privacyThree')}}</router-link></li>
                        <li><router-link to="/commission">{{$t('footer.privacyFour')}}</router-link></li>
                        <li><router-link to="/dashboard/create-crypto-currency">{{$t('footer.cryptoCur')}}</router-link></li>
                    </ul>
                </div>
                <div class="contact-block medium-3 small-6 columns">
                    <div class="contact-title">
                        {{$t('footer.social')}}
                    </div>
                    <div class="social-block">
                        <a href="https://twitter.com/FRSplatform" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/groups/103498626524267/?multi_permalinks=821734631367326&notif_id=1532517215313863&notif_t=group_activity" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href=""><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                    </div>
                    <div class="social-block">
                        <a href="https://www.instagram.com/frscoin/?hl=ru" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com/channel/UCBSN5JsrbIUM9X8t-eXxeig?view_as=subscriber" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                        <a href="https://t.me/FReeStartcoin" target="_blank"><i class="fa fa-telegram" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>

            <div class="large-12 columns footer-copyright">
                <div class="copyright-text"><img src="../../assets/img/flag.png" alt="Flag" style="max-width: 30px">
                    Copyright © 2016-2019, FRSPlatform LTD. 120 Baker str. London, England
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterPage',
    }
</script>

<style scoped lang="scss">
    .footer {
        padding: 95px 0 30px;
        position: relative;
        display: block;
        overflow: hidden;
        z-index: 99;
        background-image: linear-gradient(146deg, #1d4f71, #49738e);
        width: 100%;
        .row {
            max-width: 1140px;
            padding: 0 15px;
            margin: 0 auto;
        }
        .copyright-text {
            font-size: 20px;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.2;
            letter-spacing: 0.2px;
            text-align: center;
            color: #a7b0b7;
            margin-top: 20px;
        }
        .center-column {
            display: flex;
            width: 100%;
            vertical-align: top;
            padding: 0 10px;
            justify-content: space-between;
            .title-column {
                margin-top: 10px;
                font-size: 15px;
                font-weight: 900;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: left;
                color: #ffffff;
                margin-bottom: 18px;
            }
            .menu {
                /*&.api-menu{*/
                /*margin-top: 23px;*/
                /*}*/
                /*&.app-menu{*/
                /*margin-top: 36px;*/
                /*}*/
                li {
                    display: block;
                }
                a {
                    font-size: 16px;
                    font-weight: 500;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.5;
                    letter-spacing: normal;
                    text-align: left;
                    color: #c0bdba;
                    padding: 0;
                    &:hover {
                        color: #fff
                    }
                    img {
                        max-width: 18px;
                    }
                }
            }
        }
        .certificate {
            padding: 0;
            max-width: 200px;
            text-align: center;
            width: 100%;
            vertical-align: top;
            display: inline-block;
            img {
                max-height: 275px;
            }
            .green-btn {
                margin-top: 18px;
                font-size: 15px;
                font-weight: 500;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.6;
                letter-spacing: normal;
                text-align: left;
                color: #ffffff;
                border-radius: 10px;
                background-color: #079b03;
                padding: 3px 9px;
                cursor: pointer;
                &:hover {
                    opacity: 0.8;
                }
            }
        }
        .contact-block {
            display: block;
            text-align: right;
            .contact-title {
                font-size: 20px;
                font-weight: 900;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.2;
                letter-spacing: normal;
                color: #ffffff;
                margin-bottom: 35px;
                text-align: right;
                /*padding-right: 40px;*/
            }
            .social-block {
                a {
                    color: #fff;
                    margin: 0 15px;
                    font-size: 32px;
                }
            }
        }
        .footer-copyright{
            margin-top: 85px;
            align-self: center;
            width: 100%;
        }
    }
    @media screen and (max-width: 1023px){
        .footer{
            .center-column{
                .title-column{
                    font-size: 13px;
                }
                .menu{
                    a{
                        font-size: 14px;
                    }
                }
            }
            .contact-block{
                .contact-title{
                    font-size: 13px;
                }
                .social-block{
                    a{
                        margin: 0 5px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 450px){
        .footer{
            .first-sidebar, .second-sidebar{
                margin-bottom: 15px;
            }
            .contact-block{
                text-align: left;
                .contact-title{
                    text-align: left;
                }
            }
            .footer-copyright{
                margin-top: 5px;
                .copyright-text{
                    font-size: 18px;
                }
            }
        }
    }
</style>