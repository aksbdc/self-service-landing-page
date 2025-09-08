import { signup } from '@/app/actions/auth'
 
export function SignupForm() {
  return (
    <form action={signup}>
      <div>
        <label htmlFor="example">Example</label>
        <input id="example" name="example" placeholder="Example" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}