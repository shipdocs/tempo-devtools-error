import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2, Download } from "lucide-react";

interface LogEntry {
  timestamp: string;
  type: "info" | "warning" | "error";
  message: string;
  details?: string;
}

interface ConsoleViewerProps {
  logs?: LogEntry[];
  onClear?: () => void;
  onExport?: () => void;
}

const defaultLogs: LogEntry[] = [
  {
    timestamp: "2024-01-20 10:30:15",
    type: "info",
    message: "Performance monitoring initialized",
    details: "FPS tracking enabled",
  },
  {
    timestamp: "2024-01-20 10:30:16",
    type: "warning",
    message: "Network latency above threshold",
    details: "Response time: 350ms",
  },
  {
    timestamp: "2024-01-20 10:30:17",
    type: "error",
    message: "Failed to track state changes",
    details: "Redux DevTools not connected",
  },
];

const ConsoleViewer = ({
  logs = defaultLogs,
  onClear = () => console.log("Clear console"),
  onExport = () => console.log("Export logs"),
}: ConsoleViewerProps) => {
  const [filter, setFilter] = useState<"all" | "info" | "warning" | "error">(
    "all",
  );

  const getLogColor = (type: LogEntry["type"]) => {
    switch (type) {
      case "info":
        return "text-blue-500";
      case "warning":
        return "text-yellow-500";
      case "error":
        return "text-red-500";
      default:
        return "text-foreground";
    }
  };

  const filteredLogs = logs.filter((log) =>
    filter === "all" ? true : log.type === filter,
  );

  return (
    <Card className="w-full h-[300px] bg-background border-border">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">Console Output</CardTitle>
        <div className="flex space-x-2">
          <div className="flex space-x-1">
            {(["all", "info", "warning", "error"] as const).map((type) => (
              <Button
                key={type}
                variant={filter === type ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(type)}
                className="capitalize"
              >
                {type}
              </Button>
            ))}
          </div>
          <Button variant="outline" size="sm" onClick={onExport}>
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={onClear}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
          {filteredLogs.map((log, index) => (
            <div key={index} className="mb-2 last:mb-0 font-mono text-sm">
              <div className="flex items-start">
                <span className="text-muted-foreground">{log.timestamp}</span>
                <span
                  className={`ml-2 ${getLogColor(log.type)} uppercase text-xs font-bold`}
                >
                  [{log.type}]
                </span>
                <span className="ml-2">{log.message}</span>
              </div>
              {log.details && (
                <div className="ml-[180px] text-muted-foreground text-xs">
                  {log.details}
                </div>
              )}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ConsoleViewer;
