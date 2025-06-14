function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    //remember user on-site toggle setting
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }
    //fallback to user system setting
    if (systemSettingDark.matches) {
        return "dark";
    }
    //default light
    return "light";
}

function updateButton({ toggleEl, isDark, imgEl }) {
    const newCta = isDark ? "Change to light theme" : "Change to dark theme";
    toggleEl.setAttribute("aria-label", newCta);
    if (isDark) {
        toggleEl.checked = true;
        sunIcon.setAttribute("opacity", "100%");
        moonIcon.setAttribute("opacity", "0%");
        imgEl.src = "assets/favicon-dark.ico";
    } else {
        sunIcon.setAttribute("opacity", "0%");
        moonIcon.setAttribute("opacity", "100%");
        imgEl.src = "assets/favicon.ico";
    }
}

function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
}

const toggle = document.querySelector("[data-theme-toggle]");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");
const logoImg = document.getElementById("logo");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

updateButton({ toggleEl: toggle, isDark: currentThemeSetting === "dark", imgEl: logoImg });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

toggle.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    updateButton({ toggleEl: toggle, isDark: newTheme === "dark", imgEl: logoImg });
    updateThemeOnHtmlEl({ theme: newTheme });

    currentThemeSetting = newTheme;
});