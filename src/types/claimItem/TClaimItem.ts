import { TFoundItem } from "../common";

export type TClaimItem ={
    id: string;
    userId: string;
    foundItemId: string;
    status: string;
    distinguishingFeatures: string;
    securityFeatures: string;
    description: string;
    photo: string;
    thirdPartyConfirmation: string;
    lostDate: string;
    createdAt: string;
    updatedAt: string;
    foundItem: TFoundItem;
}