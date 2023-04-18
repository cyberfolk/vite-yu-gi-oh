import { reactive } from 'vue'
import axios from "axios";

export const store = reactive({
    loading_cards: true,
    loading_archetypes: true,
    API_URL_CARD: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    API_URL_ARCHETYPE: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    cards: null,
    archetypes: null,
    filter: "",

    fetchCards(url, archetype = "") {//archetype is an optional parameter
        this.loading_cards = true;
        let urlComposite = this.createUrlComposite(url, 1000, 0, archetype);
        //console.log(urlComposite);

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

    createUrlComposite(url, num, offset, archetype) {
        const queryLimitator = this.createQueryLimitator(num, offset);
        let queryArchetype = this.createQueryArchetype(archetype)
        return url + "?" + queryLimitator + queryArchetype;
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