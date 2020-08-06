export interface RemovalItem {
  id: number;
  type: string;
  quantity: number;
  roomId: number;
}

export const REMOVAL_ITEM_TYPES: string[] = [
  'Tile', 'Drywall', 'Insulation', 'Popcorn Ceiling'
];
