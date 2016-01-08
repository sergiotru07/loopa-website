OSName = (() => {
    let appVersion = navigator.appVersion;
    if (appVersion.includes("Mac")) {
        return "MacOS";
    } else if (appVersion.includes("Win")) {
        return "Windows";
    } else if (appVersion.includes("X11")) {
        return "UNIX";
    } else if (appVersion.includes("Linux")) {
        return "Linux";
    }
})();