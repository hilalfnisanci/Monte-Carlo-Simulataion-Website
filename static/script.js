var dragBox = document.getElementById('drag-box');
var fileInput = document.getElementById('file-input');
var uploadForm = document.getElementById('file-upload-form');
var uploadMessage = document.getElementById('upload-message');

dragBox.addEventListener('dragover', function(e) {
    e.preventDefault();
    dragBox.classList.add('drag-over');
});

dragBox.addEventListener('dragleave', function(e) {
    e.preventDefault();
    dragBox.classList.remove('drag-over');
});

dragBox.addEventListener('drop', function(e) {
    e.preventDefault();
    dragBox.classList.remove('drag-over');
    var file = e.dataTransfer.files[0];
    fileInput.files = e.dataTransfer.files;
    uploadMessage.textContent = file.name + ' selected';
});

uploadForm.addEventListener('submit', function(e) {
    if (fileInput.files.length === 0) {
        e.preventDefault();
        return;
    }
    uploadMessage.textContent = 'Uploading...';
});

