import Image from "next/image";

const QualitySaltCommitment = () => {
  return (
    <section className="about-commitment-ui about-commitment-ui--quality-section">
      <div className="about-shell-ui about-commitment-ui__inner">
        <div className="about-commitment-ui__quality">
          <div className="about-commitment-ui__quality-copy">
            <h2>
              Quality Salt <span className="about-card-heading-accent">Commitment</span>
            </h2>
            <span className="about-ui-rule" aria-hidden="true" />

            <p>
              We maintain the highest salt quality for industrial and edible
              uses with a team of skilled professionals in chemical,
              mechanical, technical, and commercial fields.
            </p>

            <p>
              Our products consistently meet sodium chloride requirements
              across chemical, textile, detergent, feed, leather, power,
              oil &amp; gas, and food industries.
            </p>
          </div>

          <div className="about-commitment-ui__quality-image">
            <Image
              src="/Images/about5.png"
              alt="Quality Salt"
              fill
              className="object-contain"
              sizes="(max-width: 820px) 90vw, 58vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySaltCommitment;
