import { Header } from "../header/header";
import { HeroSection } from "../hero/hero";
import { MobileSection } from "../mobile/mobile";
import { InfoSection } from "../info/info";
import { FormSection } from "../form/form";
import { FooterSection } from "../footer/footer";

export function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <MobileSection />
      <InfoSection />
      <FormSection />
      <FooterSection />
    </>
  );
}
