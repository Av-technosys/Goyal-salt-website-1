import Image from "next/image";

const AdvancedSaltRefining = () => {
  return (
    <section className="about-commitment-ui">
      <div className="about-shell-ui about-commitment-ui__inner">
        <div className="about-commitment-ui__refining">
          <div className="about-commitment-ui__refining-image">
            <Image
              src="/Images/popup.png"
              alt="Goyal Salt product range"
              fill
              className="object-contain"
              sizes="(max-width: 820px) 90vw, 54vw"
            />
          </div>

          <div className="about-commitment-ui__refining-copy">
            <h2>
              Advanced Salt <span className="about-card-heading-accent">Refining</span>
            </h2>
            <span className="about-ui-rule" aria-hidden="true" />

            <p>
              Our modern manufacturing plant utilizes advanced technology
              and infrastructure for precise salt refining and strict
              quality assurance.
            </p>

            <p>
              With a diverse product range and deep industry expertise,
              we deliver customized salt solutions while ensuring steady
              growth and long-term recognition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedSaltRefining;
