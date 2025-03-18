import { planetClass } from "./planetClass.js"

const Sun     = new planetClass("Sun",     0, 0, 0, 0, 20, 1.989e30, "yellow");
const Mercury = new planetClass("Mercury", 5.79e10, 0, 0, 47362, 4, 3.285e23, "gray");
const Venus   = new planetClass("Venus", 1.082e11, 0, 0, 35020, 6, 4.867e24, "orange");
const Earth   = new planetClass("Earth", 1.496e11, 0, 0, 29783, 8, 5.972e24, "blue");
const Mars    = new planetClass("Mars", 2.279e11, 0, 0, 24077, 6, 6.39e23, "red");
const Jupiter = new planetClass("Jupiter", 7.785e11, 0, 0, 13070, 14, 1.898e27,"brown");
const Saturn  = new planetClass("Saturn", 1.433e12, 0, 0, 9690, 12, 5.683e26, "gold");
const Uranus  = new planetClass("Uranus", 2.877e12, 0, 0, 6800, 10, 8.681e25, "cyan");
const Neptune = new planetClass("Neptune", 4.503e12, 0, 0, 5430, 10, 1.024e26, "darkblue");

export const planetsArray = [
    Sun,
    Mercury,
    Venus,
    Earth,
    Mars,
    Jupiter,
    Saturn,
    Uranus,
    Neptune,
  ];