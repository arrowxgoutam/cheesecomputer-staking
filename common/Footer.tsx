import { darken, lighten } from 'polished'
import { FaDiscord, FaGithub, FaMedium, FaTwitter } from 'react-icons/fa'

export const SOCIALS = {
  discord: { icon: <FaDiscord />, link: 'https://discord.gg/byq6uNTugq' },
  github: { icon: <FaGithub />, link: 'https://github.com/cardinal-labs' },
  medium: { icon: <FaMedium />, link: 'https://cardinal-labs.medium.com/' },
  twitter: { icon: <FaTwitter />, link: 'https://twitter.com/cardinal_labs' },
}
export const Footer = ({
  bgColor = 'rgb(26, 27, 32)',
}: {
  bgColor?: string
  accentColor?: string
}) => {
  return (
    <div
      className=""
      style={{
        background: darken(0.03, bgColor),
      }}
    >
      <div className="f-con">
        <p className="text-primary text-center mb-5 pt-10">Copyright © 2022, CheeseComputer</p>
        <p className="text-primary text-center mb-5"><a href="https://twitter.com/CheeseComp_NFT" target="_blank">Twitter</a></p>
        <p className="text-primary text-center mb-5"><a href="https://www.etsy.com/shop/CheeseComputer" target="_blank">Etsy</a></p>
        <p className="text-primary text-center mb-5"><a href="https://www.instagram.com/cheesecomputer8/" target="_blank">Instagram</a></p>
        <p className="text-primary text-center pb-10"><a href="https://cheesecomputer8.medium.com/" target="_blank">Medium Blogs</a></p>
      
      </div>
      
      {/* <div className="text-md flex flex-row justify-center font-medium">
        Copyright 2022 Cardinal Labs. All rights reserved
      </div> */}
    </div>
  )
}
