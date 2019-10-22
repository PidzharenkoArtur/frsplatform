<template>
    <v-container fluid style="z-index: 10">
        <v-row >
            <v-col cols="12">
                <v-row justify="center"
                style="height: 300px;"
                >
                    <v-card
                    class="mx-auto"
                    max-width="400"
                    width="200"
                    outlined
                >
                    <v-list-item three-line>
                        <v-list-item-content class="text-center">
                            <v-list-item-title class="headline mb-2">NAME</v-list-item-title>
                            <v-list-item-subtitle class="headline mb-7">ID</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions class="justify-center">
                        <v-btn depressed width="150" color="#f89428" class="white--text">Выход</v-btn>
                    </v-card-actions>
                    <v-card-actions class="justify-center">
                        <v-btn depressed width="150" color="#f89428" class="white--text">Назад</v-btn>
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

</style>
