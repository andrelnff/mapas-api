const dataService = require('../services/dataService');

exports.getData = (req, res) => {
    dataService.getData(req.params.dataset).then((data) => {
        if (data) {
            res.json(data);
        } else {
            res.status(204).send('No data available');
        }
    }).catch((error) => {
        console.error(error);
        res.status(500).send('Error reading data');
    });
};

exports.setData = (req, res) => {
    dataService.setData(req.params.dataset, req.body).then(() => {
        res.status(200).send('Data inserted successfully');
    }).catch((error) => {
        console.error(error);
        res.status(500).send('Error inserting data');
    });
};

exports.getAllData = async (req, res) => {
    console.log("metodo sendo chamado");
    const datasets = [
        'bengui_limites',
        'bengui_ruas_asfalto',
        'bengui_ruas_bloquete',
        'bengui_ruas_sem_pavimento',
        'bengui_ruas_alagamento',
        'bengui_ruas_reparos',
        'bengui_ruas_obstrucao',
        'bengui_descarte'
    ];

    let data = {};
    console.log("teste");
    for (const dataset of datasets) {
        try {
            console.log("dataset");
            const datasetData = await dataService.getData(dataset);
            if (datasetData !== null) {
                data[dataset] = datasetData;
            }
        } catch (error) {
            console.error(`Error fetching data for ${dataset}: `, error);
        }
    }

    res.json(data);
};