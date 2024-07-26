function createAccessToken(payload) {
    jwt.sign(
        payload,
        
        'secret123',
        {
            expiresIn: "1d",
        },
        (err, token) => {
            if (err) console.log(err);
            
        }
        );

}


