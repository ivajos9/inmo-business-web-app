export class Apartment {
  constructor(
    public code,
    public available: boolean,
    public consArea: number,
    public address: string,
    public environments: string,
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
