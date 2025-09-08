import { PricingTable } from "@clerk/nextjs";
import React from "react";

const Subscription = () => {
  return (
    <main>
      <h1 className="text-center">Plan & Pricing</h1>
      <PricingTable />
    </main>
  );
};

export default Subscription;
