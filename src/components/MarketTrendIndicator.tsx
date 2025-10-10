"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { FiTrendingUp, FiTrendingDown, FiBarChart } from "react-icons/fi";

// Mock data for market trends (would normally come from an API)
const generateMockTrendData = () => {
  const data = [];
  const basePrice = 0.7;
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const variation = Math.sin(i / 7) * 0.05 + (Math.random() - 0.5) * 0.03;
    data.push({
      date: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      price: basePrice + variation,
      timestamp: date.getTime(),
    });
  }
  return data;
};

const MarketTrendIndicator = () => {
  const [trendData, setTrendData] = useState(generateMockTrendData());
  const [currentTrend, setCurrentTrend] = useState<"up" | "down" | "stable">("up");
  const [trendPercentage, setTrendPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const calculateTrend = useCallback(() => {
    if (trendData.length < 7) return;

    const currentWeek = trendData.slice(-7);
    const previousWeek = trendData.slice(-14, -7);

    if (previousWeek.length < 7) return;

    const currentAvg = currentWeek.reduce((sum, d) => sum + d.price, 0) / currentWeek.length;
    const previousAvg = previousWeek.reduce((sum, d) => sum + d.price, 0) / previousWeek.length;

    const change = ((currentAvg - previousAvg) / previousAvg) * 100;
    setTrendPercentage(change);

    if (change > 0.5) setCurrentTrend("up");
    else if (change < -0.5) setCurrentTrend("down");
    else setCurrentTrend("stable");
  }, [trendData]);

  useEffect(() => {
    calculateTrend();

    // Simulate periodic updates
    const interval = setInterval(() => {
      setIsLoading(true);
      setTimeout(() => {
        setTrendData(generateMockTrendData());
        setIsLoading(false);
      }, 1000);
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [calculateTrend]);

  const getTrendColor = () => {
    switch (currentTrend) {
      case "up":
        return "from-green-500 to-emerald-600";
      case "down":
        return "from-red-500 to-pink-600";
      case "stable":
        return "from-blue-500 to-cyan-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getTrendIcon = () => {
    switch (currentTrend) {
      case "up":
        return <FiTrendingUp className="w-6 h-6 text-green-600" />;
      case "down":
        return <FiTrendingDown className="w-6 h-6 text-red-600" />;
      case "stable":
        return <FiBarChart className="w-6 h-6 text-blue-600" />;
      default:
        return <FiBarChart className="w-6 h-6 text-gray-600" />;
    }
  };

  const getTrendText = () => {
    switch (currentTrend) {
      case "up":
        return "Prices Increasing";
      case "down":
        return "Prices Decreasing";
      case "stable":
        return "Prices Stable";
      default:
        return "Market Stable";
    }
  };

  const getTrendMessage = () => {
    switch (currentTrend) {
      case "up":
        return "Great time to sell! Aluminum prices are on the rise.";
      case "down":
        return "Consider holding if possible. Prices may increase soon.";
      case "stable":
        return "Current market conditions are stable.";
      default:
        return "Market conditions are stable.";
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl shadow-xl p-6 border border-slate-200 hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 bg-gradient-to-r ${getTrendColor()} rounded-xl flex items-center justify-center overflow-hidden relative`}>
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            <span className="text-2xl relative z-10">{currentTrend === "up" ? "📈" : currentTrend === "down" ? "📉" : "📊"}</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Market Trends</h3>
            <p className="text-sm text-gray-600">30-day aluminum outlook</p>
          </div>
        </div>
        {isLoading && (
          <div className="text-sm text-gray-500 flex items-center space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <span>Updating...</span>
          </div>
        )}
      </div>

      {/* Trend Indicator */}
      <div className="flex items-center space-x-3 mb-4">
        {getTrendIcon()}
        <div>
          <div className="text-sm font-semibold text-gray-900">{getTrendText()}</div>
          <div className={`text-lg font-bold ${currentTrend === "up" ? "text-green-600" : currentTrend === "down" ? "text-red-600" : "text-blue-600"}`}>
            {currentTrend === "up" ? "+" : ""}
            {trendPercentage.toFixed(1)}% this week
          </div>
        </div>
      </div>

      {/* Trend Visualization */}
      <div className="mb-4 bg-white/60 rounded-lg p-4">
        <div className="flex items-end justify-between h-16">
          {trendData.slice(-10).map((point, index) => {
            const height = ((point.price - 0.6) / 0.2) * 64; // Scale to 0-64px
            return <motion.div key={point.timestamp} initial={{ height: 0 }} animate={{ height }} transition={{ delay: index * 0.1, duration: 0.5 }} className={`w-6 rounded-t-sm ${currentTrend === "up" ? "bg-gradient-to-t from-green-400 to-green-600" : currentTrend === "down" ? "bg-gradient-to-t from-red-400 to-red-600" : "bg-gradient-to-t from-blue-400 to-blue-600"}`} style={{ maxHeight: height }} />;
          })}
        </div>
        <div className="text-xs text-gray-500 text-center mt-2">Last 10 days</div>
      </div>

      {/* Trend Message */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm">💡</span>
          </div>
          <div>
            <p className="text-sm text-gray-700 leading-relaxed">{getTrendMessage()}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4 text-center">
        <a href="/pricing" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
          View Full Market Analysis →
        </a>
      </div>
    </motion.div>
  );
};

export default MarketTrendIndicator;
