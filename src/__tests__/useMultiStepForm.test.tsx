import { renderHook, act } from "@testing-library/react";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import React from "react";

const Step1 = () => <div>Step 1</div>;
const Step2 = () => <div>Step 2</div>;
const Step3 = () => <div>Step 3</div>;

describe("useMultiStepForm", () => {
  it("should return the first step initially", () => {
    const { result } = renderHook(() => useMultiStepForm([<Step1 key="1" />, <Step2 key="2" />, <Step3 key="3" />]));
    expect(result.current.currentStepIndex).toBe(0);
    expect(result.current.isFirstStep).toBe(true);
    expect(result.current.step).toEqual(<Step1 key="1" />);
  });

  it("should go to the next step", () => {
    const { result } = renderHook(() => useMultiStepForm([<Step1 key="1" />, <Step2 key="2" />, <Step3 key="3" />]));
    act(() => {
      result.current.next();
    });
    expect(result.current.currentStepIndex).toBe(1);
    expect(result.current.step).toEqual(<Step2 key="2" />);
  });

  it("should go to the previous step", () => {
    const { result } = renderHook(() => useMultiStepForm([<Step1 key="1" />, <Step2 key="2" />, <Step3 key="3" />]));
    act(() => {
      result.current.next();
    });
    act(() => {
      result.current.back();
    });
    expect(result.current.currentStepIndex).toBe(0);
  });

  it("should not go past the last step", () => {
    const { result } = renderHook(() => useMultiStepForm([<Step1 key="1" />, <Step2 key="2" />]));
    act(() => {
      result.current.next();
    });
    act(() => {
      result.current.next();
    });
    expect(result.current.currentStepIndex).toBe(1);
    expect(result.current.isLastStep).toBe(true);
  });

  it("should not go before the first step", () => {
    const { result } = renderHook(() => useMultiStepForm([<Step1 key="1" />, <Step2 key="2" />]));
    act(() => {
      result.current.back();
    });
    expect(result.current.currentStepIndex).toBe(0);
    expect(result.current.isFirstStep).toBe(true);
  });

  it("should go to a specific step", () => {
    const { result } = renderHook(() => useMultiStepForm([<Step1 key="1" />, <Step2 key="2" />, <Step3 key="3" />]));
    act(() => {
      result.current.goTo(2);
    });
    expect(result.current.currentStepIndex).toBe(2);
  });

  it("should not change step when goTo is called with an invalid index", () => {
    const { result } = renderHook(() => useMultiStepForm([<Step1 key="1" />, <Step2 key="2" />, <Step3 key="3" />]));
    act(() => {
      result.current.goTo(99);
    });
    expect(result.current.currentStepIndex).toBe(0);
  });
});
