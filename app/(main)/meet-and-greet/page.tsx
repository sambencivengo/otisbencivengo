import { LocationLinkWrapper, WeddingDetail } from "../about/page";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-4">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-12 tracking-[18px] md:tracking-[24px] font-cormorant">MEET & GREET</h1>
      <h2 className="font-cormorant text-3xl text-left ">{"THURSDAY, 10/9"}</h2>
      <WeddingDetail timeframe={"8PM - 10PM"} details="Please join us the night before the wedding for a meet and greet at spacious wine bar in Bed Stuy. There is no dress code and this is intended to be a casual gathering of guests the night before the wedding. Frog might have some small bar snacks to enjoy, but we would reccomend grabbing a bite to eat beforehand." title={<>{`DRINKS`}<br />{`AT FROG 𓆏`}</>} >
        <div>
          <p className="text-lg text-center"></p>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <LocationLinkWrapper link="https://maps.app.goo.gl/dRHq2MnH4bQQQ1jk7">
            <p className="font-jules">Frog</p>
            <p className="font-cormorant">358 Marcus Garvey Blvd</p>
            <p className="font-cormorant">Brooklyn, NY 11221</p>
          </LocationLinkWrapper>
        </div>
      </WeddingDetail >
    </div >
  );
}

