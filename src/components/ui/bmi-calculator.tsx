"use client";

import React, { useState } from "react";

export function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<{ bmi: number; category: string; advice: string } | null>(null);

  const calculate = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w || h <= 0 || w <= 0) return;

    const bmi = w / (h * h);
    let category = "";
    let advice = "";

    if (bmi < 18.5) {
      category = "Underweight";
      advice = "Consider a structured muscle gain program with a caloric surplus and progressive overload training.";
    } else if (bmi < 25) {
      category = "Normal";
      advice = "You're in a healthy range! Maintain with consistent training and balanced nutrition.";
    } else if (bmi < 30) {
      category = "Overweight";
      advice = "A combination of cardio and strength training with a slight caloric deficit can help you reach your ideal weight.";
    } else {
      category = "Obese";
      advice = "We recommend starting with our guided weight loss program — low-impact cardio, dietary coaching, and weekly check-ins.";
    }

    setResult({ bmi: Math.round(bmi * 10) / 10, category, advice });
  };

  return (
    <div className="card-base p-8 max-w-md mx-auto space-y-6">
      <h3 className="text-lg font-display font-bold text-center tracking-tight">BMI Calculator</h3>

      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="170"
            className="w-full h-12 bg-background border border-border px-4 text-foreground rounded-md focus:outline-none focus:border-accent text-sm font-sans"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="70"
            className="w-full h-12 bg-background border border-border px-4 text-foreground rounded-md focus:outline-none focus:border-accent text-sm font-sans"
          />
        </div>
        <button onClick={calculate} className="btn-primary w-full py-3 text-xs">
          Calculate BMI
        </button>
      </div>

      {result && (
        <div className="space-y-3 pt-4 border-t border-border">
          <div className="text-center">
            <span className="text-4xl font-display font-extrabold text-accent">{result.bmi}</span>
            <p className="text-sm font-display font-bold uppercase tracking-wider text-foreground mt-1">{result.category}</p>
          </div>
          <p className="text-muted text-sm font-sans leading-relaxed text-center">{result.advice}</p>
        </div>
      )}
    </div>
  );
}
