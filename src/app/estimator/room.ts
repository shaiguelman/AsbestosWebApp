export interface Room {
  id: number;
  type: string;
  name: string;
}

export const ROOM_TYPES: string[] = [
  'Bedroom', 'Bathroom', 'Kitchen', 'Hallway', 'Garage', 'Attic/Basement', 'Shared Space'
];
