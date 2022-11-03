let a = 0,
    b = 0,
    c = 0;
let muv = 0,
    muvelet = 0;
let vesz = 0;

function beszamjegy(szam) {
    if (document.getElementById("kijelzo").value == "0")
        document.getElementById("kijelzo").value = szam;
    else
        document.getElementById("kijelzo").value += szam;
    document.getElementById("hiba").innerHTML = " ";
}

function vesszo() {
    if (vesz == 0)
        if (Math.round(Number(document.getElementById('kijelzo').value)) == Number(document.getElementById('kijelzo').value)) {
            document.getElementById("kijelzo").value += ".";
            vesz = 1;
        }
    document.getElementById('hiba').innerHTML = " ";
}

function muveletvegzes(m) {
    switch (m) {
        case 1:
            a = Number(document.getElementById('kijelzo').value);
            muvelet = 1;
            muv = 1;
            vesz = 0;
            break;
        case 2:
            a = Number(document.getElementById('kijelzo').value);
            muvelet = 2;
            muv = 1;
            vesz = 0;
            break;
        case 3:
            a = Number(document.getElementById('kijelzo').value);
            muvelet = 3;
            muv = 1;
            vesz = 0;
            break;
        case 4:
            a = Number(document.getElementById('kijelzo').value);
            muvelet = 4;
            muv = 1;
            vesz = 0;
            break;
    }

    document.getElementById('kijelzo').value = "0";
    document.getElementById('hiba').innerHTML = " ";
}

function szamol() {
    vesz = 0;
    document.getElementById('hiba').innerHTML = " ";
    if (muv == 1) {
        b = Number(document.getElementById('kijelzo').value);
        switch (muvelet) {
            case 1:
                c = a + b;
                break;
            case 2:
                c = a - b;
                break;
            case 3:
                c = a * b;
                break;
            case 4:
                if (b == 0) {
                    document.getElementById('hiba').innerHTML = "0-val nem lehet osztani!";
                    document.getElementById('kijelzo').value = "";
                } else c = a / b;
                break;
        }

        document.getElementById('kijelzo').value = c.toString();
    }

}

function torles() {
    document.getElementById('kijelzo').value = "0";
    muv = 0;
    vesz = 0;
    muvelet = 0;
    document.getElementById('hiba').innerHTML = " ";
}

function elojelvalto() {
    a = Number(document.getElementById('kijelzo').value);
    a = a * (-1);
    document.getElementById('kijelzo').value = a.toString();
    document.getElementById('hiba').innerHTML = " ";
}

function negyzet() {
    a = Number(document.getElementById('kijelzo').value);
    a = a * a;
    document.getElementById('kijelzo').value = a.toString();
    document.getElementById('hiba').innerHTML = " ";
}

function negyzetgyok() {
    a = Number(document.getElementById('kijelzo').value);
    a = Math.sqrt(a);
    document.getElementById('kijelzo').value = a.toString();
    document.getElementById('hiba').innerHTML = " ";
}

function pi() {

    document.getElementById('kijelzo').value = Math.PI.toString();
    document.getElementById('hiba').innerHTML = " ";
}

function reciprok() {
    a = Number(document.getElementById('kijelzo').value);
    if (a == 0)
        document.getElementById('hiba').innerHTML = "0-val nem lehet osztani";
    else {
        a = 1 / a;
        document.getElementById('kijelzo').value = a.toString();
        document.getElementById('hiba').innerHTML = " ";
    }
}

function sin() {
    a = Number(document.getElementById('kijelzo').value);
    a = Math.sin(a * Math.PI / 180);
    document.getElementById('kijelzo').value = a.toString();
    document.getElementById('hiba').innerHTML = " ";
}

function cos() {
    a = Number(document.getElementById('kijelzo').value);
    a = Math.cos(a * Math.PI / 180);
    document.getElementById('kijelzo').value = a.toString();
    document.getElementById('hiba').innerHTML = " ";
}

function tan() {
    a = Number(document.getElementById('kijelzo').value);
    a = Math.tan(a * Math.PI / 180);
    document.getElementById('kijelzo').value = a.toString();
    document.getElementById('hiba').innerHTML = " ";
}