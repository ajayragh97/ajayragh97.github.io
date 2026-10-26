/**
 * reader.js - Reader experience enhancements: Reading Progress Bar & Font Controls
 */

document.addEventListener('DOMContentLoaded', () => {
    initReadingProgress();
    initReaderControls();
});

function initReadingProgress() {
    const progressBar = document.getElementById('reading-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (scrollHeight > 0) {
            const progress = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
        }
    }, { passive: true });
}

function initReaderControls() {
    const article = document.getElementById('chapter-reading-area');
    if (!article) return;

    const btnDecrease = document.getElementById('font-decrease');
    const btnReset = document.getElementById('font-reset');
    const btnIncrease = document.getElementById('font-increase');
    const btnFamily = document.getElementById('font-family-toggle');
    const familyLabel = document.getElementById('font-family-label');

    const BASE_SIZE = 1.15; // in rem
    const STEP = 0.1;
    const MIN_SIZE = 0.95;
    const MAX_SIZE = 1.55;

    let currentSize = parseFloat(localStorage.getItem('reader-font-size')) || BASE_SIZE;
    let isSerif = localStorage.getItem('reader-font-serif') === 'true';

    function applyFontSize(size) {
        currentSize = Math.min(MAX_SIZE, Math.max(MIN_SIZE, size));
        article.style.fontSize = `${currentSize.toFixed(2)}rem`;
        try {
            localStorage.setItem('reader-font-size', currentSize.toFixed(2));
        } catch(e) {}
    }

    function applyFontFamily(serif) {
        isSerif = serif;
        if (isSerif) {
            article.classList.add('serif-font');
            if (familyLabel) familyLabel.textContent = 'Sans';
        } else {
            article.classList.remove('serif-font');
            if (familyLabel) familyLabel.textContent = 'Serif';
        }
        try {
            localStorage.setItem('reader-font-serif', isSerif);
        } catch(e) {}
    }

    // Initialize from stored settings
    applyFontSize(currentSize);
    applyFontFamily(isSerif);

    if (btnDecrease) {
        btnDecrease.addEventListener('click', () => applyFontSize(currentSize - STEP));
    }
    if (btnReset) {
        btnReset.addEventListener('click', () => applyFontSize(BASE_SIZE));
    }
    if (btnIncrease) {
        btnIncrease.addEventListener('click', () => applyFontSize(currentSize + STEP));
    }
    if (btnFamily) {
        btnFamily.addEventListener('click', () => applyFontFamily(!isSerif));
    }
}
