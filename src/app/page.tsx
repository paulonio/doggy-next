import ItemsView from '@/components/items-view';
import HomePageScreen from '@/components/home-page-screen';
import Button from '@/components/button';
import { Dog, parseResponse } from '@/utils/api';
import Typography from '@/components/typography';
import ProductItem from '@/components/product-item';
import { Image, ImageWrapper, TrendingPackageContent, TrendingPackageWrapper } from './styled';

export default async function Home() {
  const { spaPackage, collars, carryOns } = await parseResponse();

  const descriptionText = `Protectiveness is ${spaPackage.protectiveness} 
    and they are ${Number(spaPackage.good_with_children) > 2 ? 'good' : 'bad'} with children. 
    Barking level is ${spaPackage.barking} and energy is ${spaPackage.energy}.
    However they are ${Number(spaPackage.trainability) > 2 ? 'good' : 'bad'} to train.
  `;

  return (
    <>
      <HomePageScreen />
      <ItemsView title="Trending Spa Package" isOneChild>
        <TrendingPackageWrapper>
          <ImageWrapper $borderWidth="s" $borderColor="light">
            <Image src={spaPackage.image_link} alt={spaPackage.name} />
          </ImageWrapper>
          <TrendingPackageContent>
            <h3>{spaPackage.name}</h3>
            <Typography size="m">{descriptionText}</Typography>
            <Button href="/spa-services" background="secondary">
              See More Spa Packages
            </Button>
          </TrendingPackageContent>
        </TrendingPackageWrapper>
      </ItemsView>
      <ItemsView
        title="Dog Collars"
        isOneChild={collars.length === 1}
        button={<Button href="/info">See More Dog Collars</Button>}
      >
        {collars.map((collar: Dog) => {
          return <ProductItem dogInfo={collar} key={collar.name} />;
        })}
      </ItemsView>
      <ItemsView
        title="Animal Carry Ons"
        isOneChild={carryOns.length === 1}
        button={<Button href="/info">See More Carry Ons</Button>}
      >
        {carryOns.map((carryOn: Dog) => {
          return <ProductItem dogInfo={carryOn} key={carryOn.name} />;
        })}
      </ItemsView>
    </>
  );
}
