import axios from "axios";


axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.params = {
    key: "51771971-26538829ed76446a8c68a5295",
    q: '',
    image_type: 'photo',
    orientation:'horizontal',
    safesearch: true,
}

export function getImagesByQuery(query) {
    return axios.get('',
        { params: { ...axios.defaults.params, q: query } }).then(res => res.data);

}