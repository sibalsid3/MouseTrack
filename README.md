# MouseTrack
This Particle System project is an interactive sketch created using p5.js. It features particles that are attracted to the mouse cursor, displaying a dynamic and colorful animation. Each particle is a semi-transparent, colored circle that moves across the canvas.

Features
Dynamic Particle Attraction: Particles move towards the position of the mouse cursor, creating an effect of attraction.
Colorful Particles: Each particle is randomly colored for a visually appealing experience.
Semi-Transparency: Particles have a degree of transparency, adding depth and complexity to the visual display.
Interactive Creation: New particles are created at the mouse position on mouse click, allowing user interaction.
How It Works
Setup: The sketch sets up a canvas and initializes an empty array to hold the particles.
Drawing: In each draw cycle, the sketch updates and displays each particle.
Particle Attraction: Each particle is attracted to the current mouse position, altering its movement.
Adding Particles: Clicking the mouse adds a new particle at the mouse location.
Displaying Particles: Each particle is drawn as a semi-transparent, colored circle.
Code Structure
setup(): Initializes the canvas and sets up the sketch.
draw(): Called repeatedly to update and display particles.
mousePressed(): Adds a new particle where the mouse is clicked.
class Particle: Defines the properties and behaviors of a single particle, including:
constructor(x, y): Sets initial position, velocity, size, and color.
attractTo(target): Calculates the attraction force towards a target (mouse cursor).
update(): Updates the particle's position based on its velocity and acceleration.
display(): Renders the particle on the canvas.
Usage
Open this sketch in a p5.js editor or environment that supports p5.js. Interact with the sketch by moving the mouse and clicking to create new particles.

Conclusion
This Particle System project demonstrates basic principles of motion, attraction forces, and interactivity in a graphical programming environment using p5.js. It's a great example of combining simple physics and user interaction to create engaging visual effects.

