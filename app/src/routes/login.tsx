import Button from '../components/Button'
import Card from '../components/Card'
import Label from '../components/Label'

function Login() {
    return (
        <div className="flex flex-col" style={{ width: '466px', margin: '0 auto', textAlign: 'center' }}>
            <Card>
                <img src="/logo.png" srcSet="logo@2x.png 2x" alt="" width={143} height={24} />
                <h2>Sign in</h2>

                <Label>Email</Label>
                <input type="email" name="email" />

                <Label>Password</Label>
                <input type="password" name="email" />

                <Button fullWidth variant="primary">
                    Sign in
                </Button>
            </Card>
            <p>©2001-2019 All Rights Reserved. Clip® is a registered trademark of Rover Labs.</p>
            <p>Cookie Preferences, Privacy, and Terms.</p>
        </div>
    )
}

export default Login
