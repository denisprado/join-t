import Image from "next/image"

const Logo = () => {
	return (<a href="/"><Image src='/logo-joint-primary.svg' alt="Logo JoiT" className="w-[224px] h-[96px] md:w-[112px] md:h-[48px]" width={112} height={48} /></a>);
}

export default Logo