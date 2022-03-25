var convertBtnMp3 = document.querySelector('.convert-button-mp3');
var convertBtnMp4 = document.querySelector('.convert-button-mp4');
var heading = document.querySelector('.heading');
var URLinput = document.querySelector('.URL-input');

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

convertBtnMp3.addEventListener('click', () => {
    sendURL(youtube_parser(URLinput.value), 'mp3');
});

convertBtnMp4.addEventListener('click', () => {
    sendURL(youtube_parser(URLinput.value), 'mp4');
});

function sendURL(URL, format) {
    window.location.href = `https://adoredvictoriousengineers.liptom3281.repl.co/${format}?URL=${URL}`;
}
