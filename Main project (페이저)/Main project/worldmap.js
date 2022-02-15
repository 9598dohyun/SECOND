const clickedMap = document.querySelectorAll(".moveMap");

function showMap(event) {

    const selectedMap = event.path[0].classList[1];

    if (selectedMap === "victoriaIsland" ) {
        let width = 1000;
        let height = 730;
        let top = (window.innerHeight - height) / 2 + screenY;
        let left = (window.innerWidth - width) / 2 + screenX;

        let spec = "status=no, menubar=no, toolbar=no, resizable=no";
        spec += ", width=" + width + ", height=" + height;
        spec += ", top=" + top + ", left=" + left;

        window.open("victoriaIsland.html", "popup1", spec);
    } else if (selectedMap === "ludusLake") {
        let width = 1000;
        let height = 730;
        let top = (window.innerHeight - height) / 2 + screenY;
        let left = (window.innerWidth - width) / 2 + screenX;

        let spec = "status=no, menubar=no, toolbar=no, resizable=no";
        spec += ", width=" + width + ", height=" + height;
        spec += ", top=" + top + ", left=" + left;

        window.open("LudusLake.html", "popup2", spec);
    } else if (selectedMap === "muLungGarden") {
        let width = 1000;
        let height = 730;
        let top = (window.innerHeight - height) / 2 + screenY;
        let left = (window.innerWidth - width) / 2 + screenX;

        let spec = "status=no, menubar=no, toolbar=no, resizable=no";
        spec += ", width=" + width + ", height=" + height;
        spec += ", top=" + top + ", left=" + left;

        window.open("MuLungGarden.html", "popup3", spec);
    }

}


function main() {
    clickedMap.forEach(x => x.addEventListener("click", showMap));
}

main();