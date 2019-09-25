import LSService from './LocalstorageService';
import { PREVIEWS_PER_PAGE, CATEGORY_CATCHED } from '../constants/constants';

const PokemonService = () => {
    function getMaxPage(itemsNumber) {
        return Math.floor(itemsNumber / PREVIEWS_PER_PAGE) + !!(itemsNumber % PREVIEWS_PER_PAGE);
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
        const catchedData = LSService.readLSData(CATEGORY_CATCHED) || [];
        catchedData.push(item);
        LSService.writeLSData(CATEGORY_CATCHED, catchedData);
    }

    function hasCatchedData() {
        return !!(LSService.isInLS(CATEGORY_CATCHED))
    }

    function prepareCatchedData(page) {
        const catchedData = getCatchedData();
        return calcViewedData(catchedData, page);
    }

    function getCatchedData() {
        return LSService.readLSData(CATEGORY_CATCHED) || [];
    }

    function calcViewedData(data, page) {
        return data.slice((page - 1) * PREVIEWS_PER_PAGE, PREVIEWS_PER_PAGE * page);
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