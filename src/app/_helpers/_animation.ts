export function handleIntersection(entries: any[], observer: any) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("added");
      entry.target.classList.add("active");
    }
  });
}

export function observeElements(
  observer: IntersectionObserver,
  selector: string,
  delayMultiplier: number
) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    observer.observe(element);
    const calculatedDelay = (index + 1) * delayMultiplier;
    (element as HTMLElement).style.transitionDelay = `${calculatedDelay}s`;
  });
}

export const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.35, // Quando 50% do elemento estiver visível
};
