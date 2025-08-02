"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useGetMetaDataQuery } from "@/redux/features/meta/metaApi";
import { TMetaData } from "@/types";

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

export function BarChartComponent({ data }: { data: TMetaData }) {
  return (
    <div className="xl:w-[600px] lg:w-[500px] md:w-[484px] sm:w-full w-full h-auto">
      <Card>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart accessibilityLayer data={data}>
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
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="totalLostItems"
                  fill="var(--color-mobile)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="totalClaimItems"
                  fill="var(--color-mobile)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="totalUsers"
                  fill="var(--color-mobile)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
