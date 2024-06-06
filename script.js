document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time
    setTimeout(function() {
        // Hide loading animation and show content
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 2000); // 2 seconds delay for demonstration
});
