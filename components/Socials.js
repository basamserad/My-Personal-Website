import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaFacebookMessenger } from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-2xl'>
      <Link
        href={''}
        className="hover:text-accent transalation-all duration-300"
      >
        <SiGmail />
      </Link>
      <Link
        href={''}
        className="hover:text-accent transalation-all duration-300"
      >
        <FaGithub />
      </Link>
      <Link
        href={''}
        className="hover:text-accent transalation-all duration-300"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href={''}
        className="hover:text-accent transalation-all duration-300"
      >
        <FaFacebookMessenger />
      </Link>
    </div>
  )
}

export default Socials
