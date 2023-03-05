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
  accentColor = '#FFFFFF',
}: {
  bgColor?: string
  accentColor?: string
}) => {
  return (
    <div
      className="px-10 md:px-32"
      style={{
        background: darken(0.03, bgColor),
      }}
    >
      
     
    </div>
  )
}
