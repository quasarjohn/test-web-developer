const IMAGES = images;

// template for the images
function imageTemplate(path, heading, description) {
    return `
    <div class="img-container">
        <img src="../resources/assets/${path}" alt="${description}">
        <div class="img-info">
            <div>
                <div>${heading.toUpperCase()}</div>
                <div>${description}</div>
            </div>
        </div>
    </div>
    `
}

function renderImages() {
    const imagesList = document.getElementById("img-list")
    for (const key in images) {
        const { path, heading, description } = images[key];
        imagesList.innerHTML += imageTemplate(path, heading, description);
    }

}

function initListeners() {

    let visible = false;

    // toggles visibility of the drawer
    const drawer = document.querySelector(".hamburger").parentNode;
    drawer.addEventListener("click", () => {

        if (!visible) {
            drawer.classList.remove("hidden");
            drawer.classList.add("visible")
        }
        else {
            drawer.classList.add("hidden");
            drawer.classList.remove("visible")
        }

        visible = !visible;

    })
}

(function init() {
    renderImages();
    initListeners();
}).call();