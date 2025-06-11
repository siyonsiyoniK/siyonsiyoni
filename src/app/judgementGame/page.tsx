import { TextAnimate } from "@/components/magicui/text-animate";
import { Card } from "@/components/ui/card";
import ReactMarkdown from 'react-markdown';

const markdownContent = `
## **가상 사건 제2025-019: "정당방위인가, 계획된 살인인가?"**

### **사건 개요:**

- 피고인 **김도윤(33세)**
- 피해자 **박재혁(42세)**

### **사건 요약:**

- 김도윤은 평소 **자신의 여동생에게 폭언과 협박을 일삼던 박재혁을 지속적으로 증오하고 있었음.**
- 어느 날, 박재혁이 술에 취한 채 김도윤의 여동생에게 또다시 폭력을 행사했고,
그 장면을 목격한 김도윤은 **집에 있던 흉기를 들고 달려가 박재혁을 찔러 사망에 이르게 함.**
`;

export default function JudgementGame() {
    return (
        <div>
            <TextAnimate className="text-4xl font-bold">
                판사님 판결을 해주세요!
            </TextAnimate>
            <Card className="max-w-md mx-auto p-4">
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </Card>
        </div>
    );
}
