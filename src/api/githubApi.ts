import axios from 'axios';

export const gitHubApi = axios.create({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers:{
        Authorization:'Bearer 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'
    }
});





