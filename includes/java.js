const borderWidthSlider = document.getElementById('borderWidth');
const paddingSlider = document.getElementById('padding');
const marginSlider = document.getElementById('margin');
const boxSizingCheckbox = document.getElementById('boxSizing');

const borderWidthValue = document.getElementById('borderWidthValue');
const paddingValue = document.getElementById('paddingValue');
const marginValue = document.getElementById('marginValue');
const borderWidthDisplay = document.getElementById('borderWidthDisplay');
const paddingDisplay = document.getElementById('paddingDisplay');
const marginDisplay = document.getElementById('marginDisplay');

// Base content size
const CONTENT_WIDTH = 120;
const CONTENT_HEIGHT = 80;

function updateVisualizer() {
    const borderWidth = parseInt(borderWidthSlider.value);
    const padding = parseInt(paddingSlider.value);
    const margin = parseInt(marginSlider.value);
    const isContentBox = boxSizingCheckbox.checked;

    // Calculate dimensions
    let borderWidthTotal = CONTENT_WIDTH + (isContentBox ? padding * 2 : 0);
    let borderHeightTotal = CONTENT_HEIGHT + (isContentBox ? padding * 2 : 0);
    
    let paddingWidthTotal = borderWidthTotal + borderWidth * 2;
    let paddingHeightTotal = borderHeightTotal + borderWidth * 2;
    
    let marginWidthTotal = paddingWidthTotal + margin * 2;
    let marginHeightTotal = paddingHeightTotal + margin * 2;

    // Update CSS variables
    document.documentElement.style.setProperty('--border-width', borderWidthTotal + 'px');
    document.documentElement.style.setProperty('--border-height', borderHeightTotal + 'px');
    document.documentElement.style.setProperty('--padding-width', paddingWidthTotal + 'px');
    document.documentElement.style.setProperty('--padding-height', paddingHeightTotal + 'px');
    document.documentElement.style.setProperty('--margin-width', marginWidthTotal + 'px');
    document.documentElement.style.setProperty('--margin-height', marginHeightTotal + 'px');

    // Update content box padding (for content-box model)
    const contentBox = document.getElementById('contentBox');
    if (isContentBox) {
        contentBox.style.padding = `${padding}px`;
        contentBox.style.width = CONTENT_WIDTH + 'px';
        contentBox.style.height = CONTENT_HEIGHT + 'px';
    } else {
        contentBox.style.padding = '0';
        contentBox.style.width = (CONTENT_WIDTH + padding * 2) + 'px';
        contentBox.style.height = (CONTENT_HEIGHT + padding * 2) + 'px';
    }

    // Update displays
    borderWidthValue.textContent = borderWidth;
    paddingValue.textContent = padding;
    marginValue.textContent = margin;
    borderWidthDisplay.textContent = borderWidth + 'px';
    paddingDisplay.textContent = padding + 'px';
    marginDisplay.textContent = margin + 'px';
}

// Event listeners
borderWidthSlider.addEventListener('input', updateVisualizer);
paddingSlider.addEventListener('input', updateVisualizer);
marginSlider.addEventListener('input', updateVisualizer);
boxSizingCheckbox.addEventListener('change', updateVisualizer);

// Initial update
updateVisualizer();