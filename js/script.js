const { createApp } = Vue;

createApp ({

  data () {
    return {

      apiURL: 'https://flynn.boolean.careers/exercises/api/random/mail',
      myEmailArray: []

    }
  },

  methods:{

    getApi() {

      for (let i = 0; i < 10; i++) {
        axios.get(this.apiURL)
        .then((risultato) => {

          console.log(risultato.data);
          console.log('----->>> ',risultato.data.response);

          this.myEmailArray.push(risultato.data.response)
          // this.risultato = risposta.data.response.join(', ')
        })
        .catch(errore => {
          console.log('MESSAGGIO DI ERRORE');
          console.log(errore.message);

        })
      }


    }

  },

  mounted() {
    this.getApi()
  },
}).mount('#app')