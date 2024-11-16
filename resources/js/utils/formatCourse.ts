export const formatCourseTitle: (title: string) => string = (title) => {
  return title.replace(/-/gi, ' ');
}

export const formatCoursePrice: (price: number) => string = (price) => {
  return price > 0 
    ? price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) 
    : 'Grátis';
}

export const formatCourseOldPrice: (price: number) => string = (price) => {
  return formatCoursePrice(Math.round(price + 15) + 0.99);
}