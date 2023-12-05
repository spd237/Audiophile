import CategoryCard from '../Components/CategoryCard';
import { v4 as uuidv4 } from 'uuid';

const categories = [
  {
    category: 'headphones',
    thumbnail: '/img/Thumbnails/headphone-thumbnail.png',
  },
  {
    category: 'speakers',
    thumbnail: '/img/Thumbnails/speaker-thumbnail.png',
  },
  {
    category: 'earphones',
    thumbnail: '/img/Thumbnails/earphone-thumbnail-desktop.png',
  },
];

export function renderCategoryCards(
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  const categoryCards = categories.map((category) => {
    return (
      <CategoryCard
        key={uuidv4()}
        categoryName={category.category}
        thumbnail={category.thumbnail}
        setNavOpen={setNavOpen}
      />
    );
  });
  return categoryCards;
}
