const LSWorker = () => {

    function readLSData(key) {
        const result = localStorage.getItem(key);
        return JSON.parse(result);
    }

    function readLSDataById(id) {
        const keys = readLSKeys();
        let data = [],
            result = -1;
        for(let key of keys) {
            data = readLSData(key);
            result = data.find(item => id == item.id);
            if (result) break;
        }
        return result;
    }

    function writeLSData(newKey, data) {
        localStorage.setItem(newKey, JSON.stringify(data));
    }

    function isInLS(key) {
        return !!(localStorage.getItem(key))
    }

    function readLSKeys() {
        const keys = Object.keys(localStorage);
        return keys.filter(key => (Number.parseInt(key) || key == 'catched'))
    }

    return {
        readLSData,
        readLSKeys,
        readLSDataById,
        writeLSData,
        isInLS
    }
}

export default LSWorker();