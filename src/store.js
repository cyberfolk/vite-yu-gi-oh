import { reactive } from 'vue'
import axios from "axios";

export const store = reactive({
    searchText: "",
    loading: true,
    API_URL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    cards: null,
    info: null,
    fetchCard(url) {
        axios
            .get(url)
            .then((response) => {
                //console.log(response.data);
                this.cards = response.data.results;
                this.info = response.data.info;
                this.loading = false;
            })
            .catch((err) => {
                console.log(err);
                console.error(err.message);
            });
    },
});