import { useParams } from 'react-router-dom';
import Category from './Category';
import ErrorPage from '../Error/ErrorPage';
import { CommonPropsType } from '../../types';
export default function CategoryPage({ ...commonProps }: CommonPropsType) {
  const { category } = useParams();

  switch (category) {
    case 'headphones':
    case 'earphones':
    case 'speakers':
      return <Category {...commonProps} />;
    default:
      return <ErrorPage />;
  }
}
