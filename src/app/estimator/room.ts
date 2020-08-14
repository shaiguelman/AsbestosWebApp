export class Room {
  public id: number;
  public type: string;
  public name: string;

  constructor(id?: number,
              type?: string,
              name?: string) {
    this.id = id ?? 0;
    this.type = type ?? '';
    this.name = name ?? '';
  }
}

export const ROOM_TYPES: string[] = [
  'Bedroom', 'Bathroom', 'Kitchen', 'Hallway', 'Garage', 'Attic/Basement', 'Shared Space'
];
