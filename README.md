# Bioswing 460 iQs - Interactive 3D Presentation

## Project Description

Interactive web presentation of Bioswing 460 iQs product with 360-degree viewing capability. The project represents a modern web application for product demonstration using 360-degree rotation technology.

### Core Capabilities:
- **360° Viewing**: Interactive product rotation for detailed examination from all angles
- **Auto-play**: Automatic rotation with toggle on/off functionality
- **Slider Control**: Precise frame positioning using range slider
- **Responsive Design**: Proper display across various devices
- **Intuitive Controls**: Support for mouse, touch, and keyboard navigation

### Control Methods:
- **Mouse/Touch**: Drag to rotate the model
- **Keyboard**: Use arrow keys for navigation
- **Slider**: Precise frame positioning
- **Auto-play Button**: Toggle automatic rotation on/off

## Technical Details

### Technology Stack:
- **Frontend**: HTML5, CSS3, JavaScript (ES5+)
- **Libraries**:
  - jQuery 3.5.0
  - jQuery ThreeSixty Plugin
  - Ion Range Slider
- **Fonts**: Gilroy (Regular, ExtraBold)
- **Images**: 49 frames for 360° rotation effect

### Project Structure:
```
├── index.html              # Main page
├── css/                    # Stylesheets
│   ├── styles.css         # Main styles
│   ├── ion.rangeSlider.css # Slider styles
│   ├── response_1023.css  # Tablet responsiveness
│   └── response_767.css   # Mobile responsiveness
├── js/                     # JavaScript files
│   ├── scripts.js         # Main logic
│   ├── jquery.threesixty.js # 360° viewing plugin
│   └── ion.rangeSlider.min.js # Slider
├── images/                 # Images
│   ├── tmp/               # 360° rotation frames (0-48.png)
│   └── ...                # Icons and logos
└── fonts/                  # Gilroy fonts
```

### Implementation Features:
- **Performance**: Optimized loading of 49 frames for smooth rotation
- **UX**: Synchronization between drag control and slider
- **Responsiveness**: Adaptive layout for screens from 320px to 1920px+
- **Compatibility**: Support for modern browsers

## Installation and Setup

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Open `index.html` in browser or set up a local server:
```bash
# For Python 3
python -m http.server 8000

# For Node.js (with http-server installed)
npx http-server
```

3. Navigate to `http://localhost:8000`

## Compatibility

- **Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Devices**: Desktop, Tablet, Mobile
- **Screen Resolutions**: 320px - 1920px+

## Code Structure

### JavaScript Modules:
- **ThreeSixty Initialization**: 360° viewing setup
- **Range Slider**: Frame position control
- **Auto-play**: Automatic rotation logic
- **Event Handlers**: User interaction handling

### CSS Architecture:
- **Base Styles**: Typography, reset, common classes
- **Component Styles**: Specific element styling
- **Responsive Styles**: Media queries for different devices

## Author

Developed in 2020 as an interactive solution for product presentation.

## License

Project developed for demonstration purposes.
