const getCancer = (req, res) => {
    const name = req.query.name;
    const uid = req.query.uid;
    const data = {
        cancerRisk: 0.6,
        name: name,
        uid: uid,
        city: '北京',
        age: 24,
        gender: 1,
        height: 175,
        weight: 77,
        BMI: 25.14,
        shousuoya: 120.0,
        shuzhangya: 80.0,
        WBC: 3.7,
        RBC: 4.46,
        HGB: 146.0,
        HCT: 41.4,
        MCV: 92.8,
        MCH: 32.7,
        MCHC: 353.0,
        RDWCV: 11.9,
        RDWSD: 42.9,
        PLT: 216.0,
        MPV: 8.8,
        PDW: 11.0,
        MON: 11.3,
        MON_: 0.4,
        GRA: 1.5,
        GRA_: 1.5,
        LYM_: 1.8,
        _LYM: 47.9,
        ALT: 10.0,
        Urea: 3.12,
        Cr: 52.9,
        UA: 223.7,
        TC: 4.97,
        TG: 1.48,
        FPG: 4.42,
        SG: 1.02,
        pH: 6.0
    };
    return res.json(data);
};

module.exports = getCancer;
