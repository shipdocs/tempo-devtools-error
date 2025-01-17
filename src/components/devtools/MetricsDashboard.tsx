import React from "react";
import MetricsCard from "./MetricsCard";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MetricData {
  title: string;
  value: string | number;
  change: number;
  timeframe: string;
  trend: "up" | "down";
}

interface MetricsDashboardProps {
  performanceMetrics?: MetricData[];
  networkMetrics?: MetricData[];
  stateMetrics?: MetricData[];
}

const defaultPerformanceMetrics: MetricData[] = [
  {
    title: "Response Time",
    value: "245ms",
    change: 12.5,
    timeframe: "vs last hour",
    trend: "up",
  },
  {
    title: "CPU Usage",
    value: "45%",
    change: 5.2,
    timeframe: "vs last hour",
    trend: "down",
  },
  {
    title: "Memory Usage",
    value: "1.2GB",
    change: 8.7,
    timeframe: "vs last hour",
    trend: "up",
  },
];

const defaultNetworkMetrics: MetricData[] = [
  {
    title: "API Calls",
    value: 1250,
    change: 3.8,
    timeframe: "vs last hour",
    trend: "up",
  },
  {
    title: "Error Rate",
    value: "0.5%",
    change: 1.2,
    timeframe: "vs last hour",
    trend: "down",
  },
  {
    title: "Bandwidth",
    value: "2.4MB/s",
    change: 6.3,
    timeframe: "vs last hour",
    trend: "up",
  },
];

const defaultStateMetrics: MetricData[] = [
  {
    title: "State Updates",
    value: 458,
    change: 15.3,
    timeframe: "vs last hour",
    trend: "up",
  },
  {
    title: "Store Size",
    value: "256KB",
    change: 2.1,
    timeframe: "vs last hour",
    trend: "up",
  },
  {
    title: "Actions/min",
    value: 75,
    change: 4.8,
    timeframe: "vs last hour",
    trend: "down",
  },
];

const MetricsDashboard = ({
  performanceMetrics = defaultPerformanceMetrics,
  networkMetrics = defaultNetworkMetrics,
  stateMetrics = defaultStateMetrics,
}: MetricsDashboardProps) => {
  return (
    <Card className="p-6 w-[1100px] h-[400px] bg-background">
      <Tabs defaultValue="performance" className="w-full h-full">
        <TabsList className="mb-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="network">Network</TabsTrigger>
          <TabsTrigger value="state">State Management</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="mt-0">
          <div className="grid grid-cols-3 gap-4">
            {performanceMetrics.map((metric, index) => (
              <MetricsCard key={`performance-${index}`} data={metric} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="network" className="mt-0">
          <div className="grid grid-cols-3 gap-4">
            {networkMetrics.map((metric, index) => (
              <MetricsCard key={`network-${index}`} data={metric} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="state" className="mt-0">
          <div className="grid grid-cols-3 gap-4">
            {stateMetrics.map((metric, index) => (
              <MetricsCard key={`state-${index}`} data={metric} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default MetricsDashboard;
