$(document).ready(function() {
    var dropArea = document.getElementById('drag-drop-area');
  
    // Sürükleme işlemi başladığında gerçekleşecek olayları tanımlayın
    dropArea.addEventListener('dragenter', handleDragEnter, false);
    dropArea.addEventListener('dragover', handleDragOver, false);
    dropArea.addEventListener('dragleave', handleDragLeave, false);
    dropArea.addEventListener('drop', handleDrop, false);
  
    // Dosya sürüklendiğinde 'drag-enter' sınıfını ekle
    function handleDragEnter(e) {
      e.stopPropagation();
      e.preventDefault();
      dropArea.classList.add('drag-enter');
    }
  
    // Dosya sürüklendiği sürece varsayılan olayı engelle
    function handleDragOver(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy'; // Dosya kopyalanacak
    }
  
    // Dosya sürüklenirken 'drag-enter' sınıfını kaldır
    function handleDragLeave(e) {
      e.stopPropagation();
      e.preventDefault();
      dropArea.classList.remove('drag-enter');
    }
  
    // Dosya bırakıldığında 'drag-enter' sınıfını kaldır ve dosyayı işle
    function handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      dropArea.classList.remove('drag-enter');
  
      // Bırakılan dosya veya dosyaları işleme fonksiyonunu burada çağırın
      var files = e.dataTransfer.files;
      if (files.length > 0) {
        var formData = new FormData();
        formData.append('input_file', files[0]);
  
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/upload', true);
        xhr.onload = function() {
          if (xhr.status === 200) {
            // Dosya başarıyla yüklendiğinde yapılacak işlemler
            console.log('Dosya yüklendi.');
          } else {
            // Hata durumunda yapılacak işlemler
            console.error('Dosya yüklenirken bir hata oluştu.');
          }
        };
        xhr.send(formData);
      }
    }
  });
  