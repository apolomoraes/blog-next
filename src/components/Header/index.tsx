/* eslint-disable prettier/prettier */
import Link from "next/link"
import { Container } from "./styled"
import { SITE_NAME } from "@/config/app-config"

export const Header = () => {
  return (
    <Container>
      <Link href='/'>
        <a href="">{SITE_NAME}</a>
      </Link>
    </Container>
  )
}