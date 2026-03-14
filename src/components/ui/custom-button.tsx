import * as React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Pre-styled CTA button using the project's gradient-cta design token.
 * Use for primary call-to-action links (e.g. "Pedir presupuesto gratis").
 */
export const CTAButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { href?: string }
>(({ className, children, href, ...props }, ref) => {
  if (href) {
    return (
      <Button asChild size="lg" className={cn("bg-gradient-cta shadow-cta", className)} ref={ref} {...props}>
        <a href={href}>{children}</a>
      </Button>
    );
  }
  return (
    <Button size="lg" className={cn("bg-gradient-cta shadow-cta", className)} ref={ref} {...props}>
      {children}
    </Button>
  );
});
CTAButton.displayName = "CTAButton";

/**
 * Phone call button styled in blue, with an optional phone icon.
 * Defaults to the business phone number when no href is provided.
 */
export const PhoneButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { href?: string; label?: string }
>(({ className, children, href = "tel:+34722208131", label = "+34 722 208 131", ...props }, ref) => (
  <Button
    asChild
    size="lg"
    className={cn("bg-blue-500 hover:bg-blue-600 text-white shadow-lg font-bold", className)}
    ref={ref}
    {...props}
  >
    <a href={href} className="flex items-center justify-center space-x-2">
      <Phone className="w-5 h-5" aria-hidden="true" />
      <span>{children ?? label}</span>
    </a>
  </Button>
));
PhoneButton.displayName = "PhoneButton";

/**
 * WhatsApp button styled in green.
 * Defaults to the business WhatsApp link when no href is provided.
 */
export const WhatsAppButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { href?: string; label?: string }
>(
  (
    {
      className,
      children,
      href = "https://wa.me/34722208131?text=Hola,%20me%20gustaría%20solicitar%20un%20presupuesto%20de%20pintura",
      label = "WhatsApp",
      ...props
    },
    ref,
  ) => (
    <Button
      asChild
      size="lg"
      className={cn("bg-green-500 hover:bg-green-600 text-white shadow-lg font-bold", className)}
      ref={ref}
      {...props}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${children ?? label} (abre en nueva pestaña)`} className="flex items-center justify-center space-x-2">
        <MessageCircle className="w-5 h-5" aria-hidden="true" />
        <span>{children ?? label}</span>
      </a>
    </Button>
  ),
);
WhatsAppButton.displayName = "WhatsAppButton";

/**
 * Outlined service-link button: white background with a blue border,
 * flipping to solid blue on hover. Suitable for service card links.
 */
export const ServiceLinkButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { href?: string }
>(({ className, children, href, ...props }, ref) => {
  const classes = cn(
    "bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors",
    className,
  );
  if (href) {
    return (
      <Button asChild size="sm" className={classes} ref={ref} {...props}>
        <a href={href}>{children}</a>
      </Button>
    );
  }
  return (
    <Button size="sm" className={classes} ref={ref} {...props}>
      {children}
    </Button>
  );
});
ServiceLinkButton.displayName = "ServiceLinkButton";
