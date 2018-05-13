// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


// Flocking
// Demonstration of Craig Reynolds' "Flocking" behavior
// See: http://www.red3d.com/cwr/
// Rules: Cohesion, Separation, Alignment

// Click mouse to add boids into the system

import http.requests.*;

Flock flock;
PVector center;
PImage map;
boolean showvalues = true;
boolean scrollbar = false;
JSONObject ezm;

void setup() {
  size(1200,500,P2D);
  setupScrollbars();
  center = new PVector(width/2,height/2);
  colorMode(RGB,255,255,255,100);
  flock = new Flock(this);
  // Add an initial set of boids into the system
  for (int i = 0; i < 1; i++) {
    flock.addBoid(new Boid(width/2,height/2, 123, this));
  }
  smooth();
  map = loadImage("./map.PNG");
}


void draw() {

  background(map); 
  /*x,y*/

  flock.run();
  drawScrollbars();

  if (mousePressed && !scrollbar) {
    flock.addBoid(new Boid(mouseX,mouseY));
  }


  if (showvalues) {
    fill(0);
    textAlign(LEFT);
    text("Total boids: " + flock.boids.size() + "\n" + "Framerate: " + round(frameRate) + "\nPress any key to show/hide sliders and text\nClick mouse to add more boids",5,100);
  }
}

void keyPressed() {
  showvalues = !showvalues;
}

void mousePressed() {
}
