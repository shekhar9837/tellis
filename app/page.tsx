import AppointmentSection from "@/components/AppointmentSection ";
import BestBarbershopSection from "@/components/BestBarbershopSection";
import BlogSection from "@/components/BlogSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection ";
import Introductory from "@/components/Introductory";
import OurWorkSection from "@/components/OurWorkSection";
import PricingPlanSection from "@/components/PricingPlanSection";
import ServicesSection from "@/components/ServicesSection ";
import StatisticsSection from "@/components/StatisticsSection ";
import TeamSection from "@/components/TeamSection ";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <Introductory/>
      <ServicesSection/>
      <AppointmentSection/>
      <StatisticsSection/>
      <TeamSection/>
      <TestimonialsSection/>
      <PricingPlanSection/>
      <BestBarbershopSection/>
      <BlogSection/>
      <ClientsSection/>
      <OurWorkSection/>
      <Footer/>
     

    </div>
  );
}
