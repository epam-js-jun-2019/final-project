import LSService from './LocalstorageService';

const PokemonService = () => {

    const PREVIEWS_PER_PAGE = 18;

    function getMaxPage(itemsNumber) {
        return Math.floor(itemsNumber / PREVIEWS_PER_PAGE) + 1;
    }

    function updateDataToCatched(data, id) {
        return data.map(item => {
            if(item.id === id) {
                item = {
                    ...item,
                    catched: true,
                    date: Date.now()
                };
                updateCatchedCollection(item);
            };
            return item;
        })
    }

    function updateCatchedCollection(item) {
        const catchedData = (LSService.readLSData('catched')) ?
                            LSService.readLSData('catched') :
                            [];
        catchedData.push(item);
        LSService.writeLSData('catched', catchedData);
    }

    function hasCatchedData() {
        return !!(LSService.isInLS('catched'))
    }

    function prepareCatchedData(page) {
        const catchedData = getCatchedData();
        return calcViewedData(catchedData, page);
    }

    function getCatchedData() {
        return (LSService.readLSData('catched')) ?
                LSService.readLSData('catched') :
                [];
    }

    function calcViewedData(data, page) {
        const calcViewedData = data.slice((page - 1) * PREVIEWS_PER_PAGE, PREVIEWS_PER_PAGE * page);
        return calcViewedData;
    }

    return {
        getMaxPage,
        updateDataToCatched,
        hasCatchedData,
        getCatchedData,
        calcViewedData,
        prepareCatchedData
    };
}

export default PokemonService();