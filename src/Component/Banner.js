// main bg-color #4137ff
// main bg-color-2 #06d6a0
// main color black
import { ReactComponent as Freelancer } from "../Assets/freelancer.svg"

export default function Banner() {
    return (
        <div className="flex justify-between pt-24">
            <div>
                <div className="relative left-16 font-classic text-3xl top-36">
                    <h1>Hello<br/>I'm Gani, Young Developer from Indonesian<br/>I've been learning <code>{"<code/>"}</code> for 11 months</h1>
                </div>
            </div>
            <div>
                <Freelancer />
            </div>
        </div>
    );
}