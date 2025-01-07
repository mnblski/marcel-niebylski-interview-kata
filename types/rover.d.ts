type RoverDirection = "N" | "W" | "S" | "E";
type RoverCommand = "L" | "R" | "M";

interface RoverPosition {
  x: number;
  y: number;
  direction: RoverDirection;
}
