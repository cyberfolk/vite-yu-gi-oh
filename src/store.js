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
                this.cards = response.data;
                //this.info = response.data.info;
                this.loading = false;
                //console.log(response.data);
                //console.log(this.cards)
            })
            .catch((err) => {
                console.log(err);
                console.error(err.message);
            });
    },
});