const LSWorker = () => {

    function readLSData(key) {
        const result = localStorage.getItem(key);
        return JSON.parse(result);
    }

    function writeLSData(newKey, data) {
        localStorage.setItem(newKey, JSON.stringify(data));
    }

    function isInLS(key) {
        return !!(localStorage.getItem(key))
    }

    return {
        readLSData,
        writeLSData,
        isInLS
    }
}

export default LSWorker();