scroll = null;

function initScrolling() {
    scroll = localStorage.getItem('scrolling-enabled');

    if (scroll == null) {
        localStorage.setItem('scrolling-enabled', 'on');
        scroll = 'on';
    }

    if (scroll == 'on') {
        turnScrollingOn();
    } else if (scroll == 'off') {
        turnScrollingOff();
    }
}

function toggleScrolling() {
    if (scroll == 'on') {
        turnScrollingOff();
        localStorage.setItem('scrolling-enabled', 'off');
        scroll = 'off';
    } else if (scroll == 'off') {
        turnScrollingOn();
        localStorage.setItem('scrolling-enabled', 'on');
        scroll = 'on';
    }
}

function turnScrollingOn() {
    document.body.setAttribute('style', '');
    document.getElementById('scroll-mode-selector').setAttribute('style', '');
}

function turnScrollingOff() {
    document.body.setAttribute('style', 'animation-play-state: paused;');
    document.getElementById('scroll-mode-selector').setAttribute('style', 'animation-play-state: paused;');
}
