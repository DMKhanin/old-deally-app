import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

/*** Components ***/
import Link from 'next/link';
import Button from '../../../../controls/Button';

/*** Styles ***/
import styles from './Actions.module.scss';

const Actions = () => {
    const { status } = useSession();

    return  (
        <div className={`${styles['Actions']}`}>
            { status === 'authenticated' && 
                <>
                    <div className={`${styles['Actions-Col']}`}>
                        <Link href={'/dashboard'}>
                            <Button size="small" color="white" onClick={() => signOut()}>Log out</Button>
                        </Link>
                    </div>
                    <div className={`${styles['Actions-Col']}`}>
                        <Link href={'/dashboard'}>
                            <Button size="small">Dashboard</Button>
                        </Link>
                    </div>
                </>
            }
            { status !== 'authenticated' && 
                <div className={`${styles['Actions-Col']}`}>
                    <Button size="small" onClick={() => signIn()}>Start selling</Button>
                </div>
            }
        </div>
    )
}

export default Actions;