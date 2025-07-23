'use client';

import PricingTable from '@/components/autumn/pricing-table';
import StaticPricingTable from '@/components/static-pricing-table';
import { useSession } from '@/lib/auth-client';

// Static product details for unauthenticated users
const staticProducts = [
  {
    id: "free",
    name: "Starter",
    description: "Perfect for personal brands",
    price: {
      primaryText: "Free",
      secondaryText: "No credit card required"
    },
    items: [
      { 
        primaryText: "10 brand analyses per month",
        secondaryText: "Track your brand visibility"
      },
      {
        primaryText: "Basic AI providers",
        secondaryText: "ChatGPT, Claude, Perplexity"
      },
      {
        primaryText: "Email reports",
        secondaryText: "Monthly brand visibility reports"
      }
    ]
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing businesses",
    recommendText: "Most Popular",
    price: {
      primaryText: "$49/month",
      secondaryText: "billed monthly"
    },
    items: [
      { 
        primaryText: "Unlimited brand analyses",
        secondaryText: "Monitor as much as you need"
      },
      {
        primaryText: "All AI providers",
        secondaryText: "Complete AI landscape coverage"
      },
      {
        primaryText: "Real-time alerts",
        secondaryText: "Get notified of brand mentions"
      }
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For agencies & large brands",
    price: {
      primaryText: "Custom",
      secondaryText: "Contact sales"
    },
    items: [
      {
        primaryText: "Multiple brands",
        secondaryText: "Manage client portfolios"
      },
      {
        primaryText: "API access",
        secondaryText: "Integrate with your tools"
      },
      {
        primaryText: "White-label options",
        secondaryText: "Brand it as your own"
      }
    ]
  }
];

export default function PricingPage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-[3rem] lg:text-[4.5rem] font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Simple, transparent pricing
            </span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Choose the perfect plan for your brand monitoring needs. Always flexible to scale up or down.
          </p>
          {session && (
            <p className="text-sm text-zinc-500 mt-4">
              Logged in as: {session.user?.email}
            </p>
          )}
        </div>

        <div className="bg-white rounded-[20px] shadow-xl p-8 border border-zinc-200">
          {/* Use static component for unauthenticated users to avoid API calls */}
          {session ? (
            <PricingTable />
          ) : (
            <StaticPricingTable products={staticProducts} />
          )}
        </div>
      </div>
    </div>
  );
}