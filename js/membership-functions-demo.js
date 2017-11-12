var bt, bo, bw, bwd;

$(document).ready(function () {
    initGraph();
});

setInterval(function () {
    if (isAnyBox) {
        Plotly.purge(bo);

        var layout = {
            width: 300,
            height: 200,
            showticklabels: false,
            ticks: '',
            xaxis: {
                range: [0, 1],
                showgrid: false,
                autotick: true,
                ticks: '',
                showticklabels: false
            },
            yaxis: {
                range: [0, 1],
                showgrid: false,
                autotick: true,
                ticks: '',
                showticklabels: false
            },
            margin: {
                t: 50
            },
            showlegend: false
        };

        var fbo_verylow = {
            x: [0, -((fBo["very low"] * 0.25) - 0.25), 0.25],
            y: [fBo["very low"], fBo["very low"], 0],
            fill: 'tonexty',
            name: "firing strength very low"
        }

        var fbo_low = {
            x: [0, -(Math.pow(((fBo["low"] - 1) * 0.25), 2) - 0.25), 0.5],
            y: [0, fBo["low"], fBo["low"], 0],
            fill: 'tonexty',
            name: 'firing strength Low'
        };

        var bo_moderate = {
            x: [0, 0.25, 0.5, 0.75],
            y: [null, 0, 1, 0],
            fill: 'tonexty',
            name: 'firing strength Moderate'
        };

        var bo_high = {
            x: [0, 0.5, 0.75, 1.0],
            y: [null, 0, 1, 0],
            fill: 'tonexty',
            name: 'firing strength High'
        };

        var bo_veryhigh = {
            x: [0, 0.75, 1.0],
            y: [null, 0, 1],
            fill: 'tonexty',
            name: 'firing strength Very High'
        };

        var fbo_data = [fbo_verylow, fbo_low];

        Plotly.plot(bo, fbo_data, layout, {
            showLink: false,
            staticPlot: true
        });
    }
}, 100);

function initGraph() {
    bt = document.getElementById("Bt");
    bo = document.getElementById("Bo");
    bw = document.getElementById("Bw");
    bwd = document.getElementById("Bwd");

    var layout = {
        width: 300,
        height: 200,
        showticklabels: false,
        ticks: '',
        xaxis: {
            range: [0, 1],
            showgrid: false,
            autotick: true,
            ticks: '',
            showticklabels: false
        },
        yaxis: {
            range: [0, 1],
            showgrid: false,
            autotick: true,
            ticks: '',
            showticklabels: false
        },
        margin: {
            t: 50
        },
        showlegend: false
    };

    var bt_veryverylow = {
        x: [0, 1 / 6],
        y: [1, 0],
        name: 'Very Very Low'
    };

    var bt_verylow = {
        x: [0, 1 / 6, 1 / 3],
        y: [0, 1, 0],
        name: 'Very Low'
    };

    var bt_low = {
        x: [1 / 6, 1 / 3, 0.5],
        y: [0, 1, 0],
        name: 'Low'
    };

    var bt_moderate = {
        x: [1 / 3, 0.5, 2 / 3],
        y: [0, 1, 0],
        name: 'Moderate'
    };

    var bt_high = {
        x: [0.5, 2 / 3, 5 / 6],
        y: [0, 1, 0],
        name: 'High'
    };

    var bt_veryhigh = {
        x: [2 / 3, 5 / 6, 1],
        y: [0, 1, 0],
        name: 'Very High'
    };

    var bt_veryveryhigh = {
        x: [5 / 6, 1],
        y: [0, 1],
        name: 'Very Very High'
    };

    var bt_data = [bt_veryverylow, bt_verylow, bt_low, bt_moderate, bt_high, bt_veryhigh, bt_veryveryhigh];

    Plotly.plot(bt, bt_data, layout, {
        showLink: false,
        staticPlot: true
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

    Plotly.plot(bo, bo_data, layout, {
        showLink: false,
        staticPlot: true
    });

    var bw_veryverylow = {
        x: [0, 1 / 6],
        y: [1, 0],
        name: 'Very Very Low'
    };

    var bw_verylow = {
        x: [0, 1 / 6, 1 / 3],
        y: [0, 1, 0],
        name: 'Very Low'
    };

    var bw_low = {
        x: [1 / 6, 1 / 3, 0.5],
        y: [0, 1, 0],
        name: 'Low'
    };

    var bw_moderate = {
        x: [1 / 3, 0.5, 2 / 3],
        y: [0, 1, 0],
        name: 'Moderate'
    };

    var bw_high = {
        x: [0.5, 2 / 3, 5 / 6],
        y: [0, 1, 0],
        name: 'High'
    };

    var bw_veryhigh = {
        x: [2 / 3, 5 / 6, 1],
        y: [0, 1, 0],
        name: 'Very High'
    };

    var bw_veryveryhigh = {
        x: [5 / 6, 1],
        y: [0, 1],
        name: 'Very Very High'
    };

    var bw_data = [bw_veryverylow, bw_verylow, bw_low, bw_moderate, bw_high, bw_veryhigh, bw_veryveryhigh];

    Plotly.plot(bw, bw_data, layout, {
        showLink: false,
        staticPlot: true
    });

    var bw_veryverylow = {
        x: [0, 1 / 6],
        y: [1, 0],
        name: 'Very Very Low'
    };

    var bt_verylow = {
        x: [0, 1 / 6, 1 / 3],
        y: [0, 1, 0],
        name: 'Very Low'
    };

    var bt_low = {
        x: [1 / 6, 1 / 3, 0.5],
        y: [0, 1, 0],
        name: 'Low'
    };

    var bt_moderate = {
        x: [1 / 3, 0.5, 2 / 3],
        y: [0, 1, 0],
        name: 'Moderate'
    };

    var bt_high = {
        x: [0.5, 2 / 3, 5 / 6],
        y: [0, 1, 0],
        name: 'High'
    };

    var bt_veryhigh = {
        x: [2 / 3, 5 / 6, 1],
        y: [0, 1, 0],
        name: 'Very High'
    };

    var bt_veryveryhigh = {
        x: [5 / 6, 1],
        y: [0, 1],
        name: 'Very Very High'
    };

    var bt_data = [bt_veryverylow, bt_verylow, bt_low, bt_moderate, bt_high, bt_veryhigh, bt_veryveryhigh];

    Plotly.plot(bt, bt_data, layout, {
        showLink: false,
        staticPlot: true
    });

}