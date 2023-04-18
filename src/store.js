import { reactive } from 'vue'
import axios from "axios";

export const store = reactive({
    loading_cards: true,
    loading_archetypes: true,
    API_URL_CARD: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    API_URL_ARCHETYPE: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    cards: null,
    archetypes: null,
    archetype_selected: "",

    fetchCards(url, archetype = "") {//archetype is an optional parameter
        const queryLimitator = this.createQueryLimitator(10, 0);
        let queryArchetype = this.createQueryArchetype(archetype)
        let urlComposite = url + "?" + queryLimitator + queryArchetype;
        console.log(urlComposite);

        axios
            .get(urlComposite)
            .then((response) => {
                this.cards = response.data.data;
                this.loading_cards = false;
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
                this.loading_archetypes = false;
            })
            .catch((err) => {
                console.log(err);
                console.error(err.message);
            });

    },

    createQueryLimitator(num, offset) {
        return `num=${num}&offset=${offset}`;
    },

    createQueryArchetype(archetype) {
        let query = "";
        if (archetype) {
            query = `&archetype=${archetype}`
        } else {
            query = "";
        }
        return query;
    }
});