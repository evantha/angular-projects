export const ID_GENERATOR = (): number => Math.round(Math.random() * 10000);

export const COURSE_LIST = [
  {
    id: ID_GENERATOR(),
    title: 'Angular workshop',
    price: 50,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    starRating: 4
  },
  {
    id: ID_GENERATOR(),
    title: 'React Workshop',
    price: 60,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    starRating: 4
  },
  {
    id: ID_GENERATOR(),
    title: 'Vue Workshop',
    price: 20,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    starRating: 4
  }
];
