function hide(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.classList.add('hidden');
    } else {
        console.log(`Element with id ${elementId} not found.`);
    }
}