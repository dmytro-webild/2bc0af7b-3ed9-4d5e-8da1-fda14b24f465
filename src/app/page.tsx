"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="grid"
        cardStyle="gradient-radial"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="ShopifyPlus"
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlay
      title="Style Redefined, Delivered."
      description="Discover the latest trends in our curated collection, designed for the modern lifestyle."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/fashionable-fedora-hat-studio_23-2150744013.jpg"
      showBlur={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/spring-wardrobe-switch-still-life_23-2150176657.jpg",
          alt: "Spring wardrobe switch over still life",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pullover-camera-laid-near-coffee-pinecones_23-2147912476.jpg",
          alt: "Pullover and camera laid near coffee and pinecones",
        },
        {
          src: "http://img.b2bpic.net/free-photo/fashionable-fedora-hat-studio_23-2150744016.jpg",
          alt: "Fashionable fedora hat in studio",
        },
        {
          src: "http://img.b2bpic.net/free-photo/fashionable-fedora-hat-studio_23-2150744015.jpg",
          alt: "Fashionable fedora hat in studio",
        },
        {
          src: "http://img.b2bpic.net/free-photo/love-shopping-close-up-shot-beautiful-dark-haired-female-smiling-camera-with-her-purchases-her-hand_651396-3879.jpg",
          alt: "Love shopping",
        },
      ]}
      avatarText="Trusted by 10,000+ happy shoppers"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Our Mission",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/abstract-blur-furniture-shop-store-interior_1203-8579.jpg",
          alt: "Modern shop interior design",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Classic Watch",
          price: "$120",
          variant: "Silver",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-details-accessories-elegant-woman-dressed-blue-suit_285396-7924.jpg",
        },
        {
          id: "2",
          name: "Leather Handbag",
          price: "$250",
          variant: "Black",
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-woman-coat-outside-cafe_1303-19485.jpg",
        },
        {
          id: "3",
          name: "Urban Sneakers",
          price: "$90",
          variant: "White",
          imageSrc: "http://img.b2bpic.net/free-vector/vintage-college-colorful-badges_225004-49.jpg",
        },
        {
          id: "4",
          name: "Designer Glasses",
          price: "$75",
          variant: "Gold",
          imageSrc: "http://img.b2bpic.net/free-photo/colored-transparent-sunglasses-still-life_23-2150165757.jpg",
        },
        {
          id: "5",
          name: "Summer Perfume",
          price: "$110",
          variant: "Floral",
          imageSrc: "http://img.b2bpic.net/free-photo/back-school-concept-with-woman-studying-library_23-2148172380.jpg",
        },
        {
          id: "6",
          name: "Wireless Audio",
          price: "$180",
          variant: "Matte Black",
          imageSrc: "http://img.b2bpic.net/free-photo/office-desktop-with-coffee-cup_23-2148166708.jpg",
        },
      ]}
      title="Curated Collection"
      description="Browse our latest arrivals handpicked for quality and design."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Shop Stats"
      tag="Milestones"
      metrics={[
        {
          id: "m1",
          value: "10k+",
          description: "Happy Customers",
        },
        {
          id: "m2",
          value: "5k+",
          description: "Items Sold",
        },
        {
          id: "m3",
          value: "4.9",
          description: "Rating",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Alice Smith",
          handle: "@alicesmith",
          testimonial: "Amazing service and high quality products!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/girl-looking-away-medium-shot_23-2148225705.jpg",
        },
        {
          id: "t2",
          name: "Bob Johnson",
          handle: "@bobjohnson",
          testimonial: "Fast shipping and great packaging.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-businesswoman-with-notebook-holding-her-diary-planner-sitting-office_1258-194721.jpg",
        },
        {
          id: "t3",
          name: "Charlie Brown",
          handle: "@cbrown",
          testimonial: "The quality exceeded my expectations.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cool-young-black-man-with-curly-hair-has-cheerful-expression_273609-8605.jpg",
        },
        {
          id: "t4",
          name: "Diana Ross",
          handle: "@dianaross",
          testimonial: "Best shopping experience ever.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/carefree-white-girl-with-long-curly-hair-enjoying-shopping-before-holidays-pretty-dark-haired-lady-bought-presents-new-year-happy-it_197531-25363.jpg",
        },
        {
          id: "t5",
          name: "Evan Wright",
          handle: "@ewright",
          testimonial: "Truly a top-tier collection.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-middle-aged-man-with-beard-hairstyle-dressed-elegant-blue-suit-textured-dark-background-studio_613910-19853.jpg",
        },
      ]}
      showRating={true}
      title="Loved By Shoppers"
      description="See why our customers keep coming back for more."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Shipping time?",
          content: "Usually 3-5 business days.",
        },
        {
          id: "f2",
          title: "Return policy?",
          content: "30-day money back guarantee.",
        },
        {
          id: "f3",
          title: "Contact support?",
          content: "Email support@example.com.",
        },
      ]}
      title="Need Help?"
      description="Common questions about shopping with us."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      text="Ready to elevate your shopping experience? Get in touch today."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:support@shopifyplus.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="ShopifyPlus"
      copyrightText="© 2025 | ShopifyPlus"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
