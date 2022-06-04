
export const APP_NAME = 'onelist';

const API = {
    BASE_ENDPOINT : 'https://worklist1-935b.restdb.io/rest/',
    ENDPOINTS : {
        "work_entry" : 'work-entry',
        "client" : 'client'
    }
};

const SUPPORTED_LANGUAGES = [
    "CSS",
    "Javascript", 
    "Python",
    "HTML",
    "XML",
    "VB", 
    "C",
    "CPP",
    "SQL",
    "Pascal",
    "Basic"
]

Object.freeze(API);
Object.freeze(SUPPORTED_LANGUAGES);

export {
    API,
    SUPPORTED_LANGUAGES
};




