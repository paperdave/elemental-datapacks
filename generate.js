function genLink(type, url) {
    return "https://elemental.davecode.me/#addpack=" + btoa(type + ";" + url);
}
/*
Array.from(document.querySelectorAll(".soundpack-link")).forEach(x => {
    x.href = genLink("soundpack", x.href);
});
Array.from(document.querySelectorAll(".theme-link")).forEach(x => {
    x.href = genLink("theme", x.href);
});
*/
