import { Header } from "@/components/header";
import { Icon } from "@/components/icon";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header 
        title="Home" 
        href="/signin" 
        iconName="appointment" 
        iconClassName="w-5 h-5"
      >
        <div className="inline-flex gap-[10px] items-center">
          <Image 
            src="/logo-doctorme.png" 
            alt="DoctorMe" 
            width={48}
            height={48}
          />
          <span className='font-bold text-3xl'>DoctorMe</span>
        </div>
      </Header>
      <h1>Home</h1>
      <Link href="/signin">Login</Link>
      <Icon name="eye-off" className="w-3 h-3 text-red-400"/>

      <Icon 
      name="eye-on" 
      className="w-6 h-6 text-red-400"
      childrenClassName='text-sm text-red-400'
      >
        Aberto
      </Icon>
    </>
  )
}
