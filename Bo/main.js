document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const overlay = document.getElementById("imageOverlay");
    const overlayImage = document.getElementById("overlayImage");
    const overlayCaption = document.getElementById("imageCaption");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            overlayImage.src = thumbnail.src; 
            overlayCaption.textContent = thumbnail.getAttribute("data-text");
            overlay.style.display = "flex";  
        });
    });

    overlay.addEventListener("click", () => {
        overlay.style.display = "none"; 
    });
});
