export class Ground {
  constructor(
    public code,
    public available: boolean,
    public address: string,
    public fieldArea: number,
    public price: number,
    public propertyRegistry: string,
    public city: string,
    public country: string,
    public state: string,
    public latitude,
    public longitude,
    public photosArr: string[]
  ) {}
}
