export class RemovalItem {
  constructor(public id: number,
              public type: string,
              public quantity: number,
              public roomId: number) {  }
}

export const REMOVAL_ITEM_TYPES: string[] = [
  'Tile', 'Drywall', 'Insulation', 'Popcorn Ceiling'
];
