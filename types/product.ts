export interface Car {
    id: any;
    _id: string;
    name:string;
    _type:"car";
    image?:{
        asset:{
            _ref:string;
            _type:"image";
        }
    },
    price: number;
    description: string;
    brand: string;
    type: string;
    fuelCapacity: number;
    transmission: string;
    seatingCapacity: number;
    pricePerDay: number;
    originalPrice: number;
    tags?: string[];
}


