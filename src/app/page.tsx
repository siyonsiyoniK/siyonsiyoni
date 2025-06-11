import { TextAnimate } from "@/components/magicui/text-animate";
import { Marquee } from "@/components/magicui/marquee";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-8 p-4">
      <TextAnimate className="text-4xl text-center font-bold">
        그냥, 만들어 봅니다.
      </TextAnimate>
      
      <div className="w-full max-w-4xl">
        <Marquee className="bg-gray-100 rounded-lg py-4 [--duration:80s]" pauseOnHover>
          {["판사님! 판결해주세요!", "복싱타이머"]
            .map((text, index) => (
              <div key={index} className="px-8 text-xl font-medium whitespace-nowrap">
                {text}
              </div>
            ))}
        </Marquee>
      </div>
    </div>
  );
}
