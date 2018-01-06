const healthData = require('../public/assets/health-data');

const getCancer = (req, res) => {
    const name = req.query.name;
    const uid = req.query.uid;
    
    const data = Object.assign({}, {
        name: name,
        uid: uid
    }, healthData[uid]);
    
    return res.json(data);
};

module.exports = getCancer;
