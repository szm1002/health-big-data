const riskP = [
    [0.157, 0.076, 0.518, 0.12, 0.004, 0.159, 0.018, 0.016, 0.14, 0.074, 0.16, 0.011],
    [0.382, 0.125, 0.6, 0.3, 0.003, 0.21, 0.071, 0.053, 0.42, 0.26, 0.6, 0.012],
    [0.425, 0.222, 0.556, 0.556, 0.005, 0.246, 0.145, 0.14, 0.58, 0.372, 0.522, 0.024],
    [0.407, 0.251, 0.526, 0.132, 0.06, 0.291, 0.054, 0.032, 0.322, 0.404, 0.819, 0.31],
    [0.497, 0.243, 0.614, 0.402, 0.129, 0.358, 0.156, 0.143, 0.431, 0.489, 0.614, 0.385],
    [0.497, 0.139, 0.497, 0.561, 0.035, 0.243, 0.179, 0.197, 0.399, 0.347, 0.341, 0.179]
];
const RC = [1.76, 3.21, 1.44, 6.2, 1.71, 1.24, 1.75, 2.09, 1.32, 1.45, 1.17, 1.2];

const getRisk = (req, res) => {
    const data = req.body;
    console.log('queryData', data);

    const gender = data.gender[0] === 'male' ? 1 : 0;
    const age = parseInt(data.age);
    const height = parseFloat(data.height) / 100;
    const bmi = parseFloat(data.weight) / Math.pow(height, 2);

    const arr = [];
    arr[2] = data.relativesHighPressure;
    arr[3] = data.selfHighPressure;
    arr[4] = data.alcohol === 1 ? 1 : 0;
    arr[5] = data.diet;
    arr[6] = data.bloodSugar;
    arr[7] = data.diabetes;
    arr[8] = data.cholesterol;
    arr[9] = data.triglyceride;
    arr[10] = data.exercise === 1 ? 1 : 0;
    arr[11] = data.smoking === 1 ? 1 : 0;

    console.log('gender', gender);
    console.log('age', age);
    console.log('bmi', bmi);
    console.log('arr', arr);

    const riskFactor = getRiskFactor(gender, age, bmi, arr);
    console.log('riskFactor', riskFactor);
    const riskTip = getRiskTip(riskFactor);
    console.log('riskTip', riskTip);

    const risk = {
        riskFactor: riskFactor,
        riskTip: riskTip
    };
    return res.json(risk);
};

const getRiskFactor = (gender, age, bmi, arr) => {
    const line = getLine(gender, age);

    if (bmi < 24) {
        arr[0] = 0;
        arr[1] = 0;
    } else if (bmi < 28) {
        arr[0] = 1;
        arr[1] = 0;
    } else {
        arr[0] = 0;
        arr[1] = 1;
    }

    if (arr[7] === 1) {
        arr[6] = 0;
    }

    let denominator = 1; // 分母
    let numerator = 1; // 分子
    for (let i = 0; i < arr.length; i++) {
        denominator *= (riskP[line][i] * RC[i] + 1 - riskP[line][i]);
        if (arr[i] === 1) {
            numerator *= RC[i];
        }
    }

    return numerator / denominator;
};

const getLine = (gender, age) => {
    let r = 0;

    if (age <= 39) {
        r = 0;
    } else if (age <= 59) {
        r = 1;
    } else {
        r = 2;
    }

    if (gender === 1) {
        r += 3;
    }

    return r;
};

const getRiskTip = (riskFactor) => {
    let tip;
    if (riskFactor < 0.5) {
        tip = '显著低于';
    } else if (riskFactor < 0.9) {
        tip = '低于';
    } else if (riskFactor < 1.1) {
        tip = '等于';
    } else if (riskFactor < 2.0) {
        tip = '高于';
    } else {
        tip = '显著高于';
    }

    return `${tip}一般人群`;
}

module.exports = getRisk;
