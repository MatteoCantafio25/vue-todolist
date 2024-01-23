// CONTROLLO SE HO COLLEGATO VUE TRAMITE CONSOLE
console.log("Vue ok", Vue);

// FACCIO IL DESTRUCTURING DEL METODO CREATEAPP DA VUE
const { createApp } = Vue;


// CREO L'APPLICAZIONE
const app = createApp({
    // DO IL NOME ALL'APPLICAZIONE
    name: "Vue TodoList",
    // USO LA FUNZIONE (DATA) PER FARMI RESTITUIRE L'OGGETTO
    data() {
        // CREO L'OGGETTO
        return {
            // PREDO GLI ELEMENTI NELLA PAGE DATA
            tasks,

            // IMPOSTO CHE IL NUOVO TESTO DEI TASK SIA VUOTO DI BASE
            newTaskText: "",
        }
    },

    // METODI

    methods: {

        // CREO UNA FUNZIONE CHE ELIMINA I TASK DALLA LISTA
        deleteTask(id) {
            // RIASSEGNO ALL'ARRAY PRINCIPALE UN NUOVO ARRAY GENERATO CON LA FUNZIONE FILTER PER AVERE UNA LISTA CON GLI STESSI ELEMENTI MA SENZA L'ELEMENTO CON ID CORRENTE
            this.tasks = this.tasks.filter(task => (id !== task.id))
        },


        // CREO UNA FUNZIONE CHE AGGIUNGE NUOVI TASK ALL'ARRAY DI PARTENZA
        addNewTask() {

            // CREO L'OGGETTO CHE DEVO INSERIRE NELL'ARRAY DI PARTENZA
            const newTask = {
                id: new Date().toISOString(),
                done: false,
                text: this.newTaskText
            }

            // INSERISCO NELL'ARRAY DI PARTENZA L'OGGETTO APPENA CREATO
            this.tasks.push(newTask);

            // SVUOTO IL CAMPO IN PAGINA
            this.newTaskText = "";
        },

        // CREO UNA FUNZIONE TOGGOLA IL VALORE DEL DONE
        /*
        toggleDone(id) {
            this.tasks.forEach(task => {
                if (id === task.id) {
                    task.done = !task.done
                }
            });
        },
        */
    },
})

// MONTO L'APPLICAZIONE NELL'ELEMENTO SELEZIONATO TRA PARENTESI
app.mount("#root");
