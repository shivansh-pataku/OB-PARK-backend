import { CategoryProducts } from "./types";
import { carAccessories } from "./products/car-accessories";
import { carCareDetailing } from "./products/car-care-detaling"
import { electronicsAndSmartGadgets } from "./products/electronics-and-smart-gadgets";
import { emergencyAndSafety } from "./products/emergency-and-safety";
import { travelAndRoadSafety } from "./products/travel-and-road-safety";
import { familyAndPetCareProducts } from "./products/family-and-pet-care-products";
import { evProducts } from "./products/ev-products";
import { bikeShop } from "./products/bike-shop";
import { guestGifting } from "./products/guest-gifting";

export const allCategories: CategoryProducts[] = [
  carAccessories,
  carCareDetailing,
  electronicsAndSmartGadgets,
  emergencyAndSafety,
  travelAndRoadSafety,
  familyAndPetCareProducts,
  evProducts,
  bikeShop,
  guestGifting,
];
