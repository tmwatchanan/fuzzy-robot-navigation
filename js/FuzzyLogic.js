var fuzzy = [],
    Dwpt = [],
    Dobs = [],
    Awpt_obs = [],
    Aobs = [],
    fBt = [],
    fBo = [],
    fBw = [],
    fBwd = [],
    Bo = 0,
    Bt = 0,
    Bw = 0,
    Bwd = 0;

//Distance to waypoint
function distance_to_waypoint_near(Dwpt) {
    if (0.0 <= Dwpt && Dwpt <= 2.0) return 1;
    else if (Dwpt <= 3.5) return (3.5 - Dwpt) / 1.5;
    else return 0;
}

function distance_to_waypoint_mid(Dwpt) {
    if (2.0 <= Dwpt && Dwpt <= 5.0) return 1 - (Math.abs(Dwpt - 3.5) / 1.5);
    else return 0;
}

function distance_to_waypoint_far(Dwpt) {
    if (3.5 <= Dwpt && Dwpt < 5.0) return (3.5 - Dwpt) / -1.5
    else if (Dwpt >= 5.0) return 1;
    else return 0;
}

//Distance to obstacle
function distance_to_obstacle_near(Dobs) {
    if (0 <= Dobs && Dobs <= 0.4) return 1;
    else if (Dobs <= 0.7) return (0.7 - Dobs) / 0.3;
    else return 0;
}

function distance_to_obstacle_mid(Dobs) {
    if (0.4 <= Dobs && Dobs <= 0.7) return 1 - Math.abs(Dobs - 0.7) / 0.3;
    else return 0;
}

function distance_to_obstacle_far(Dobs) {
    if (0.7 <= Dobs && Dobs < 1.0) return (0.7 - Dobs) / -0.3;
    else if (Dobs >= 1) return 1;
    else return 0;
}

//Angle between robot and obstacle
function angle_between_robot_and_obstacle_small(Aobs) {
    if (0 <= Aobs && Aobs <= 60) return 1;
    else if (Aobs <= 90) return (90 - Aobs) / 30;
    else return 0;
}

function angle_between_robot_and_obstacle_mod(Aobs) {
    if (60 <= Aobs && Aobs <= 90) return (60 - Aobs) / -30;
    else if (90 <= Aobs && Aobs <= 130) return (130 - Aobs) / 40;
    else return 0;
}

function angle_between_robot_and_obstacle_big(Aobs) {
    if (90 <= Aobs && Aobs < 130) return (90 - Aobs) / -40;
    else if (Aobs >= 130) return 1;
    else return 0;
}

//Angle between waypoint and obstacle
function angle_between_waypoint_and_obstacle_small(Awpt_obs) {
    if (0 <= Awpt_obs && Awpt_obs <= 30) return 1;
    else if (Awpt_obs <= 60) return (60 - Awpt_obs) / 30;
    else return 0;
}

function angle_between_waypoint_and_obstacle_mod(Awpt_obs) {
    if (30 <= Awpt_obs && Awpt_obs <= 90) return 1 - Math.abs(Awpt_obs - 60) / 30;
    else return 0;
}

function angle_between_waypoint_and_obstacle_big(Awpt_obs) {
    if (60 <= Awpt_obs && Awpt_obs < 90) return (60 - Awpt_obs) / -30;
    else if (Awpt_obs >= 90) return 1;
    else return 0;
}

setInterval(function () {
    find_membership();
}, 100)

function find_membership() {
    Dwpt["near"] = distance_to_waypoint_near(px_cm(disWaypoint));
    Dwpt["mid"] = distance_to_waypoint_mid(px_cm(disWaypoint));
    Dwpt["far"] = distance_to_waypoint_far(px_cm(disWaypoint));

    Dobs["near"] = distance_to_obstacle_near(px_cm(disNearestObstacle));
    Dobs["mid"] = distance_to_obstacle_mid(px_cm(disNearestObstacle));
    Dobs["far"] = distance_to_obstacle_far(px_cm(disNearestObstacle));

    Awpt_obs["small"] = angle_between_waypoint_and_obstacle_small(degWay_Obs);
    Awpt_obs["moderate"] = angle_between_waypoint_and_obstacle_mod(degWay_Obs);
    Awpt_obs["big"] = angle_between_waypoint_and_obstacle_big(degWay_Obs);

    Aobs["small"] = angle_between_robot_and_obstacle_small(degRo_Obs);
    Aobs["moderate"] = angle_between_robot_and_obstacle_mod(degRo_Obs);
    Aobs["big"] = angle_between_robot_and_obstacle_big(degRo_Obs);
}

function firing_str_Bt() {
    //firing strength of Bt very very low
    fBt["very very low"] = Math.min(Dwpt["far"], Dobs["near"], Awpt_obs["big"]);

    //firing strength of Bt very low
    fBt["very low"] = Math.max(Math.min(Dwpt["mid"], Dobs["near"], Awpt_obs["big"]), Math.min(Dwpt["far"], Dobs["near"], Awpt_obs["moderate"]), Math.min(Dwpt["far"], Dobs["mid"], Awpt_obs["big"]));

    //firing strength of Bt low
    fBt["low"] = Math.max(Math.min(Dwpt["near"], Dobs["near"], Awpt_obs["big"]),
        Math.min(Dwpt["mid"], Dwpt["near"], Awpt_obs["moderate"]),
        Math.min(Dwpt["mid"], Dwpt["mid"], Awpt_obs["big"]),
        Math.min(Dwpt["far"], Dwpt["near"], Awpt_obs["small"]),
        Math.min(Dwpt["far"], Dwpt["mid"], Awpt_obs["moderate"]),
        Math.min(Dwpt["far"], Dwpt["far"], Awpt_obs["big"]));

    //firing strength of Bt moderate
    fBt["moderate"] = Math.max(Math.min(Dwpt["near"], Dobs["near"], Awpt_obs["moderate"]),
        Math.min(Dwpt["near"], Dobs["mid"], Awpt_obs["big"]),
        Math.min(Dwpt["mid"], Dobs["near"], Awpt_obs["small"]),
        Math.min(Dwpt["mid"], Dobs["mid"], Awpt_obs["moderate"]),
        Math.min(Dwpt["mid"], Dobs["far"], Awpt_obs["big"]),
        Math.min(Dwpt["far"], Dobs["mid"], Awpt_obs["small"]),
        Math.min(Dwpt["far"], Dobs["far"], Awpt_obs["moderate"]));

    //firing strength of Bt high
    fBt["high"] = Math.max(Math.min(Dwpt["near"], Dobs["near"], Awpt_obs["small"]),
        Math.min(Dwpt["near"], Dobs["mid"], Awpt_obs["moderate"]),
        Math.min(Dwpt["near"], Dobs["far"], Awpt_obs["big"]),
        Math.min(Dwpt["mid"], Dobs["mid"], Awpt_obs["small"]),
        Math.min(Dwpt["mid"], Dobs["far"], Awpt_obs["moderate"]),
        Math.min(Dwpt["far"], Dobs["far"], Awpt_obs["small"]));

    //firing strength of Bt very high
    fBt["very high"] = Math.max(Math.min(Dwpt["near"], Dobs["mid"], Awpt_obs["small"]),
        Math.min(Dwpt["near"], Dobs["far"], Awpt_obs["moderate"]),
        Math.min(Dwpt["mid"], Dobs["far"], Awpt_obs["small"]));

    //firing strength of Bt very very high
    fBt["very very high"] = Math.min(Dwpt["near"], Dobs["far"], Awpt_obs["small"]);

    // console.log(fBt, (fBt["very very low"] + fBt["very low"] + fBt["low"] + fBt["moderate"] + fBt["high"] + fBt["very high"] + fBt["very very high"]))

    //firing strength of Bt
    Bt = ((fBt["very very low"] * 0) + (fBt["very low"] * (1 / 6)) + (fBt["low"] * (1 / 3)) + (fBt["moderate"] * (1 / 2)) + (fBt["high"] * (2 / 3)) + (fBt["very high"] * (5 / 6)) + (fBt["very very high"] * 1)) / (fBt["very very low"] + fBt["very low"] + fBt["low"] + fBt["moderate"] + fBt["high"] + fBt["very high"] + fBt["very very high"]);
    Bt = isNaN(Bt) ? 0 : Bt;
    // console.log(Bt)
}

function firing_str_Bo() {
    //firing strength of Bo very low
    fBo["very low"] = Math.min(Dobs["far"], Aobs["small"]);

    //firing strength of Bo low
    fBo["low"] = Math.max(Math.min(Dobs["mid"], Aobs["small"]),
        Math.min(Dobs["far"], Aobs["moderate"]));

    //firing strength of Bo moderate
    fBo["moderate"] = Math.max(Math.min(Dobs["near"], Aobs["small"]),
        Math.min(Dobs["mid"], Aobs["moderate"]),
        Math.min(Dobs["far"], Aobs["big"]));

    //firing strength of Bo high
    fBo["high"] = Math.max(Math.min(Dobs["near"], Aobs["moderate"]),
        Math.min(Dobs["mid"], Aobs["big"]));

    //firing strength of Bo very high
    fBo["very high"] = Math.min(Dobs["near"], Aobs["big"]);

    Bo = ((fBo["very low"] * 0) + (fBo["low"] * (1 / 4)) + (fBo["moderate"] * (1 / 2)) + (fBo["high"] * (3 / 4)) + (fBo["very high"] * 1)) / (fBo["very low"] + fBo["low"] + fBo["moderate"] + fBo["high"] + fBo["very high"]);
    Bo = isNaN(Bo) ? 0 : Bo;
}

function firing_str_Bw() {
    //firing strength of Bw very very low
    fBw["very very low"] = Math.max(Math.min(Dobs["far"], Aobs["small"], Awpt_obs["small"]),
        Math.min(Dobs["far"], Aobs["moderate"], Awpt_obs["small"]));

    //firing strength of Bw very low
    fBw["very low"] = Math.max(Math.min(Dobs["mid"], Aobs["small"], Awpt_obs["small"]),
        Math.min(Dobs["mid"], Aobs["moderate"], Awpt_obs["small"]),
        Math.min(Dobs["far"], Aobs["small"], Awpt_obs["moderate"]),
        Math.min(Dobs["far"], Aobs["moderate"], Awpt_obs["moderate"]),
        Math.min(Dobs["far"], Aobs["big"], Awpt_obs["small"]));

    //firing strength of Bw low
    fBw["low"] = Math.max(Math.min(Dobs["near"], Aobs["small"], Awpt_obs["small"]),
        Math.min(Dobs["near"], Aobs["small"], Awpt_obs["moderate"]),
        Math.min(Dobs["near"], Aobs["moderate"], Awpt_obs["small"]),
        Math.min(Dobs["mid"], Aobs["small"], Awpt_obs["moderate"]),
        Math.min(Dobs["mid"], Aobs["small"], Awpt_obs["big"]),
        Math.min(Dobs["mid"], Aobs["moderate"], Awpt_obs["moderate"]),
        Math.min(Dobs["far"], Aobs["small"], Awpt_obs["big"]),
        Math.min(Dobs["far"], Aobs["big"], Awpt_obs["moderate"]));

    //firing strength of Bw moderate
    fBw["moderate"] = Math.max(Math.min(Dobs["near"], Aobs["small"], Awpt_obs["big"]),
        Math.min(Dobs["near"], Aobs["moderate"], Awpt_obs["moderate"]),
        Math.min(Dobs["mid"], Aobs["big"], Awpt_obs["small"]),
        Math.min(Dobs["mid"], Aobs["big"], Awpt_obs["moderate"]),
        Math.min(Dobs["far"], Aobs["moderate"], Awpt_obs["big"]),
        Math.min(Dobs["far"], Aobs["big"], Awpt_obs["big"]));

    //firing strength of Bw high
    fBw["high"] = Math.max(Math.min(Dobs["near"], Aobs["big"], Awpt_obs["small"]),
        Math.min(Dobs["near"], Aobs["big"], Awpt_obs["moderate"]));

    //firing strength of Bw very high
    fBw["very high"] = Math.max(Math.min(Dobs["near"], Aobs["moderate"], Awpt_obs["big"]),
        Math.min(Dobs["mid"], Aobs["moderate"], Awpt_obs["big"]));

    //firing strength of Bw very very high
    fBw["very very high"] = Math.max(Math.min(Dobs["near"], Aobs["big"], Awpt_obs["big"]),
        Math.min(Dobs["mid"], Aobs["big"], Awpt_obs["big"]));

    Bw = ((fBw["very very low"] * 0) + (fBw["very low"] * (1 / 6)) + (fBw["low"] * (1 / 3)) + (fBw["moderate"] * (1 / 2)) + (fBw["high"] * (2 / 3)) + (fBw["very high"] * (5 / 6)) + (fBw["very very high"] * 1)) / (fBw["very very low"] + fBw["very low"] + fBw["low"] + fBw["moderate"] + fBw["high"] + fBw["very high"] + fBw["very very high"]);
    Bw = isNaN(Bw) ? 0 : Bw;
}

function firing_str_Bwd() {
    //firing strength of Bwd very very low
    fBwd["very very low"] = Math.min(Dwpt["far"], Dobs["far"], Awpt_obs["small"]);

    //firing strength of Bwd very low
    fBwd["very low"] = Math.max(Math.min(Dwpt["mid"], Dobs["far"], Awpt_obs["small"]),
        Math.min(Dwpt["far"], Dobs["mid"], Awpt_obs["small"]),
        Math.min(Dwpt["far"], Dobs["far"], Awpt_obs["moderate"]));

    //firing strength of Bwd low
    fBwd["low"] = Math.max(Math.min(Dwpt["near"], Dobs["far"], Awpt_obs["small"]),
        Math.min(Dwpt["mid"], Dobs["mid"], Awpt_obs["small"]),
        Math.min(Dwpt["mid"], Dobs["far"], Awpt_obs["moderate"]),
        Math.min(Dwpt["far"], Dobs["near"], Awpt_obs["small"]),
        Math.min(Dwpt["far"], Dobs["mid"], Awpt_obs["moderate"]),
        Math.min(Dwpt["far"], Dobs["far"], Awpt_obs["big"]));

    //firing strength of Bwd moderate
    fBwd["moderate"] = Math.max(Math.min(Dwpt["near"], Dobs["mid"], Awpt_obs["small"]),
        Math.min(Dwpt["near"], Dobs["far"], Awpt_obs["moderate"]),
        Math.min(Dwpt["mid"], Dobs["near"], Awpt_obs["small"]),
        Math.min(Dwpt["mid"], Dobs["mid"], Awpt_obs["moderate"]),
        Math.min(Dwpt["mid"], Dobs["far"], Awpt_obs["big"]),
        Math.min(Dwpt["far"], Dobs["near"], Awpt_obs["moderate"]),
        Math.min(Dwpt["far"], Dobs["mid"], Awpt_obs["big"]));

    //firing strength of Bwd high
    fBwd["high"] = Math.max(Math.min(Dwpt["near"], Dobs["near"], Awpt_obs["small"]),
        Math.min(Dwpt["near"], Dobs["mid"], Awpt_obs["moderate"]),
        Math.min(Dwpt["near"], Dobs["far"], Awpt_obs["big"]),
        Math.min(Dwpt["mid"], Dobs["near"], Awpt_obs["moderate"]),
        Math.min(Dwpt["mid"], Dobs["mid"], Awpt_obs["big"]),
        Math.min(Dwpt["far"], Dobs["near"], Awpt_obs["big"]));

    //firing strength of Bwd very high
    fBwd["very high"] = Math.max(Math.min(Dwpt["near"], Dobs["near"], Awpt_obs["moderate"]),
        Math.min(Dwpt["near"], Dobs["mid"], Awpt_obs["big"]),
        Math.min(Dwpt["mid"], Dobs["near"], Awpt_obs["big"]));

    //firing strength of Bwd very very high
    fBwd["very very high"] = Math.min(Dwpt["near"], Dobs["near"], Awpt_obs["big"]);


    Bwd = ((fBwd["very very low"] * 0) + (fBwd["very low"] * (1 / 6)) + (fBwd["low"] * (1 / 3)) + (fBwd["moderate"] * (1 / 2)) + (fBwd["high"] * (2 / 3)) + (fBwd["very high"] * (5 / 6)) + (fBwd["very very high"] * 1)) / (fBwd["very very low"] + fBwd["very low"] + fBwd["low"] + fBwd["moderate"] + fBwd["high"] + fBwd["very high"] + fBwd["very very high"]);
    Bwd = isNaN(Bwd) ? 0 : Bwd;
}