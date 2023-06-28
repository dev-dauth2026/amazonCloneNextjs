import { FaUsers, FaBullseye, FaHandsHelping, FaHistory } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600">
              Welcome to our e-commerce website! We are a team of passionate
              individuals dedicated to providing you with the best online
              shopping experience. Our goal is to offer a wide range of
              high-quality products at affordable prices, ensuring customer
              satisfaction every step of the way.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/about-image.jpg"
              alt="About Us"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Our Team <FaUsers className="inline-block ml-2" />
            </h2>
            <p className="text-gray-600">
              Meet our dedicated team of professionals who work tirelessly to
              ensure your satisfaction. We believe in fostering a collaborative
              environment and strive to provide exceptional service to our
              valued customers.
            </p>
          </div>
          <div className="flex justify-center">
            {/* Team section image goes here */}
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            {/* Mission section image goes here */}
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Our Mission <FaBullseye className="inline-block ml-2" />
            </h2>
            <p className="text-gray-600">
              At our e-commerce website, our mission is to make online shopping
              easy, affordable, and enjoyable for everyone. We aim to offer a
              diverse selection of products while maintaining high standards of
              quality and customer service.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Our Values <FaHandsHelping className="inline-block ml-2" />
            </h2>
            <p className="text-gray-600">
              Our values shape everything we do. We are committed to providing
              transparency, integrity, and exceptional customer care. We believe
              in building long-term relationships with our customers and
              delivering value through our products and services.
            </p>
          </div>
          <div className="flex justify-center">
            {/* Our Values section image goes here */}
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            {/* Our History section image goes here */}
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Our History <FaHistory className="inline-block ml-2" />
            </h2>
            <p className="text-gray-600">
              Since our establishment in [year], we have grown from a small
              startup to a trusted e-commerce platform. Our journey has been
              marked by dedication, innovation, and a commitment to providing an
              exceptional shopping experience for our customers. We look forward
              to serving you for many more years to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
