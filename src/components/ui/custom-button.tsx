import * as React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

const PHONE_NUMBER = "+34722208131";
const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, me gustaría solicitar información sobre sus servicios de pintura";

/**
 * Botón CTA principal con el gradiente y sombra de la marca.
 * Úsalo para las llamadas a la acción más importantes de cada página.
 */
export const CTAButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = "lg", children, ...props }, ref) => (
    <Button
      ref={ref}
      size={size}
      className={cn("bg-gradient-cta shadow-cta text-white", className)}
      {...props}
    >
      {children}
    </Button>
  ),
);
CTAButton.displayName = "CTAButton";

/**
 * Botón de llamada telefónica.
 * Renderiza un enlace <a href="tel:…"> accesible con icono de teléfono.
 */
export interface PhoneButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  phone?: string;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  label?: string;
}

export const PhoneButton = React.forwardRef<
  HTMLAnchorElement,
  PhoneButtonProps
>(
  (
    {
      phone = PHONE_NUMBER,
      size = "lg",
      variant = "default",
      label = "Llamar ahora",
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <Button asChild size={size} variant={variant} className={className}>
      <a
        ref={ref}
        href={`tel:${phone}`}
        aria-label={`Llamar al ${phone}`}
        {...props}
      >
        <Phone className="w-4 h-4" aria-hidden="true" />
        {children ?? label}
      </a>
    </Button>
  ),
);
PhoneButton.displayName = "PhoneButton";

/**
 * Botón de WhatsApp con estilo verde de marca.
 * Abre WhatsApp con un mensaje predefinido personalizable.
 */
export interface WhatsAppButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  phone?: string;
  message?: string;
  size?: ButtonProps["size"];
  label?: string;
}

export const WhatsAppButton = React.forwardRef<
  HTMLAnchorElement,
  WhatsAppButtonProps
>(
  (
    {
      phone = PHONE_NUMBER,
      message = WHATSAPP_DEFAULT_MESSAGE,
      size = "lg",
      label = "WhatsApp",
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <Button
      asChild
      size={size}
      className={cn("bg-green-500 hover:bg-green-600 text-white", className)}
    >
      <a
        ref={ref}
        href={`https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        {...props}
      >
        <MessageCircle className="w-4 h-4" aria-hidden="true" />
        {children ?? label}
      </a>
    </Button>
  ),
);
WhatsAppButton.displayName = "WhatsAppButton";
