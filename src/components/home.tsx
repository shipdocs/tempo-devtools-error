import React from "react";
import ConfigPanel from "./devtools/ConfigPanel";
import MetricsDashboard from "./devtools/MetricsDashboard";
import ConsoleViewer from "./devtools/ConsoleViewer";

interface HomeProps {
  apiKey?: string;
  onApiKeySubmit?: (key: string) => void;
  features?: {
    performance: boolean;
    network: boolean;
    state: boolean;
  };
  onFeatureToggle?: (feature: string, enabled: boolean) => void;
}

const Home = ({
  apiKey = "",
  onApiKeySubmit = () => {},
  features = {
    performance: true,
    network: false,
    state: true,
  },
  onFeatureToggle = () => {},
}: HomeProps) => {
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-[1512px] mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-8">Tempo DevTools Setup</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[400px,1fr] gap-6">
          <div className="space-y-6">
            <ConfigPanel
              apiKey={apiKey}
              onApiKeySubmit={onApiKeySubmit}
              features={features}
              onFeatureToggle={onFeatureToggle}
            />
          </div>

          <div className="space-y-6">
            <MetricsDashboard />
            <ConsoleViewer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
