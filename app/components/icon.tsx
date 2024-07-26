import { type SVGProps } from "react";

type IconName = 'appointment' | 'arrow-left' | 'eye-off' | 'eye-off' | 'map'

type IconProps = Readonly<{
    name: string
    children?: React.ReactNode
    childrenClassName?: string
}>

export function Icon({
    name, 
    children, 
    className, 
    childrenClassName, 
    ...props
}: SVGProps<SVGSVGElement> & IconProps) {

   if(children){
    // return icon with text
   }
   // return icon svg
   return (
    <svg {...props}>
        <use href={`./sprite.svg#${name}`} />
    </svg>
   )
}