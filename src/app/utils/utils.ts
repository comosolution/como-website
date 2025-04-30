import { format } from "date-fns";
import { de } from "date-fns/locale";

export function scrollTo(id: string, offset?: number) {
  const element = document.getElementById(id);
  const scrollOffset = offset || 120;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element!.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - scrollOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

export function validateEmail(email: string) {
  const reg = /\S+@\S+\.\S+/;
  return reg.test(email);
}

export function formatDate(date: any) {
  try {
    return format(date, "dd. MMMM yyyy", { locale: de });
  } catch {
    return new Date(date).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}
