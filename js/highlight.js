setInterval(function highlight() {

    highlight_bt_bwd();
    highlight_bo();
    highlight_bw();

}, 100);

function highlight_bt_bwd() {
    var ruleid, dwptid, dobsid, awpt_obsid;
    for (var dobs = 1; dobs <= 3; dobs++) {
        for (var awpt_obs = 1; awpt_obs <= 3; awpt_obs++) {
            for (var dwpt = 1; dwpt <= 3; dwpt++) {
                let x, y, z;

                if (dwpt == 1) {
                    x = Dwpt["near"];
                    dwptid = "near";
                } else if (dwpt == 2) {
                    x = Dwpt["mid"];
                    dwptid = "mid";
                } else {
                    x = Dwpt["far"];
                    dwptid = "far";
                }

                if (dobs == 1) {
                    y = Dobs["near"];
                    dobsid = "near";
                } else if (dobs == 2) {
                    y = Dobs["mid"];
                    dobsid = "mid";
                } else {
                    y = Dobs["far"];
                    dobsid = "far";
                }

                if (awpt_obs == 1) {
                    z = Awpt_obs["small"];
                    awpt_obsid = "small";
                } else if (awpt_obs == 2) {
                    z = Awpt_obs["moderate"];
                    awpt_obsid = "moderate";
                } else {
                    z = Awpt_obs["big"];
                    awpt_obsid = "big";
                }

                ruleid = ((3 * (dobs - 1)) + awpt_obs).toString() + dwpt.toString();
                document.getElementById("btrule-" + ruleid).style.backgroundColor = "white";
                document.getElementById("bwdrule-" + ruleid).style.backgroundColor = "white";

                document.getElementById("btDwpt[" + dwptid + "]").style.backgroundColor = "white";
                document.getElementById("bwdDwpt[" + dwptid + "]").style.backgroundColor = "white";

                document.getElementById("btDobs[" + dobsid + "]-" + awpt_obs).style.backgroundColor = "white";
                document.getElementById("bwdDobs[" + dobsid + "]-" + awpt_obs).style.backgroundColor = "white";

                document.getElementById("btAwpt_obs[" + awpt_obsid + "]-" + dobs).style.backgroundColor = "white";
                document.getElementById("bwdAwpt_obs[" + awpt_obsid + "]-" + dobs).style.backgroundColor = "white";

                if (isAnyBox) {
                    if (Math.min(x, y, z) != 0) {

                        document.getElementById("btrule-" + ruleid).style.backgroundColor = "#ffd5aa";
                        document.getElementById("bwdrule-" + ruleid).style.backgroundColor = "#ffd5aa";

                        document.getElementById("btDwpt[" + dwptid + "]").style.backgroundColor = "#ffa";
                        document.getElementById("bwdDwpt[" + dwptid + "]").style.backgroundColor = "#ffa";

                        document.getElementById("btDobs[" + dobsid + "]-" + awpt_obs).style.backgroundColor = "#ffa";
                        document.getElementById("bwdDobs[" + dobsid + "]-" + awpt_obs).style.backgroundColor = "#ffa";

                        document.getElementById("btAwpt_obs[" + awpt_obsid + "]-" + dobs).style.backgroundColor = "#ffa";
                        document.getElementById("bwdAwpt_obs[" + awpt_obsid + "]-" + dobs).style.backgroundColor = "#ffa";
                    }
                }
            }
        }
    }
}

function highlight_bo() {
    var ruleid, dobsid, aobsid;
    for (var aobs = 1; aobs <= 3; aobs++) {
        for (var dobs = 1; dobs <= 3; dobs++) {
            let x, y;

            if (dobs == 1) {
                x = Dobs["near"];
                dobsid = "near";
            } else if (dobs == 2) {
                x = Dobs["mid"];
                dobsid = "mid";
            } else {
                x = Dobs["far"];
                dobsid = "far";
            }

            if (aobs == 1) {
                y = Aobs["small"];
                aobsid = "small";
            } else if (aobs == 2) {
                y = Aobs["moderate"];
                aobsid = "moderate";
            } else {
                y = Aobs["big"];
                aobsid = "big";
            }

            ruleid = aobs.toString() + dobs.toString();
            document.getElementById("borule-" + ruleid).style.backgroundColor = "white";

            document.getElementById("boDobs[" + dobsid + "]").style.backgroundColor = "white";

            document.getElementById("boAobs[" + aobsid + "]").style.backgroundColor = "white";

            if (isAnyBox) {
                if (Math.min(x, y) != 0) {
                    document.getElementById("borule-" + ruleid).style.backgroundColor = "#ffd5aa";

                    document.getElementById("boDobs[" + dobsid + "]").style.backgroundColor = "#ffa";

                    document.getElementById("boAobs[" + aobsid + "]").style.backgroundColor = "#ffa";
                }
            }
        }
    }
}

function highlight_bw() {
    var ruleid, dobsid, aobsid, awpt_obsid;
    for (var aobs = 1; aobs <= 3; aobs++) {
        for (var awpt_obs = 1; awpt_obs <= 3; awpt_obs++) {
            for (var dobs = 1; dobs <= 3; dobs++) {
                let x, y, z;

                if (dobs == 1) {
                    x = Dobs["near"];
                    dobsid = "near";
                } else if (dobs == 2) {
                    x = Dobs["mid"];
                    dobsid = "mid";
                } else {
                    x = Dobs["far"];
                    dobsid = "far";
                }

                if (aobs == 1) {
                    y = Aobs["small"];
                    aobsid = "small";
                } else if (aobs == 2) {
                    y = Aobs["moderate"];
                    aobsid = "moderate";
                } else {
                    y = Aobs["big"];
                    aobsid = "big";
                }

                if (awpt_obs == 1) {
                    z = Awpt_obs["small"];
                    awpt_obsid = "small";
                } else if (awpt_obs == 2) {
                    z = Awpt_obs["moderate"];
                    awpt_obsid = "moderate";
                } else {
                    z = Awpt_obs["big"];
                    awpt_obsid = "big";
                }

                ruleid = ((3 * (aobs - 1)) + awpt_obs).toString() + dobs.toString();
                document.getElementById("bwrule-" + ruleid).style.backgroundColor = "white";

                document.getElementById("bwDobs[" + dobsid + "]").style.backgroundColor = "white";

                document.getElementById("bwAobs[" + aobsid + "]-" + awpt_obs).style.backgroundColor = "white";

                document.getElementById("bwAwpt_obs[" + awpt_obsid + "]-" + aobs).style.backgroundColor = "white";

                if (isAnyBox) {
                    if (Math.min(x, y, z) != 0) {

                        document.getElementById("bwrule-" + ruleid).style.backgroundColor = "#ffd5aa";

                        document.getElementById("bwDobs[" + dobsid + "]").style.backgroundColor = "#ffa";

                        document.getElementById("bwAobs[" + aobsid + "]-" + awpt_obs).style.backgroundColor = "#ffa";

                        document.getElementById("bwAwpt_obs[" + awpt_obsid + "]-" + aobs).style.backgroundColor = "#ffa";
                    }
                }
            }
        }
    }
}