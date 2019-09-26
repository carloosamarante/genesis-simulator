if (window.location.pathname.match('modules.html') != null) {
    var newModule = document.getElementById("new-module-id"),
        newModal = document.getElementById("new-modal"),
        moduleButton = document.getElementById("available-icon"),
        securityAddModule = document.getElementById("security-module");

    newModule.onclick = function () {
        newModal.classList.remove("hide-button-effect");
        newModal.classList.add("button-effect");
    }

    moduleButton.onclick = function () {
        var image = moduleButton.src;
        if (image.includes("plus.svg")) {
            moduleButton.src = "../static/check-mark.svg";
            securityAddModule.classList.remove("hide-button-effect");
            securityAddModule.classList.add("button-effect");
        } else {
            moduleButton.src = "../static/plus.svg";
            securityAddModule.classList.remove("button-effect");
            securityAddModule.classList.add("hide-button-effect");
        }
    }
}