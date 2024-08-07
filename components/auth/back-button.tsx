import Link from "next/link"
import { Button } from "@/components/ui/button"

interface BackButtonProps {
    label: string,
    href: string,
}

export const  BackButton = ({label, href}: BackButtonProps) => {
    return (
      <Button
          variant="link"
          className="w-full"
          size="sm"
      >
          <Link href={href}>
              {label}
          </Link>
      </Button>
  
    )
  }