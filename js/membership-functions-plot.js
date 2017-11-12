$(document).ready(function () {

    dwpt = document.getElementById('dwpt');
    dobs = document.getElementById('dobs');
    aobs = document.getElementById('aobs');
    awptobs = document.getElementById('awptobs');
    bo = document.getElementById('bo');
    b = document.getElementById('b');

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

    var layout = {
        xaxis: {
            autotick: false,
            range: [0, 7],
            tick0: 0,
            dtick: 0.5,
            title: 'Distance to waypoint (m)',
            titlefont: {
                family: 'Times new roman',
                size: 18,
                color: '#7f7f7f'
            }
        },
        yaxis: {
            autotick: false,
            title: 'Degree of membership',
            titlefont: {
                family: 'Times new roman',
                size: 18,
                color: '#7f7f7f'
            }
        },
        margin: {
            t: 50
        }
    };

    var dwpt_data = [dwpt_near, dwpt_midway, dwpt_far, ];

    Plotly.plot(dwpt, dwpt_data, layout);


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

    var layout = {
        xaxis: {
            autotick: false,
            range: [0, 1.2],
            tick0: 0,
            dtick: 0.1,
            title: 'Distance to nearest obstacle (m)',
            titlefont: {
                family: 'Times new roman',
                size: 18,
                color: '#7f7f7f'
            }
        },
        yaxis: {
            title: 'Degree of membership',
            titlefont: {
                family: 'Times new roman',
                size: 18,
                color: '#7f7f7f'
            }
        },
        margin: {
            t: 50
        }
    };

    var dobs_data = [dobs_near, dobs_midway, dobs_far];

    Plotly.plot(dobs, dobs_data, layout);


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

    var layout = {
        xaxis: {
            autotick: false,
            range: [0, 180],
            tick0: 0,
            dtick: 10,
            title: 'Angle between robot and obstacle (degree)',
            titlefont: {
                family: 'Times new roman',
                size: 18,
                color: '#7f7f7f'
            }
        },
        yaxis: {
            title: 'Degree of membership',
            titlefont: {
                family: 'Times new roman',
                size: 18,
                color: '#7f7f7f'
            }
        },
        margin: {
            t: 50
        }
    };

    var aobs_data = [aobs_small, aobs_moderate, aobs_big];

    Plotly.plot(aobs, aobs_data, layout);


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

    var layout = {
        xaxis: {
            autotick: false,
            range: [0, 180],
            tick0: 0,
            dtick: 10,
            title: 'Angle between waypoint and obstacle (degree)',
            titlefont: {
                family: 'Times new roman',
                size: 18,
                color: '#7f7f7f'
            }
        },
        yaxis: {
            title: 'Degree of membership',
            titlefont: {
                family: 'Times new roman',
                size: 18,
                color: '#7f7f7f'
            }
        },
        margin: {
            t: 50
        }
    };

    var awptobs_data = [awptobs_small, awptobs_moderate, awptobs_big];

    Plotly.plot(awptobs, awptobs_data, layout);


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

    var layout = {
        xaxis: {
            autotick: false,
            range: [0, 1],
            tick0: 0,
            dtick: 0.1,
            title: 'Behaviour coefficient (for Bo)',
            titlefont: {
                family: 'Times new roman',
                size: 18,
                color: '#7f7f7f'
            }
        },
        yaxis: {
            title: 'Degree of membership',
            titlefont: {
                family: 'Times new roman',
                size: 18,
                color: '#7f7f7f'
            }
        },
        margin: {
            t: 50
        }
    };

    var bo_data = [bo_verylow, bo_low, bo_moderate, bo_high, bo_veryhigh];

    Plotly.plot(bo, bo_data, layout);

    var b_veryverylow = {
        x: [0, 1 / 6],
        y: [1, 0],
        name: 'Very Very Low'
    };

    var b_verylow = {
        x: [0, 1 / 6, 1 / 3],
        y: [0, 1, 0],
        name: 'Very Low'
    };

    var b_low = {
        x: [1 / 6, 1 / 3, 0.5],
        y: [0, 1, 0],
        name: 'Low'
    };

    var b_moderate = {
        x: [1 / 3, 0.5, 2 / 3],
        y: [0, 1, 0],
        name: 'Moderate'
    };

    var b_high = {
        x: [0.5, 2 / 3, 5 / 6],
        y: [0, 1, 0],
        name: 'High'
    };

    var b_veryhigh = {
        x: [2 / 3, 5 / 6, 1],
        y: [0, 1, 0],
        name: 'Very High'
    };

    var b_veryveryhigh = {
        x: [5 / 6, 1],
        y: [0, 1],
        name: 'Very Very High'
    };

    var layout = {
        xaxis: {
            autotick: false,
            range: [0, 1],
            tick0: 0,
            dtick: 0.1,
            title: 'Behaviour coefficient (for Bt, Bw, Bwd)',
            titlefont: {
                family: 'Times new roman',
                size: 18,
                color: '#7f7f7f'
            }
        },
        yaxis: {
            title: 'Degree of membership',
            titlefont: {
                family: 'Times new roman',
                size: 18,
                color: '#7f7f7f'
            }
        },
        margin: {
            t: 50
        }
    };

    var b_data = [b_veryverylow, b_verylow, b_low, b_moderate, b_high, b_veryhigh, b_veryveryhigh];

    Plotly.plot(b, b_data, layout);

});