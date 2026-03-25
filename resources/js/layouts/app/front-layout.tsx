import NavbarHeader from "@/components/nab-bar"
import { ReactNode } from "react"

interface Props {
    children?: ReactNode
}

function FrontLayout({ children, ...props }: Props) {
    return (
        <div className='max-w-6xl mx-auto' {...props}>
            <NavbarHeader />
            <main>
                {children}
            </main>
        </div>
    )
}

export default FrontLayout
