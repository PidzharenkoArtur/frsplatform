<template>
    <v-container fluid style="z-index: 10" class="me">
        <v-row class="me-row">
            <v-col cols="12">
                <v-row justify="center"
                style="height: 300px;"
                >
                    <v-card
                    class="mx-auto exit-block"
                    outlined
                    color="transparent"
                >
                    <v-list-item three-line>
                        <v-list-item-content class="text-center">
                            <v-list-item-title class="title headline mb-2">NAME</v-list-item-title>
                            <v-list-item-subtitle class="subtitle headline mb-7">ID</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions class="justify-center">
                        <v-btn depressed color="#f89428" class="btn white--text">Выход</v-btn>
                    </v-card-actions>
                    <v-card-actions class="justify-center">
                        <v-btn depressed color="#f89428" class="btn white--text">Назад</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'MePage',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
    .me {
        min-height: calc(100vh - 400px);
        .exit-block {
            border: 2px solid #f89428!important;
            border-radius:0; 
            width: 400px;
            padding: 30px;
            .title, .subtitle {
                font-size: 48px!important;
                color: white;
                margin-bottom: 20px!important;
            }

            .btn {
                padding: 6px 15px;
                font-size: 14px;
                line-height: 1.57142857;
                border-radius: 50px;
                -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);
                box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);
                -webkit-transition: border .2s linear,color .2s linear,width .2s linear,background-color .2s linear;
                transition: border .2s linear,color .2s linear,width .2s linear,background-color .2s linear;
                -webkit-font-smoothing: subpixel-antialiased;
                color: #fff;
                background: #f89428;
                width: 100%;
            }
        }
    }
</style>
