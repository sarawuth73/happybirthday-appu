# Birthday Greeting Project

This project is a birthday greeting web application with multiple interactive steps.

## Project Structure

```
hbd/
├── index.html              # Main HTML file (original)
├── index-organized.html    # Organized version with clearly separated steps
├── styles.css              # All CSS styles
├── script.js               # All JavaScript functionality
├── script-with-dynamic-steps.js  # Alternative script with dynamic step loading
├── steps/                  # Directory containing individual step files
│   ├── step1.html          # Step 1: Welcome Message
│   ├── step2.html          # Step 2: Birthday Card
│   ├── step3.html          # Step 3: Photo Gallery
│   ├── step4.html          # Step 4: Mini Game
│   └── step5.html          # Step 5: Gift Randomizer
├── img/                    # Image directory
│   ├── appu/               # Photos directory
│   └── gif/                # Gift images directory
└── README.md               # This file
```

## Files Description

### Main Files
- **index.html**: The original HTML file with all code in one file
- **index-organized.html**: A cleaner version of the HTML with clearly separated steps
- **styles.css**: Contains all CSS styles extracted from the original HTML
- **script.js**: Contains all JavaScript code extracted from the original HTML

### Step Files
Each step has been separated into its own HTML file in the `steps/` directory:
1. **step1.html**: Welcome message with typing animation
2. **step2.html**: Interactive 3D birthday card/envelope
3. **step3.html**: Photo gallery with navigation
4. **step4.html**: Psychology quiz mini-game
5. **step5.html**: Gift randomizer with celebration effects

### Alternative Implementation
- **script-with-dynamic-steps.js**: An alternative JavaScript implementation that dynamically loads steps (experimental)

## How to Use
1. Open `index.html` in a web browser to see the original version
2. Open `index-organized.html` to see the organized version
3. The individual step files in the `steps/` directory can be used as reference or for modular development

## Features
- Responsive design
- Interactive animations and transitions
- Multiple steps with different content types
- Image and video gallery
- Mini-game with scoring
- Gift randomizer with celebration effects
- Thai language support