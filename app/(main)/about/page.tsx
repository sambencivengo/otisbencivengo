import { MapPin } from "lucide-react";
import Link from "next/link";

interface WeddingDetailProps {
  timeframe: string;
  children: React.ReactNode;
  details: string;
  title: React.ReactNode;
  alertText?: string;
}

export function WeddingDetail({ details, children, timeframe, title, alertText }: WeddingDetailProps) {
  return (
    <section className="mb-16">
      <h2 className="font-cormorant text-3xl text-left ">{timeframe}</h2>
      <div>
        <h2 className="text-3xl font-bold text-left text-wedding-red my-4">{title}</h2>
      </div>
      <div className="font-cormorant bg-white/10">
        <p className="text-xl leading-6 mb-4">{details}</p>
      </div>
      {alertText &&
        <div className="font-cormorant text-wedding-red text-lg font-bold mb-4">
          <p className="">{alertText}</p>
        </div>
      }
      <div className="mb-6 text-left text-xl pl-8">
        {children}
      </div>
    </section>
  );
}

export function LocationLinkWrapper({ children, link }: { children: React.ReactNode; link: string }) {
  return (
    <Link className="group flex items-start gap-2 text-lg font-medium hover:text-wedding-red" href={link}>
      <MapPin className="group-hover:animate-bounce mt-1 text-wedding-red" />
      <div>
        {children}
      </div>
    </Link>
  );
}
export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-4">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-12 tracking-[18px] md:tracking-[24px] font-cormorant">WEDDING DETAILS</h1>
      <WeddingDetail timeframe="4PM - 6PM" details="We will set sail for our wedding ceremony aboard a boat departing promptly at 4:00 PM from Chelsea Piers. The ceremony will take place on the water during a two-hour cruise, so we kindly ask all guests to arrive early to ensure we leave on time. If you miss the boat, please meet us at the reception! At 6:00 PM, the boat will dock at the Brooklyn Bridge Marina.
" title={<>{`CEREMONY`}<br />{`ON THE BOAT`}</>} alertText={"Guests will need to arrange transportation from the ceremony to the reception. Subway, Taxi, and rideshare will be accessible."} >
        <div className="flex flex-col md:flex-row gap-10">
          <LocationLinkWrapper link="https://maps.app.goo.gl/xhX71braLPq2HVvL7">
            <p className="font-jules">Pick up</p>
            <p className="font-cormorant">Chelsea Piers</p>
            <p className="font-cormorant">62 Chelsea Piers</p>
            <p className="font-cormorant">Manhattan, NY 10011</p>
          </LocationLinkWrapper>

          <LocationLinkWrapper link="https://maps.app.goo.gl/Tmj9gTmMNkV1fB8K8">
            <p className="font-jules">Drop off</p>
            <p className="font-cormorant">Brooklyn Bridge Marina</p>
            <p className="font-cormorant">159 Bridge Park Dr.</p>
            <p className="font-cormorant">Brooklyn, NY 11201</p>
          </LocationLinkWrapper>
        </div>
      </WeddingDetail >

      <WeddingDetail timeframe="6:30PM - 10:30PM" details="Our reception will begin at 6:30 at one of our favorite resturants in Brooklyn: La Conda Vinni e Olli. Dinner will be served family-style, with vegetarian options available." title={<>{`RECEPTION`}<br />{`AT LOCANDA`}</>} >
        <LocationLinkWrapper link="https://maps.app.goo.gl/q32AU3hkMYBSBQU6A">
          <p className="font-jules">Locanda Vini & Olii</p>
          <p className="font-cormorant">129 Gates Ave.</p>
          <p className="font-cormorant">Brooklyn, NY 11238</p>
        </LocationLinkWrapper>
      </WeddingDetail>

      <WeddingDetail timeframe="11:00PM - LATE" details="The festivities will continue at INSA, a karaoke bar in Gowanus. We’d love for you to join us!" title={<>{`AFTER PARTY`}<br />{`AT INSA`}</>} >
        <LocationLinkWrapper link="https://maps.app.goo.gl/q32AU3hkMYBSBQU6A">
          <p className="font-jules">Insa</p>
          <p className="font-cormorant">328 Douglass St.</p>
          <p className="font-cormorant">, Brooklyn, NY 11217</p>
        </LocationLinkWrapper>
      </WeddingDetail>
    </div >
  );
}
