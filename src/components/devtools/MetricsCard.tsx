import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface MetricData {
  title: string;
  value: string | number;
  change: number;
  timeframe: string;
  trend: "up" | "down";
}

interface MetricsCardProps {
  data: MetricData;
}

const defaultMetricData: MetricData = {
  title: "Response Time",
  value: "245ms",
  change: 12.5,
  timeframe: "vs last hour",
  trend: "up",
};

const MetricsCard = ({ data = defaultMetricData }: MetricsCardProps) => {
  const trendColor = data.trend === "up" ? "text-red-500" : "text-green-500";
  const TrendIcon = data.trend === "up" ? ArrowUpRight : ArrowDownRight;

  return (
    <Card className="w-[350px] h-[180px] bg-background border-border hover:border-primary/50 transition-colors">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {data.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-2xl font-bold">{data.value}</div>
          <div className="flex items-center space-x-2">
            <span className={`flex items-center ${trendColor}`}>
              <TrendIcon className="h-4 w-4 mr-1" />
              {Math.abs(data.change)}%
            </span>
            <span className="text-sm text-muted-foreground">
              {data.timeframe}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
