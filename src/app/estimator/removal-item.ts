export class RemovalItem {
  public id: number;
  public type: string;
  public quantity: number;
  public roomId: number;

  constructor(id?: number,
              type?: string,
              quantity?: number,
              roomId?: number) {

    this.id = id ?? 0;
    this.type = type ?? '';
    this.quantity = quantity ?? 0;
    this.roomId = roomId ?? 0;
  }

  static createItem(roomId: number): RemovalItem {
    return new RemovalItem(0, '', 0, roomId);
  }
}

export const REMOVAL_ITEM_TYPES: string[] = [
  'Tile', 'Drywall', 'Insulation', 'Popcorn Ceiling'
];
