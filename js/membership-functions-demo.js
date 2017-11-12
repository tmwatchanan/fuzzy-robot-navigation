var bt, bo, bw, bwd;

$(document).ready(function () {
    initGraph();
});

setInterval(function () {
    if (isAnyBox) {
        Plotly.purge(bt);
        Plotly.purge(bo);
        Plotly.purge(bw);
        Plotly.purge(bwd);

        var layout = {
            width: 400,
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

        var fbt_veryverylow = {
            x: [0, find_very_left(1 / 6, fBt["very very low"]), 1 / 6],
            y: [fBt["very very low"], fBt["very very low"], 0],
            fill: 'tozeroy',
            name: 'firing strength Very Very Low'
        };

        var fbt_verylow = {
            x: [0, find_left(1 / 6, 1 / 6, fBt["very low"]), find_right(1 / 6, 1 / 6, fBt["very low"]), 1 / 3],
            y: [0, fBt["very low"], fBt["very low"], 0],
            fill: 'tozeroy',
            name: 'firing strength Very Low'
        };

        var fbt_low = {
            x: [1 / 6, find_left(1 / 6, 1 / 3, fBt["low"]), find_right(1 / 6, 1 / 3, fBt["low"]), 0.5],
            y: [0, fBt["low"], fBt["low"], 0],
            fill: 'tozeroy',
            name: 'firing strength Low'
        };

        var fbt_moderate = {
            x: [1 / 3, find_left(1 / 6, 0.5, fBt["moderate"]), find_right(1 / 6, 0.5, fBt["moderate"]), 2 / 3],
            y: [0, fBt["moderate"], fBt["moderate"], 0],
            fill: 'tozeroy',
            name: 'firing strength Moderate'
        };

        var fbt_high = {
            x: [0.5, find_left(1 / 6, 2 / 3, fBt["high"]), find_right(1 / 6, 2 / 3, fBt["high"]), 5 / 6],
            y: [0, fBt["high"], fBt["high"], 0],
            fill: 'tozeroy',
            name: 'firing strength High'
        };

        var fbt_veryhigh = {
            x: [2 / 3, find_left(1 / 6, 5 / 6, fBt["very high"]), find_right(1 / 6, 5 / 6, fBt["very high"]), 1],
            y: [0, fBt["very high"], fBt["very high"], 0],
            fill: 'tozeroy',
            name: 'Very High'
        };

        var fbt_veryveryhigh = {
            x: [5 / 6, find_very_right(1 / 6, fBt["very very high"]), 1],
            y: [0, fBt["very very high"], fBt["very very high"]],
            fill: 'tozeroy',
            name: 'Very Very High'
        };

        var fbt_data = [fbt_veryverylow, fbt_verylow, fbt_low, fbt_moderate, fbt_high, fbt_veryhigh, fbt_veryveryhigh];

        Plotly.plot(bt, fbt_data, layout, {
            showLink: false,
            staticPlot: true
        });

        var fbo_verylow = {
            x: [0, find_very_left(0.25, fBo["very low"]), 0.25],
            y: [fBo["very low"], fBo["very low"], 0],
            fill: 'tozeroy',
            name: "firing strength very low"
        }

        var fbo_low = {
            x: [0, find_left(0.25, 0.25, fBo["low"]), find_right(0.25, 0.25, fBo["low"]), 0.5],
            y: [0, fBo["low"], fBo["low"], 0],
            fill: 'tozeroy',
            name: 'firing strength Low'
        };

        var fbo_moderate = {
            x: [0.25, find_left(0.25, 0.5, fBo["moderate"]), find_right(0.25, 0.5, fBo["moderate"]), 0.75],
            y: [0, fBo["moderate"], fBo["moderate"], 0],
            fill: 'tozeroy',
            name: 'firing strength Moderate'
        };

        var fbo_high = {
            x: [0.5, find_left(0.25, 0.75, fBo["high"]), find_right(0.25, 0.75, fBo["high"]), 1.0],
            y: [0, fBo["high"], fBo["high"], 0],
            fill: 'tozeroy',
            name: 'firing strength High'
        };

        var fbo_veryhigh = {
            x: [0.75, find_very_right(0.25, fBo["very high"]), 1.0],
            y: [0, fBo["very high"], fBo["very high"]],
            fill: 'tozeroy',
            name: 'firing strength Very High'
        };

        var fbo_data = [fbo_verylow, fbo_low, fbo_moderate, fbo_high, fbo_veryhigh];

        Plotly.plot(bo, fbo_data, layout, {
            showLink: false,
            staticPlot: true
        });

        var fbw_veryverylow = {
            x: [0, find_very_left(1 / 6, fBw["very very low"]), 1 / 6],
            y: [fBw["very very low"], fBw["very very low"], 0],
            fill: 'tozeroy',
            name: 'firing strength Very Very Low'
        };

        var fbw_verylow = {
            x: [0, find_left(1 / 6, 1 / 6, fBw["very low"]), find_right(1 / 6, 1 / 6, fBw["very low"]), 1 / 3],
            y: [0, fBw["very low"], fBw["very low"], 0],
            fill: 'tozeroy',
            name: 'firing strength Very Low'
        };

        var fbw_low = {
            x: [1 / 6, find_left(1 / 6, 1 / 3, fBw["low"]), find_right(1 / 6, 1 / 3, fBw["low"]), 0.5],
            y: [0, fBw["low"], fBw["low"], 0],
            fill: 'tozeroy',
            name: 'firing strength Low'
        };

        var fbw_moderate = {
            x: [1 / 3, find_left(1 / 6, 0.5, fBw["moderate"]), find_right(1 / 6, 0.5, fBw["moderate"]), 2 / 3],
            y: [0, fBw["moderate"], fBw["moderate"], 0],
            fill: 'tozeroy',
            name: 'firing strength Moderate'
        };

        var fbw_high = {
            x: [0.5, find_left(1 / 6, 2 / 3, fBw["high"]), find_right(1 / 6, 2 / 3, fBw["high"]), 5 / 6],
            y: [0, fBw["high"], fBw["high"], 0],
            fill: 'tozeroy',
            name: 'firing strength High'
        };

        var fbw_veryhigh = {
            x: [2 / 3, find_left(1 / 6, 5 / 6, fBw["very high"]), find_right(1 / 6, 5 / 6, fBw["very high"]), 1],
            y: [0, fBw["very high"], fBw["very high"], 0],
            fill: 'tozeroy',
            name: 'Very High'
        };

        var fbw_veryveryhigh = {
            x: [5 / 6, find_very_right(1 / 6, fBw["very very high"]), 1],
            y: [0, fBw["very very high"], fBw["very very high"]],
            fill: 'tozeroy',
            name: 'Very Very High'
        };

        var fbw_data = [fbw_veryverylow, fbw_verylow, fbw_low, fbw_moderate, fbw_high, fbw_veryhigh, fbw_veryveryhigh];

        Plotly.plot(bw, fbw_data, layout, {
            showLink: false,
            staticPlot: true
        });

        var fbwd_veryverylow = {
            x: [0, find_very_left(1 / 6, fBwd["very very low"]), 1 / 6],
            y: [fBwd["very very low"], fBwd["very very low"], 0],
            fill: 'tozeroy',
            name: 'firing strength Very Very Low'
        };

        var fbwd_verylow = {
            x: [0, find_left(1 / 6, 1 / 6, fBwd["very low"]), find_right(1 / 6, 1 / 6, fBwd["very low"]), 1 / 3],
            y: [0, fBwd["very low"], fBwd["very low"], 0],
            fill: 'tozeroy',
            name: 'firing strength Very Low'
        };

        var fbwd_low = {
            x: [1 / 6, find_left(1 / 6, 1 / 3, fBwd["low"]), find_right(1 / 6, 1 / 3, fBwd["low"]), 0.5],
            y: [0, fBwd["low"], fBwd["low"], 0],
            fill: 'tozeroy',
            name: 'firing strength Low'
        };

        var fbwd_moderate = {
            x: [1 / 3, find_left(1 / 6, 0.5, fBwd["moderate"]), find_right(1 / 6, 0.5, fBwd["moderate"]), 2 / 3],
            y: [0, fBwd["moderate"], fBwd["moderate"], 0],
            fill: 'tozeroy',
            name: 'firing strength Moderate'
        };

        var fbwd_high = {
            x: [0.5, find_left(1 / 6, 2 / 3, fBwd["high"]), find_right(1 / 6, 2 / 3, fBwd["high"]), 5 / 6],
            y: [0, fBwd["high"], fBwd["high"], 0],
            fill: 'tozeroy',
            name: 'firing strength High'
        };

        var fbwd_veryhigh = {
            x: [2 / 3, find_left(1 / 6, 5 / 6, fBwd["very high"]), find_right(1 / 6, 5 / 6, fBwd["very high"]), 1],
            y: [0, fBwd["very high"], fBwd["very high"], 0],
            fill: 'tozeroy',
            name: 'Very High'
        };

        var fbwd_veryveryhigh = {
            x: [5 / 6, find_very_right(1 / 6, fBwd["very very high"]), 1],
            y: [0, fBwd["very very high"], fBwd["very very high"]],
            fill: 'tozeroy',
            name: 'Very Very High'
        };

        var fbwd_data = [fbwd_veryverylow, fbwd_verylow, fbwd_low, fbwd_moderate, fbwd_high, fbwd_veryhigh, fbwd_veryveryhigh];

        Plotly.plot(bwd, fbwd_data, layout, {
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

    var bwd_veryverylow = {
        x: [0, 1 / 6],
        y: [1, 0],
        name: 'Very Very Low'
    };

    var bwd_verylow = {
        x: [0, 1 / 6, 1 / 3],
        y: [0, 1, 0],
        name: 'Very Low'
    };

    var bwd_low = {
        x: [1 / 6, 1 / 3, 0.5],
        y: [0, 1, 0],
        name: 'Low'
    };

    var bwd_moderate = {
        x: [1 / 3, 0.5, 2 / 3],
        y: [0, 1, 0],
        name: 'Moderate'
    };

    var bwd_high = {
        x: [0.5, 2 / 3, 5 / 6],
        y: [0, 1, 0],
        name: 'High'
    };

    var bwd_veryhigh = {
        x: [2 / 3, 5 / 6, 1],
        y: [0, 1, 0],
        name: 'Very High'
    };

    var bwd_veryveryhigh = {
        x: [5 / 6, 1],
        y: [0, 1],
        name: 'Very Very High'
    };

    var bwd_data = [bwd_veryverylow, bwd_verylow, bwd_low, bwd_moderate, bwd_high, bwd_veryhigh, bwd_veryveryhigh];

    Plotly.plot(bwd, bwd_data, layout, {
        showLink: false,
        staticPlot: true
    });

}

function find_left(width, center, fstr) {
    return (center - (Math.pow(((fstr - 1) * width), 2)))
}

function find_right(width, center, fstr) {
    return (center + (Math.pow(((fstr - 1) * width), 2)))
}

function find_very_left(width, fstr) {
    return -((fstr * width) - width);
}

function find_very_right(width, fstr) {
    return -((fstr * -width) - (1 - width))
}