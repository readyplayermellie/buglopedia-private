const data = require('../shared/bugsData');
 
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
 
    try {
        console.log('data in the api', data);
        context.res.status(200).json(data.bugData);
    } catch (error) {
        context.res.status(500).send(error);
    }
}
