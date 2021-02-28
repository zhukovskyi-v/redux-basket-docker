export default class ProductStoreService {
    data = [{
        "id": 1,
        "name": "article 1",
        "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 25
    },
        {
            "id": 2,
            "name": "article 2",
            "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "price": 35
        },
        {
            "id": 3,
            "name": "article 3",
            "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "price": 45
        }]


    getData() {
        return new Promise((res) => {
            res(this.data)
        })
    }

}