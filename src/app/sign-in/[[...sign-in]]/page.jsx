import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='login'>
      <SignIn />
  </div>
}