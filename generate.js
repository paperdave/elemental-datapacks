// generates auto adding links

function genLink(type, url) {
    return "https://elemental.davecode.me/#addpack=" + btoa(type + ";" + url);
}
Array.from(document.querySelectorAll(".soundpack-link")).forEach(x => {
    x.href = genLink("soundpack", x.href);
    x.onclick = (ev) => {
        ev.preventDefault();
        // lets the game use window.close()
        window.open(x.href);
    };
});
Array.from(document.querySelectorAll(".theme-link")).forEach(x => {
    x.href = genLink("theme", x.href);
    x.onclick = (ev) => {
        ev.preventDefault();
        // lets the game use window.close()
        window.open(x.href);
    };
});
