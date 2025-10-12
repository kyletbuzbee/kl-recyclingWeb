import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ProgressiveDisclosureProps {
  /** The trigger element/text */
  trigger: React.ReactNode;
  /** Content to reveal/hide */
  children: React.ReactNode;
  /** Whether initially expanded */
  defaultExpanded?: boolean;
  /** Custom className */
  className?: string;
  /** Animation duration */
  duration?: number;
  /** Visual variant */
  variant?: "default" | "bordered" | "minimal";
  /**Icons for expand/collapse states */
  expandIcon?: React.ReactNode;
  collapseIcon?: React.ReactNode;
  /** Accessibility label for expanded state */
  expandedLabel?: string;
  /** Accessibility label for collapsed state */
  collapsedLabel?: string;
  /** Callback when state changes */
  onToggle?: (expanded: boolean) => void;
  /** Whether to animate the content */
  animate?: boolean;
}

const ProgressiveDisclosure: React.FC<ProgressiveDisclosureProps> = ({ trigger, children, defaultExpanded = false, className = "", duration = 0.3, variant = "default", expandIcon, collapseIcon, expandedLabel = "Expanded", collapsedLabel = "Collapsed", onToggle, animate = true }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = useCallback(() => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    onToggle?.(newState);
  }, [isExpanded, onToggle]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleExpanded();
      }
    },
    [toggleExpanded],
  );

  const defaultExpandIcon = <ChevronDown className="w-5 h-5" />;
  const defaultCollapseIcon = <ChevronUp className="w-5 h-5" />;

  const getVariantClasses = () => {
    switch (variant) {
      case "bordered":
        return "border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors";
      case "minimal":
        return "hover:bg-gray-50 rounded p-2 transition-colors";
      default:
        return "";
    }
  };

  return (
    <div className={className}>
      <button onClick={toggleExpanded} onKeyDown={handleKeyDown} className={`w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded flex items-center justify-between ${getVariantClasses()}`} aria-expanded={isExpanded} aria-controls={`progressive-content-${Math.random().toString(36).substr(2, 9)}`} type="button">
        <span className="flex-1">{trigger}</span>
        <span className="ml-2 transition-transform duration-200" style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }} aria-label={isExpanded ? expandedLabel : collapsedLabel}>
          {isExpanded ? collapseIcon || defaultCollapseIcon : expandIcon || defaultExpandIcon}
        </span>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={animate ? { height: 0, opacity: 0 } : {}} animate={animate ? { height: "auto", opacity: 1 } : {}} exit={animate ? { height: 0, opacity: 0 } : {}} transition={{ duration }} className="overflow-hidden">
            <div className="pt-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Preset variants for common use cases
export const AccordionItem: React.FC<
  Omit<ProgressiveDisclosureProps, "trigger" | "defaultExpanded"> & {
    title: string;
    content: React.ReactNode;
  }
> = ({ title, content, variant = "bordered", ...props }) => (
  <ProgressiveDisclosure trigger={<span className="font-medium text-gray-900">{title}</span>} variant={variant} {...props}>
    {content}
  </ProgressiveDisclosure>
);

export const DetailsSummary: React.FC<
  Omit<ProgressiveDisclosureProps, "trigger"> & {
    summary: string;
    details: React.ReactNode;
  }
> = ({ summary, details, variant = "minimal", expandIcon = <span className="text-blue-600 text-sm font-medium">Show details</span>, collapseIcon = <span className="text-blue-600 text-sm font-medium">Hide details</span>, ...props }) => (
  <ProgressiveDisclosure trigger={<span className="text-gray-700">{summary}</span>} expandIcon={expandIcon} collapseIcon={collapseIcon} variant={variant} {...props}>
    <div className="text-gray-600">{details}</div>
  </ProgressiveDisclosure>
);

export const ExpandableCard: React.FC<
  Omit<ProgressiveDisclosureProps, "trigger"> & {
    header: React.ReactNode;
    content: React.ReactNode;
  }
> = ({ header, content, variant = "bordered", expandIcon, collapseIcon, ...props }) => (
  <ProgressiveDisclosure trigger={header} variant={variant} expandIcon={expandIcon} collapseIcon={collapseIcon} {...props}>
    {content}
  </ProgressiveDisclosure>
);

export default ProgressiveDisclosure;
