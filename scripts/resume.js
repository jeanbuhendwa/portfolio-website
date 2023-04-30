function showPDF() {
  // Replace this URL with the URL of your PDF document
  const pdfURL = 'https://drive.google.com/drive/u/0/my-drive';

  // Replace this iframe code with the code of your PDF viewer
  const iframe = `<iframe src='${pdfURL}' width='100%' height='500px'></iframe>`;

  // Display the PDF viewer in a modal dialog
  const modal = document.createElement('div');
  modal.innerHTML = iframe;
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  modal.style.zIndex = '9999';
  document.body.appendChild(modal);

  // Add a download link to the PDF document
  const downloadLink = document.createElement('a');
  downloadLink.href = pdfURL;
  downloadLink.download = 'document.pdf';
  downloadLink.textContent = 'Download PDF';
  downloadLink.style.display = 'block';
  downloadLink.style.marginTop = '20px';
  modal.appendChild(downloadLink);

  // Close the modal dialog when the user clicks outside it
  modal.onclick = function (event) {
    if (event.target == modal) {
      document.body.removeChild(modal);
    }
  };
}
