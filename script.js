let progress = localStorage.getItem("progress") || -11000;
progress = parseInt(progress);

document.getElementById("current-progress").innerText = `Current Progress: ${progress}m`;
updateProgressBar();

function changeProgress() {
    let inputValue = parseInt(document.getElementById("climb-input").value);
    if (isNaN(inputValue)) {
        alert("Enter a valid number!");
        return;
    }

    let newProgress = progress + inputValue;
    if (newProgress < -11000) newProgress = -11000;
    if (newProgress > 8849) newProgress = 8849;

    progress = newProgress;
    localStorage.setItem("progress", progress);
    document.getElementById("current-progress").innerText = `Current Progress: ${progress}m`;

    updateProgressBar();
}

function updateProgressBar() {
    const totalHeight = 19849; // -11000m to 8849m
    const progressHeight = ((progress + 11000) / totalHeight) * 100;
    document.getElementById("progress").style.bottom = `${progressHeight}%`;
}
