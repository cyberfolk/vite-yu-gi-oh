import { reactive } from 'vue'
import axios from "axios";

export const store = reactive({
    searchText: "",
    loading: true,
    API_URL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0",
    cards: null,
    info: null,
    fetchCard(url) {
        axios
            .get(url)
            .then((response) => {
                this.cards = response.data.data;
                this.loading = false;
                console.log(response)
                //console.log(target[this.cards])
            })
            .catch((err) => {
                console.log(err);
                console.error(err.message);
            });
    },
});