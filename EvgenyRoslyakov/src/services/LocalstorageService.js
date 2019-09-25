import { CATEGORY_CATCHED } from '../constants/constants';

const LSService = () => {
    function readLSData(key) {
        try {
            const result = localStorage.getItem(key);
            return JSON.parse(result);
        } catch (err) {
            console.log(`error: ${err.message}`);
            return;
        };
    };

    function readLSDataById(id) {
        const keys = readLSKeys();
        const numId = Number.parseInt(id);
        let data = [],
            result = null;
        for(let key of keys) {
            data = readLSData(key);
            result = data.find(item => numId === item.id);
            if (result) break;
        };
        if(!result) {
            console.log('no such id');
            return;
        };
        return result;
    };

    function writeLSData(newKey, data) {
        try {
            localStorage.setItem(newKey, JSON.stringify(data));
            return data;
        } catch (err) {
            console.log(`error: ${err.message}`);
            return;
        };
    };

    function isInLS(key) {
        return !!(localStorage.getItem(key));
    };

    function readLSKeys() {
        const keys = Object.keys(localStorage);
        return keys.filter(key => (Number.parseInt(key) || key === CATEGORY_CATCHED));
    };

    return {
        readLSData,
        readLSKeys,
        readLSDataById,
        writeLSData,
        isInLS
    };
};

export default LSService();