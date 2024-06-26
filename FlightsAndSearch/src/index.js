const express = require('express');
const { PORT } = require('./config/serverConfig.js');
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/index.js');


// const {sequelize , Airport, City , Airplane} = require('./models/index.js');

const SetUpAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api' , ApiRoutes);



    app.listen(PORT , async () => {
        console.log(`server started at ${PORT}`);

        if(process.env.SYNC_DB){
            sequelize.sync({alter:true});
        }

        // await Airplane.create({
        //     modelNumber: 'Bombardier CRJ'
        // })

    


    //     const city = await City.findOne({
    //         where: {
    //             id : 2
    //         },
    //         attributes: ['name'],
    //     });
    //     const airports = await city.getAirports();
    //     console.log(city);
//     const city = await City.findOne({
//     where: {
//         id: 2
//     }
// });


    // Assuming the association is defined correctly and getAirports() is available
    // const airports = await city.getAirports();
    // console.log('City:', city.name);
    // console.log('Associated Airports:', airports);

    // const airport = await city.addAirport({
    //     name: 'jindal vijayanagar airport'
    // })
    // console.log(airport);

    // const airports = await city.getAirports();
    
    // if (city) {
    //     // Access the associated airports for the city
    //     const airports = await city.getAirports();
    //     console.log('City:', city.name);
    //     console.log('Associated Airports:', airports);
    // } else {
    //     console.log('City with id 2 not found');
    // }
    
    });

}

SetUpAndStartServer();