import { SignInButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'



function Header() {
    const {userId} = auth();
  return (
    <header className="flex items-center justify-between px-8 border-b mb-5">
        <div className="flex items-center justify-center h-20 overflow-hidden">
            <img src='/Google.svg' width={110} height={100} style={{padding:20}}/>
            <p style={{marginLeft:'-15px', fontSize:'19.5px', marginTop:'-4px', color:'#827F7F'}}>Translate</p>
        </div>
        <div>
        {userId ? (
            <div>
                <UserButton />
            </div>
        ):(
            <SignInButton afterSignInUrl='/transalte' mode="modal" />
        )}</div>
    </header>
  )
}

export default Header