export function scrollTo(id: string, offset?: number) {
  var element = document.getElementById(id);
  var scrollOffset = offset || 120;
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
  return new Date(date).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
