import { useParams } from 'react-router-dom';
import Category from './Category';
import ErrorPage from '../Error/ErrorPage';

export default function CategoryPage({
  setNavOpen,
}: {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { category } = useParams();

  switch (category) {
    case 'headphones':
    case 'earphones':
    case 'speakers':
      return <Category setNavOpen={setNavOpen} />;
    default:
      return <ErrorPage />;
  }
}
