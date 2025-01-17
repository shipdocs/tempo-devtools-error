import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Key, Activity, Network, Database } from "lucide-react";

interface ConfigPanelProps {
  apiKey?: string;
  onApiKeySubmit?: (key: string) => void;
  features?: {
    performance: boolean;
    network: boolean;
    state: boolean;
  };
  onFeatureToggle?: (feature: string, enabled: boolean) => void;
}

const defaultFeatures = {
  performance: true,
  network: false,
  state: true,
};

const ConfigPanel = ({
  apiKey = "",
  onApiKeySubmit = () => {},
  features = defaultFeatures,
  onFeatureToggle = () => {},
}: ConfigPanelProps) => {
  const [key, setKey] = React.useState(apiKey);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApiKeySubmit(key);
  };

  return (
    <Card className="w-[400px] bg-background border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key className="h-5 w-5" />
          DevTools Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <div className="flex gap-2">
              <Input
                id="apiKey"
                type="password"
                placeholder="Enter your Tempo API key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
              <Button type="submit">Save</Button>
            </div>
          </div>
        </form>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Monitoring Features</h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              <Label htmlFor="performance">Performance Monitoring</Label>
            </div>
            <Switch
              id="performance"
              checked={features.performance}
              onCheckedChange={(checked) =>
                onFeatureToggle("performance", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Network className="h-4 w-4" />
              <Label htmlFor="network">Network Tracking</Label>
            </div>
            <Switch
              id="network"
              checked={features.network}
              onCheckedChange={(checked) => onFeatureToggle("network", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <Label htmlFor="state">State Management</Label>
            </div>
            <Switch
              id="state"
              checked={features.state}
              onCheckedChange={(checked) => onFeatureToggle("state", checked)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConfigPanel;
