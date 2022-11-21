var app = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        activeContact: 0,
        newMessage: "",
        messageReceived: "",
        searchProfile: "",
    },
    methods: {
        profileActive(index) {
            this.activeContact = index;
        },

        writeMessage(){
            if(
                this.contacts[this.activeContact].messages.push({
                date: this.nowDate(),
                message: this.newMessage.charAt(0).toUpperCase() + this.newMessage.slice(1),
                status: 'sent'
            }))
            {
                this.newMessage = "";
                const activeReceived = this.activeContact;
                this.messageReceived = setTimeout(() => {
                    this.contacts[activeReceived].messages.push({
                        date: this.nowDate(),
                        message: 'ok',
                        status: 'received'
                    })
            }, this.getRandomInteger(1000, 5000));
            }
        },
        nowDate(){
            return luxon.DateTime.now().toFormat('dd/LL/yyyy HH:mm');
        },
        getRandomInteger(min, max) {
			return Math.floor(Math.random() * (max - min + 1) ) + min;
		},

        // getProfile(){
        //     this.contacts.forEach((contact) => {
        //         if(contact.name[this.activeContact].includes(this.searchProfile)){
        //             contact = true;
        //         } else {
        //             contact = false;
        //             console.log(contact)
        //         }
        //     });
            
        //     console.log(this.i)
        //     console.log(this.contacts.name[this.contacts.name[this.activeContact]].includes(this.searchProfile))
        // }

        getProfile(){
            for(let i=0; i<this.contacts.length; i++){
                if(this.contacts[i].name.toLowerCase().includes(this.searchProfile.toLowerCase())){
                    this.contacts[i].visible = true;
                    console.log(this.contacts[i].visible)
                }
                else{
                    this.contacts[i].visible = false;
                    console.log(this.contacts[i].visible)
                }
            } 
        },

    }

        


})




//selectedUserMessages era al posto di activeContact




//perchè non funziona?

// getProfile(){
//     if((this.contacts[this.activeContact].name).includes(this.searchProfile)){
//         this.activeContact = this.contacts[this.activeContact].name;
        
//     }
//     console.log(this.contacts[this.activeContact].name)
//     console.log(this.searchProfile)
// }



// perchè non funziona?
// <input type="text" class="search" placeholder="Cerca o inizia una nuova chat" v-model="searchProfile" @keyup="getProfile">
// <div class="profiles" :class="(activeContact == false) ? 'hidden' : ''" v-for="(contact, i) in contacts" :key="contact.name" @click="profileActive(i)">
// getProfile(){
//     for(let i = 0; i < this.contacts.length -1; i++){
        
//         if(this.contacts[i].name.includes(this.searchProfile)){
//             this.activeContact[i] = true;
//         } else {
//             this.activeContact[i] = false;
//         }
//     }
//     console.log(this.index.name)
//     console.log(this.searchProfile)
// }

//evoluta ma non funzionante lo stesso

{/* <div class="profiles" :class="(contact == false) ? 'hidden' : ''" v-for="(contact, i) in contacts" :key="contact.name" @click="profileActive(i)"> */}
// getProfile(){
//     for(let i = 0; i < this.contacts.length; i++){
        
//         if(this.contacts[i].name.toLowerCase().includes(this.searchProfile.toLowerCase())){
//             this.contacts[i] = true;
//         } else {
//             this.contacts[i] = false;
//         }
//     }
//     console.log(this.index.name)
//     console.log(this.searchProfile)
// },

// }

 // getProfile(){
        //     for(let i=0; i<this.contacts.length; i++){
        //         if(this.contacts[i].name.toLowerCase().includes(this.searchProfile.toLowerCase())){
        //             this.contacts[i].visible = true;
        //             console.log(this.contacts[i].visible)
        //         }
        //         else{
        //             this.contacts[i].visible = false;
        //             console.log(this.contacts[i].visible)
        //         }
        //     } 
        // },



// messageReceived con setTimeout

// activeContact: 0,
// newMessage: "",
// messageReceived: "",
// },
// methods: {
// profileActive(index) {
//     this.activeContact = index;
// },
// writeMessage(){
//     if(
//         this.contacts[this.activeContact].messages.push({
//         date: this.nowDate(),
//         message: this.newMessage.charAt(0).toUpperCase() + this.newMessage.slice(1),
//         status: 'sent'
//     }))
//     {
//         this.newMessage = "";
//         this.messageReceived = setTimeout(this.myfunction, 1000);
//     }
// },
// nowDate(){
//     return luxon.DateTime.now().toFormat('dd/LL/yyyy HH:mm:ss');
// },
// myfunction(){
//         this.contacts[this.activeContact].messages.push({
//             date: this.nowDate(),
//             message: 'ok',
//             status: 'received'
//         })
// }
// }, 


// })

