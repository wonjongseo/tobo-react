const BASE_URL = "https://filot-shopping.herokuapp.com";

export const getProducts = () => {
    return fetch(`${BASE_URL}/products/main`).then((response) =>
        response.json()
    );
};
