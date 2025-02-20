import { colors } from "../../data/styles";

const Footer = ()=>{
    return(
    <footer className={`mt-auto py-8 px-4 ${colors.secondBg} ${colors.mainTxt}`}>
        <p className="w-fit mx-auto align-middle">
            Copyright © 2025 AbdElRahman Ahmed Azzam
        </p>
    </footer>
    )
}


export default Footer;