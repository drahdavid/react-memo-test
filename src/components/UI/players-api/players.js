import axios from "axios";


const playerScore = async () => {
    const response = await axios.get('https://60f02537f587af00179d3d8e.mockapi.io/api/position-table/players');

    return response;
};

export default playerScore;
