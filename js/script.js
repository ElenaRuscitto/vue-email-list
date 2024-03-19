const { createApp } = Vue;

createApp ({

  data () {
    return {

      apiURL: 'https://flynn.boolean.careers/exercises/api/random/mail',
      myEmailArray: [],
      risultato: ''
    }
  },

  methods:{

    getApi() {

      for (let i = 0; i >= 10; i++) {
        axios.get(this.apiURL)
        .then((risposta) => {

          console.log(risultato.data);
          // data è il contenuto della risposta che DOBBIAMO SEMPRE studiare perché non sappiamo prima come è fatto
          console.log('----->>> ',risultato.data.response);

          // this.title diventa 'OK' se risposta.data.response === true
          this.title = risultato.data.response ? 'OK' : 'NOOOO!!!'
        })
        .catch(errore => {
          console.log('MESSAGGIO DI ERRORE');
          console.log(errore.message);

        })
      }


    }

  },

  mounted() {

  },
}).mount('#app')