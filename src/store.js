import { reactive } from 'vue'
import axios from "axios";

export const store = reactive({
    searchText: "",
    loading: true,
    API_URL_CARD: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1000&offset=0",
    API_URL_ARCHETYPE: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    cards: null,
    info: null,
    archetypes: null,
    fetchCards(url) {
        axios
            .get(url)
            .then((response) => {
                this.cards = response.data.data;
                this.loading = false;
                //console.log(response)
                //console.log(target[this.cards])
            })
            .catch((err) => {
                console.log(err);
                console.error(err.message);
            });
    },
    fetchArchetypes(url) {
        axios
            .get(url)
            .then((response) => {
                this.archetypes = response.data;
                //console.log(response)
                //console.log(target[this.cards])
            })
            .catch((err) => {
                console.log(err);
                console.error(err.message);
            });

    }
});