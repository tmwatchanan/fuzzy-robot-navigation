$(document).ready(function () {

    dwpt = document.getElementById('dwpt');
    dobs = document.getElementById('dobs');
    aobs = document.getElementById('aobs');
    awptobs = document.getElementById('awptobs');
    bo = document.getElementById('bo');

    var dwpt_near = {
        x: [0, 2, 3.5],
        y: [1, 1, 0],
        name: 'Near'
    };

    var dwpt_midway = {
        x: [0, 2.0, 3.5, 5.0],
        y: [null, 0, 1, 0],
        name: 'Midway'
    };

    var dwpt_far = {
        x: [0, 3.5, 5.0, 7.0],
        y: [null, 0, 1, 1],
        name: 'Far'
    };

    var dwpt_data = [dwpt_near, dwpt_midway, dwpt_far];

    Plotly.plot(dwpt, dwpt_data, {
        margin: {
            t: 50
        }
    });


    var dobs_near = {
        x: [0, 0.4, 0.7],
        y: [1, 1, 0],
        name: 'Near'
    };

    var dobs_midway = {
        x: [0, 0.4, 0.7, 1.0],
        y: [null, 0, 1, 0],
        name: 'Midway'
    };

    var dobs_far = {
        x: [0, 0.7, 1.0, 1.2],
        y: [null, 0, 1, 1],
        name: 'Far'
    };

    var dobs_data = [dobs_near, dobs_midway, dobs_far];

    Plotly.plot(dobs, dobs_data, {
        margin: {
            t: 50
        }
    });


    var aobs_small = {
        x: [0, 60, 90],
        y: [1, 1, 0],
        name: 'Small'
    };

    var aobs_moderate = {
        x: [0, 60, 90, 130],
        y: [null, 0, 1, 0],
        name: 'Moderate'
    };

    var aobs_big = {
        x: [0, 90, 130, 180],
        y: [null, 0, 1, 1],
        name: 'Big'
    };

    var aobs_data = [aobs_small, aobs_moderate, aobs_big];

    Plotly.plot(aobs, aobs_data, {
        margin: {
            t: 50
        }
    });


    var awptobs_small = {
        x: [0, 30, 60],
        y: [1, 1, 0],
        name: 'Small'
    };

    var awptobs_moderate = {
        x: [0, 30, 60, 90],
        y: [null, 0, 1, 0],
        name: 'Moderate'
    };

    var awptobs_big = {
        x: [0, 60, 90, 180],
        y: [null, 0, 1, 1],
        name: 'Big'
    };

    var awptobs_data = [awptobs_small, awptobs_moderate, awptobs_big];

    Plotly.plot(awptobs, awptobs_data, {
        margin: {
            t: 50
        }
    });


    var bo_verylow = {
        x: [0, 0.25],
        y: [1, 0],
        name: 'Very Low'
    };

    var bo_low = {
        x: [0, 0.25, 0.5],
        y: [0, 1, 0],
        name: 'Low'
    };

    var bo_moderate = {
        x: [0, 0.25, 0.5, 0.75],
        y: [null, 0, 1, 0],
        name: 'Moderate'
    };

    var bo_high = {
        x: [0, 0.5, 0.75, 1.0],
        y: [null, 0, 1, 0],
        name: 'High'
    };

    var bo_veryhigh = {
        x: [0, 0.75, 1.0],
        y: [null, 0, 1],
        name: 'Very High'
    };

    var bo_data = [bo_verylow, bo_low, bo_moderate, bo_high, bo_veryhigh];

    Plotly.plot(bo, bo_data, {
        margin: {
            t: 50
        }
    });

});