
import Link from "next/link";
export default function Page() {

  return (

    <div className="max-w-4xl mx-auto px-6 py-4">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-12 tracking-[18px] md:tracking-[24px] font-cormorant">REGISTRY</h1>

      <div className="font-cormorant bg-white/10 ">
        <p className="text-xl leading-7 mb-4">
          Your presence is the greatest gift!

          We are so grateful to have you join us in New York City to celebrate our wedding, that alone means the world to us. We truly don't expect any gifts, especially from those who traveled to be with us.

          If you'd still like to contribute something, we would be honored if you made a donation to Palestine Legal, an organization that protects the civil and constitutional rights of people in the U.S. who speak out for Palestinian freedom. Or if you'd prefer, you can donate to our honeymoon fund.

          Thank you for your love and support!
        </p>
        <div className="flex flex-col items-center gap-3 justify-center w-full">
          <Link className="text-3xl font-medium hover:text-wedding-red" href={"https://palestinelegal.org/donate"}>
            Palestine Legal
          </Link>
          <Link className="text-3xl font-medium hover:text-wedding-red" href={"https://palestinelegal.org/donate"}>
            Honeymoon Fund
          </Link>
        </div>
      </div>
    </div>
  );

}

