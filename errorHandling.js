const error = document.querySelector('.error');
const params = new URLSearchParams(window.location.search);

const description = params.get("desc");

if (description) {
    error.innerHTML = `Error: ${description}`;
} else {
    error.innerHTML = 'Unknown Error';
}