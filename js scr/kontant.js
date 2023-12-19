function showContent(index) {
    // Показываем нужный контент
    var contentDivs = document.getElementsByClassName('content');
    for (var i = 0; i < contentDivs.length; i++) {
        contentDivs[i].classList.remove('active');
    }
    document.getElementById('content' + index).classList.add('active');
}