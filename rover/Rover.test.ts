import { Rover } from "./Rover";

describe("Rover", () => {
  describe("Turn left", () => {
    test("must turn from N to W", () => {
      const initialPosition: RoverPosition = {
        x: 5,
        y: 5,
        direction: "N",
      };
      const plateauBoundaries: PlateauBoundries = { maxY: 5, maxX: 5 };
      const rover = new Rover(initialPosition, plateauBoundaries);
      rover.turnLeft();
      expect(rover.position.direction).toBe("W");
    });
  });

  describe("Turn Right", () => {
    test("must turn from N to E", () => {
      const plateauBoundaries: PlateauBoundries = { maxY: 5, maxX: 5 };
      const initialPosition: RoverPosition = {
        x: 5,
        y: 5,
        direction: "N",
      };
      const rover = new Rover(initialPosition, plateauBoundaries);
      rover.turnRight();
      expect(rover.position.direction).toBe("E");
    });
  });

  describe("Move forward", () => {
    test("must stay within plateau boundaries", () => {
      const plateauBoundaries: PlateauBoundries = { maxY: 5, maxX: 5 };

      const initialPosition: RoverPosition = {
        x: 5,
        y: 5,
        direction: "N",
      };
      const rover = new Rover(initialPosition, plateauBoundaries);

      expect(() => rover.moveForward()).toThrow();
    });

    test("must move up by 1 unit on y axis when facing N", () => {
      const initialPosition: RoverPosition = {
        x: 5,
        y: 4,
        direction: "N",
      };
      const plateauBoundaries: PlateauBoundries = { maxY: 5, maxX: 5 };

      const rover = new Rover(initialPosition, plateauBoundaries);
      rover.moveForward();
      expect(rover.position.y).toBe(5);
    });
  });

  describe("Must execute the chain of commands", () => {
    const initialPosition: RoverPosition = {
      x: 5,
      y: 5,
      direction: "N",
    };
    const plateauBoundaries: PlateauBoundries = { maxY: 5, maxX: 5 };

    const commands: RoverCommand[] = ["L", "M", "L", "M"];

    const expectedNewPostion: RoverPosition = {
      x: 4,
      y: 4,
      direction: "S",
    };

    const rover = new Rover(initialPosition, plateauBoundaries);

    rover.executeCommands(commands);

    expect(rover.position).toEqual(expectedNewPostion);
  });
});
