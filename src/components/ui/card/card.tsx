import * as React from "react";
import { cn } from "../../../lib/utils";
import { ExternalLink } from "lucide-react";
import { Badge } from "../badge/badge";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

// Modified CardHeader with new interface
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  type?: string;
  showExternalLink?: boolean;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, title, type, showExternalLink = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        {showExternalLink && (
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
        )}
      </div>
      {type && (
        <Badge variant="outline" className="w-fit">
          {type}
        </Badge>
      )}
      {props.children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };
