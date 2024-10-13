"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useGetMetaDataQuery } from "@/redux/features/meta/metaApi";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function BarChartComponent() {
  const { data } = useGetMetaDataQuery({});

  return (
    <div className="w-96 h-96 mt-16">
      <Card>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={data?.data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar
                dataKey="totalFoundItems"
                fill="var(--color-desktop)"
                radius={4}
              />
              <Bar
                dataKey="totalLostItems"
                fill="var(--color-mobile)"
                radius={4}
              />
              <Bar
                dataKey="totalClaimItems"
                fill="var(--color-mobile)"
                radius={4}
              />
              <Bar dataKey="totalUsers" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
