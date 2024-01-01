import { useParams } from 'react-router-dom';
import { useGetAllProductSlugsQuery } from '../../services/ReduxApi/reduxApi';
import ProductDetails from './ProductDetails';
import ErrorPage from '../Error/ErrorPage';
import { TailSpin } from 'react-loader-spinner';

function ProductDetailsWrapper({
  setNavOpen,
}: {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const slug = useParams().product;
  const { data, isLoading } = useGetAllProductSlugsQuery();
  const slugs = data?.map((slug) => slug.slug);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center mt-4">
        <TailSpin
          height="50"
          width="50"
          color="#D87D4A"
          ariaLabel="tail-spin-loading"
          radius="1"
          visible={true}
        />
      </div>
    );
  }

  if (slug && slugs?.includes(slug)) {
    return <ProductDetails setNavOpen={setNavOpen} slug={slug} />;
  } else {
    return <ErrorPage />;
  }
}

export default ProductDetailsWrapper;
