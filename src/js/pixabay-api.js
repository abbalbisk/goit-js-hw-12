import axios from "axios";


axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.params = {
    key: "51771971-26538829ed76446a8c68a5295",
    q: '',
    image_type: 'photo',
    orientation:'horizontal',
    safesearch: true,
    per_page: 15,
    page: '',
}

export async function getImagesByQuery(query, page) {
    const res = await axios.get('',
        { params: { ...axios.defaults.params, q: query, page:page } })
    return res.data;
}