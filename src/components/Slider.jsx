import { FaHtml5, FaReact, FaGitAlt} from "react-icons/fa6"
import { FaCss3Alt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { BiLogoTailwindCss } from "react-icons/bi"
import { SiNextdotjs } from "react-icons/si"


export default function Slider () {
  return (
    <div className="flex gap-12">
        <div>
            <FaHtml5 className="text-5xl"/>
        </div>
        <div>
            <FaCss3Alt className="text-5xl"/>
        </div>
        <div>
            <IoLogoJavascript className="text-5xl"/>
        </div>
        <div>
            <FaGitAlt className="text-5xl"/>
        </div>
        <div>
            <FaReact className="text-5xl"/>
        </div>
        <div>
            <SiNextdotjs className="text-5xl"/>
        </div>
        <div>
            <BiLogoTailwindCss className="text-5xl"/>
        </div>
    </div>
)
}
