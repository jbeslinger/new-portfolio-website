function initTheme() {
    var theme = localStorage.getItem('theme');
    if (theme == null) {
        localStorage.setItem('theme', 'light');
    } else if (theme == 'dark') {
        toggleAllElements();
    }
}

function changeTheme() {
    var theme = localStorage.getItem('theme');
    toggleAllElements();
    
    if (theme == 'dark') {
        localStorage.setItem('theme', 'light');
    } else if (theme == 'light') {
        localStorage.setItem('theme', 'dark');
    }
}

function toggleAllElements() {
    const togglableElements = [
        document.body,
        document.getElementById('my-avatar'),
        document.getElementById('dark-mode-selector'),
    ]

    togglableElements.forEach(element => {
        try {
            element.classList.toggle('dark');
        } catch { }
    })
}
