import MaxWidthWrapper from '~components/atoms/MaxWidthWrapper';
import Services from '~components/molecules/Services';

const ServicesSection = () => {
    return (
        <section id={'services'}>
            <MaxWidthWrapper>
                <Services />
            </MaxWidthWrapper>
        </section>
    );
};

export default ServicesSection;
