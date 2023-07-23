import axios from 'axios';

export const gitHubApi = axios.create({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers:{
        Authorization:'Bearer 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'
    }
});





