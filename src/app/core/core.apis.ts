const EXPRESS_SERVER = 'http://localhost:8080/';
const STACKOVERFLOW_SERVER = 'https://api.stackexchange.com/';

/** URL strings used in API calls */
export const URL_API = {
    /**
     * Login api
     */
    LOGIN: EXPRESS_SERVER + 'login',
    LOCAL_STORAGE: {
        KEYS: {
            TOKEN: 'access-token',
        }
    },
    QUESTION_LIST: STACKOVERFLOW_SERVER + '2.2/questions/featured?order=desc&sort=activity&site=stackoverflow',
    GET_USER_PROFILE: (id) => {
        return STACKOVERFLOW_SERVER + '2.2/users/' + id + '?order=desc&sort=reputation&site=stackoverflow';
    },
    GET_USER_TAGS: (id) => {
        return STACKOVERFLOW_SERVER + '2.2/users/' + id + '/tags?order=desc&sort=popular&site=stackoverflow';
    },
    GET_USER_QUESTION: (id) => {
        return STACKOVERFLOW_SERVER + '2.2/users/' + id + '/questions?order=desc&sort=activity&site=stackoverflow';
    }
};
