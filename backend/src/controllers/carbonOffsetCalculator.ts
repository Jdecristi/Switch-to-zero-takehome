import { Request, Response, NextFunction } from "express";
interface monthlyOffset {
  month: number;
  treePurchased: number;
  currenttCarbonOffset: number;
  totalTrees: number;
}

interface offsetData {
  totalCarbonOffset: number;
  totalExpenses: number;
  totalYears: number;
  totalTreesPurchased: number;
  plan: monthlyOffset[];
}

export const checkQueryParams = (req: Request, res: Response, next: NextFunction) => {
  const requiredParams = ["footprint", "budget"];

  const fail = (param: string) => {
    return res.status(400).json({
      status: "fail",
      message: `Missing ${param}`,
    });
  };

  for (const param of requiredParams) {
    if (!req.query[param]) {
      return fail(param);
    }
  }

  next();
};

export const calculateCarbonOffset = (req: Request, res: Response) => {
  const { footprint, budget } = req.query;

  const calculateOffset = (footprint: number, budget: number): offsetData => {
    const treePrice = 120;
    const carbonFootprintInKG = footprint * 1000;

    let totalTreesPurchased = 0;
    let totalCarbonOffset = 0;
    let totalExpenses = 0;
    let totalYears = 0;
    let plan: monthlyOffset[] = [];
    let yearlyExpenses = 0;

    while (totalCarbonOffset < carbonFootprintInKG) {
      const maxTreePurchases = Math.floor((budget - yearlyExpenses) / treePrice);
      const year: monthlyOffset[] = [];

      let treesPurchased = 1;

      if (!maxTreePurchases) return { totalTreesPurchased, totalCarbonOffset, totalExpenses, totalYears, plan };

      yearlyExpenses += (maxTreePurchases * treePrice) / 10;
      totalCarbonOffset += totalTreesPurchased * 28.5;

      for (let i = 1; i <= 12; i++) {
        const treeMonth = Math.floor(12 / maxTreePurchases) * treesPurchased;

        if (treeMonth == i && treesPurchased <= maxTreePurchases) {
          treesPurchased++;
          totalCarbonOffset += 28.5;
          totalTreesPurchased++;
        }

        year.push({ month: i, treePurchased: treeMonth == i ? 1 : 0, currenttCarbonOffset: totalCarbonOffset, totalTrees: totalTreesPurchased });
      }

      plan.push(...year);
      totalYears += 1;
      totalExpenses += yearlyExpenses + maxTreePurchases * 120;
    }

    return { totalTreesPurchased, totalCarbonOffset, totalExpenses, totalYears, plan };
  };

  res.status(200).json({ data: calculateOffset(Number(footprint), Number(budget)) });
};
