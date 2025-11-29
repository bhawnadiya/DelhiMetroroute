class MapMaker{
results = [];
    constructor(){
        this.results = require('./map_data.json');
    }
    getResult(){
        return this.results;
    }
}
export default MapMaker;