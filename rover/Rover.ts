export class Rover {
  public roverPosition: RoverPosition;
  private plateuBoundaries: PlateauBoundries;

  constructor(
    initialPosition: RoverPosition,
    plateuBoundaries: PlateauBoundries
  ) {
    this.roverPosition = initialPosition;
    this.plateuBoundaries = plateuBoundaries;
  }

  public executeCommands(commands: RoverCommand[]): void {
    commands.forEach((cmd) => {
      switch (cmd) {
        case "L":
          this.turnLeft();
          break;
        case "R":
          this.turnRight();
          break;
        case "M":
          this.moveForward();
          break;
        default:
          throw new Error("Unknown command");
      }
    });
  }

  public turnLeft(): void {
    switch (this.roverPosition.direction) {
      case "N":
        this.roverPosition.direction = "W";
        break;
      case "W":
        this.roverPosition.direction = "S";
        break;
      case "S":
        this.roverPosition.direction = "E";
        break;
      case "E":
        this.roverPosition.direction = "N";
        break;
    }
  }

  private checkIfWithinXBoundaries(xPosition: number): boolean {
    if (xPosition > this.plateuBoundaries.maxX || xPosition < 0) {
      throw new Error("Rover can't go outside of plateu");
    }
    return true;
  }

  private checkIfWithinYBoundaries(yPosition: number): boolean {
    if (yPosition > this.plateuBoundaries.maxY || yPosition < 0) {
      throw new Error("Rover can't go outside of plateu");
    }
    return true;
  }

  public turnRight(): void {
    switch (this.roverPosition.direction) {
      case "N":
        this.roverPosition.direction = "E";
        break;
      case "E":
        this.roverPosition.direction = "S";
        break;
      case "S":
        this.roverPosition.direction = "W";
        break;
      case "W":
        this.roverPosition.direction = "N";
        break;
    }
  }

  public moveForward(): void {
    switch (this.roverPosition.direction) {
      case "N":
        if (this.checkIfWithinYBoundaries(this.roverPosition.y + 1)) {
          this.roverPosition.y += 1;
        }
        break;
      case "E":
        if (this.checkIfWithinXBoundaries((this.roverPosition.x += 1))) {
          this.roverPosition.x += 1;
        }
        break;
      case "S":
        this.roverPosition.y -= 1;
        break;
      case "W":
        this.roverPosition.x -= 1;
        break;
    }
  }

  get position(): RoverPosition {
    return this.roverPosition;
  }
}
