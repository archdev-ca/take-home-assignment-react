import Button from '../components/Button'
import Card from '../components/Card'
import Label from '../components/Label'
import TextField from '../components/TextField'
import useLogin from '../hooks/useLogin'

function Login() {
    const { email, setEmail, password, setPassword } = useLogin()
    const handleSubmit = e => {
        e.preventDefault()
        console.log({
            email,
            password,
        })
    }
    return (
        <div className="pt-16 mx-auto" style={{ width: '466px' }}>
            <Card>
                <img
                    src="/images/logo.png"
                    srcSet="images/logo@2x.png 2x"
                    alt=""
                    width={143}
                    height={24}
                    className="mb-10"
                />
                <h2 className="mb-8 text-3xl leading-10 font-semibold">Sign in</h2>

                <form method="post" onSubmit={handleSubmit}>
                    <div className="mb-6 flex flex-col w-full items-start">
                        <Label classNames="mb-4">Email</Label>
                        <TextField type="email" name="email" value={email} setValue={setEmail} />
                    </div>

                    <div className="mb-6 flex flex-col w-full items-start">
                        <Label classNames="mb-4">Password</Label>
                        <TextField type="password" name="password" value={password} setValue={setPassword} />
                    </div>

                    <Button fullWidth variant="primary">
                        Sign in
                    </Button>
                </form>

                <p className="text-center w-full mt-8">
                    <a className="font-bold" href="#">
                        Forgot password?
                    </a>
                </p>
            </Card>
            <p className="text-black-muted mt-8 tracking-normal leading-6 text-center">
                ©2001-2019 All Rights Reserved. Clip® is a registered trademark of Rover Labs.
            </p>
            <p className="text-black-muted tracking-normal leading-6 text-center">
                Cookie Preferences, Privacy, and Terms.
            </p>
        </div>
    )
}

export default Login
