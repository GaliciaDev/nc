import React from 'react';
import { GoogleLogin } from 'react-google-login';

const AuthGoogle = () => {
    const clientId = "1028015103300-lhnfm67iep7guv30ctlfh2euqsd9hj6b.apps.googleusercontent.com";

    const onSuccess = (response) => {
        console.log('Login Success: currentUser:', response.profileObj);
        // Aquí puedes manejar la respuesta exitosa
    };

    const onFailure = (response) => {
        console.log('Login failed: res:', response);
        // Aquí puedes manejar la respuesta fallida
    };

    return (
        <div className="w-full">
            <GoogleLogin
                clientId={clientId}
                buttonText="Acceder con Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                className="w-full"
            />
        </div>
    );
}

export default AuthGoogle;