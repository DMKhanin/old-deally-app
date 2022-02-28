import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import { useSession } from "next-auth/react"

/*** Components ***/
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Actions from './components/Actions';
import Logotype from './components/Logotype';
import NFTAlert from '@components/NFTAlert';

/*** Styles ***/
import styles from './Header.module.scss';

/*** Constants ***/
const menuLinks = [
    {
        href: '/#pricing',
        text: 'Pricing'
    },
    // {
    //     href: '/#about',
    //     text: 'About us'
    // },
    {
        href: '/#updates',
        text: 'Updates'
    }
]

const Header = () => {
    const router = useRouter();
    const isNotAuthPages =  !router.asPath.includes('signin') && !router.asPath.includes('signup')
    const { data: session } = useSession()

    return (
        <header className={`${styles['Header']}`}>
            {/* NFT npt display on sign in and sign up*/}
            { isNotAuthPages && 
            <Container>
                <NFTAlert />
            </Container>
            }
            <Container>
                <div className={`${styles['Header-Content']}`}>
                    <div className={`${styles['Header-Col']}`}>
                    <Link href="/">
                        <a>
                            <Logotype />
                        </a>
                    </Link>
                    </div>
                    <div className={`${styles['Header-Col']} ${styles['Header-Col_row']}`}>
                        { isNotAuthPages && 
                            <>
                                <Navigation links={menuLinks} />
                                <Actions />
                            </>
                        }
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;