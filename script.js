// Modal functionality
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("bioDataModal");
    const btn = document.getElementById("bioDataBtn");
    const span = document.querySelector(".close");

    // Open modal when button is clicked
    btn.onclick = () => {
        modal.style.display = "block";
    };

    // Close modal when the 'x' is clicked
    span.onclick = () => {
        modal.style.display = "none";
    };

    // Close modal when clicking outside the modal content
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
