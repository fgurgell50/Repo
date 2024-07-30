import { Header } from "@/components/header";
import { Icon } from "@/components/icon";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Header 
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
          <span className="font-bold text-3xl">DoctorMe</span>
        </div>
      </Header>
      <h1 className="font-bold text-xl">Assistente pessoal{' '}
        <span className="w-full flex">para agendar consultas</span>
      </h1>
      <div className="flex flex-col gap-2">
        <div className="flex w-full gap-4">
          <div className="bg-green-600 inline-flex p-3 rounded-xl">
          <div className="text-white font-roboto">
                <h2 className="font-semibold">Agendamento Hoje</h2>
                <p className="text-sm truncate w-28">10:00 - Clínico Geral</p>
            </div>  
          </div>
          <div className="bg-green-600 inline-flex p-3 rounded-xl">
            <div className="text-white font-roboto">
                <h2 className="font-semibold">Agendamento Amanhã</h2>
                <p className="text-sm truncate w-30">10:00 - Clínico Geral</p>
            </div>  
        </div>
      </div>
        <div className="inline-flex">
          <Link href="/signin" 
          className="bg-green-400 text-white text-sm py-2 px-2 pr-3 inline-flex gap-2 items-center rounded-2xl">
              <span 
              className="
              bg-white 
              text-green-500 
              w-5 
              h-5 
              font-semibold 
              font-roboto 
              text-xs
              items-center 
              justify-center
              flex
              rounded-full"
              >3</span>
              Meus Agendamentos
          </Link>  
        </div> 
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-lg">Médicos Disponíveis</h2>
        <div className="flex justify-between">
          <Doctor
            name="Dr. Joao Luiz"
            doctorId="1"
            speciality="Clínico Geral"
            location="São Paulo"
          />
          <Doctor
            name="Dr. Pedro"
            doctorId="2"
            speciality="Clínico Geral"
            location="São Paulo"
          />
        </div>
      </div>
    </div>
  )
}

type DoctorProps = {
  name: string
  doctorId: string
  speciality: string
  location: string
}

function Doctor({ 
  name, 
  doctorId, 
  speciality, 
  location 
}: 
  Readonly<DoctorProps>){
  return (
    <Link href={`doctor/${doctorId}`} 
    className="border border-gray-200 p-4 rounded-xl gap-3 inline-flex flex-col w-full max-w-[150px]"
    >
      <Image 
      src={`/photos/photo-${doctorId}.jpg`} 
      alt={name} 
      width={76} 
      height={76} 
      className="rounded-lg" 
    />
    <div className="flex flex-col">
      <h3 className="font-semibold truncate">{name}</h3>
      <p className="font-roboto text-sm text-gray-400">{speciality}</p>
    </div>
    <p>
      <Icon name="map" className="w-4 h-4 text-[#FFBB63]">
        {location}
      </Icon>  
    </p>
    </Link>
  )
}
