var convertBtnMp3 = document.querySelector('.convert-button-mp3');
var convertBtnMp4 = document.querySelector('.convert-button-mp4');
var heading = document.querySelector('.heading');
var URLinput = document.querySelector('.URL-input');

convertBtnMp3.addEventListener('click', () => {
    heading.innerHTML = "Downloading...";
    sendURL(URLinput.value, 'mp3');
});

convertBtnMp4.addEventListener('click', () => {
    heading.innerHTML = "Downloading...";
    sendURL(URLinput.value, 'mp4');
});

function sendURL(URL, format) {
    window.location.href = `https://adoredvictoriousengineers.liptom3281.repl.co/${format}?URL=${URL}`;
    heading.innerHTML = "Liptom328 YouTube Downloader!";
}
