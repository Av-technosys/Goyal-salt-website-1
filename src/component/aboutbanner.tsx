import AccordionGallery from "./AccordionGallery";

const galleryItems = [
  { image: "/Images/about1.jpg", label: "Goyal Salt team", alt: "Goyal Salt team" },
  { image: "/Images/about2.jpg", label: "Salt refining facility", alt: "Salt refining facility" },
  { image: "/Images/about3.jpg", label: "Goyal Salt building", alt: "Goyal Salt building" },
];

const AboutBanner = () => {
  return (
    <section className="about-hero-ui">
      <div className="about-shell-ui about-hero-ui__grid">
        <div className="about-hero-ui__copy">
          <h1>About Goyal Salt Limited</h1>

          <h3>
            A TRUSTED NAME IN <span>SALT MANUFACTURING</span>
          </h3>
          <span className="about-ui-rule" aria-hidden="true" />

          <div className="about-hero-ui__body">
            <p>
              Goyal Salt Limited was incorporated in the year 2010 under the name
              “Goyal Salt Pvt. Ltd.” and has grown into one of the largest
              manufacturers and dealers of Sodium Chloride (NaCl) in India.
            </p>
            <p>
              With a strong commitment to quality, consistency, and customer
              satisfaction, the company specializes in manufacturing all varieties
              of salt, catering to diverse industrial, commercial, and consumer
              needs. Backed by modern infrastructure and efficient processes,
              Goyal Salt Limited continues to set high standards in salt production
              while ensuring purity and reliability in every grain.
            </p>
            <p>
              Driven by innovation and excellence, the company has established
              itself as a trusted partner across industries, steadily strengthening
              its presence in the Indian salt market.
            </p>
          </div>
        </div>

        <div className="about-hero-ui__gallery">
          <AccordionGallery
            items={galleryItems}
            defaultIndex={1}
            accentColor="#dc0713"
            overlayColor="#101722"
            height={500}
            gap={10}
            radius={8}
            expandRatio={0.62}
            duration={0.7}
            parallax={0.35}
            tilt={0}
            trigger="hover"
            grayscale={false}
            showLabels={false}
            className="about-hero-ui__accordion"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
