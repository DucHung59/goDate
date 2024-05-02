var $ = document.querySelector.bind(document);
        var btnReject = $('#btnNo');
        var btnAccept = $('#btnYes');
        btnAccept.onclick = () => {
            location.href = 'thanks.html';
        }

        btnReject.onclick = () => {
            var currentSizeReject = parseInt(window.getComputedStyle(btnReject).fontSize);
            var currentSizeAccept = parseInt(window.getComputedStyle(btnAccept).fontSize);
            btnReject.style.fontSize = currentSizeReject - 2 + 'px';
            btnAccept.style.fontSize = currentSizeAccept + 2 + 'px';
        };