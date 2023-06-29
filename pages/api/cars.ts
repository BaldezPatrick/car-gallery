import { NextApiRequest, NextApiResponse } from "next";

const carsData = [
  {
    id: "xc90-recharge",
    modelName: "XC90 Recharge",
    bodyType: "suv",
    modelType: "plug-in hybrid",
    imageUrl: "/images/xc90_recharge.jpg",
  },
  {
    id: "xc60-recharge",
    modelName: "XC60 Recharge",
    bodyType: "suv",
    modelType: "plug-in hybrid",
    imageUrl: "/images/xc60_recharge.jpg",
  },
  {
    id: "xc40-recharge",
    modelName: "XC40 Recharge",
    bodyType: "suv",
    modelType: "plug-in hybrid",
    imageUrl: "/images/xc40_recharge.jpg",
  },
  {
    id: "xc40-bev",
    modelName: "XC40 Recharge",
    bodyType: "suv",
    modelType: "pure electric",
    imageUrl: "/images/xc40_bev.jpg",
  },
  {
    id: "v90-recharge",
    modelName: "V90 Recharge",
    bodyType: "estate",
    modelType: "plug-in hybrid",
    imageUrl: "/images/v90_recharge.jpg",
  },
  {
    id: "v60-recharge",
    modelName: "V60 Recharge",
    bodyType: "estate",
    modelType: "plug-in hybrid",
    imageUrl: "/images/v60_recharge.jpg",
  },
  {
    id: "s90-recharge",
    modelName: "S90 Recharge",
    bodyType: "sedan",
    modelType: "plug-in hybrid",
    imageUrl: "/images/s90_recharge.jpg",
  },
  {
    id: "s60-recharge",
    modelName: "S60 Recharge",
    bodyType: "sedan",
    modelType: "plug-in hybrid",
    imageUrl: "/images/s60_recharge.jpg",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(carsData);
}
