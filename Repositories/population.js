import axios from "axios";
async function getPopulation({drilldowns, measures}){
    const urlGetPopulation = `https://datausa.io/api/data?drilldowns=${drilldowns}&measures=Population`
    let result = []
    axios.get(urlGetPopulation).then(responseData => {
        responseData.data.data.forEach(function(item){
            let myObject = {}
            myObject.nationId = item['ID nation']
            myObject.year = item['Year']
            myObject.population = item['Population']
            result.push(myObject)
        })
        return result
    }).catch(error => {
        throw error
    })
}

export default {
    getPopulation,
}