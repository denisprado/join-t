
const imageByIndex = (slides: string[], index: number): string => slides[index % slides.length]

export default imageByIndex
