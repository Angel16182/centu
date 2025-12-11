document.getElementById("flyer-upload").addEventListener("change", function() {
    let fileName = this.files.length > 0 ? this.files[0].name : "o arrastra y suelta tu Flyer aquí";
    document.getElementById("file-name").textContent = fileName;
});

