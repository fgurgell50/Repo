import Link from "next/link";
import { Icon, IconName } from "./icon";

export function Header({ 
    title, 
    href, 
    children,
    iconName,
    iconClassName,
}: Readonly<{ 
    title: string; 
    href: string; 
    children?: React.ReactNode;
    iconName?: IconName ; 
    iconClassName?: string;
 }>) {
    const iconNameFallBack = iconName ?? "arrow-left" 
    console.log('HEADER', title, href)
    return(
        <div className="inline-flex gap-5 items-center">
            {children || null }
            <Link 
                href={href} 
                className="h-10 w-10 flex items-center justify-center border border-[#f4f4f4] rounded-full hover:bg-slate-200 transition-all"
            >
                <Icon 
                    name={iconNameFallBack}
                    className={`w-3 h-3 text-[#242424] ${iconClassName}`}
                />
            </Link>
            {!children ? <div className="text-xl font-semibold">{title}</div> : null}
        </div>        
    )
}