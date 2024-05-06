const {City} = require('../models/index');

class CityRepository{
    async createCity({ name }){
        try{
            const city = await City.create({ 
                name
                //above line equivalent to name:name (its just a shorthand);
             });
            return city;
        } catch (error){
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error){
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }
    }

    async updateCity(cityId , data){
        try {
            // the below approazh will also work but will not return the updated object
            // if we are using pg then returning: true can be used else not
            // const city = await City.update(data , {
            //     where: {
            //         id: cityId 
            //     }
            // });
            // for getting updated data (in the response json) in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
            
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
             const city = await City.findByPk(cityId);
             return city;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw {error};
        }
    }
}
module.exports = CityRepository;