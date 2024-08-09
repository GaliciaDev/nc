import '../assets/css/main.css';

const FormClients = () => {
    return (
        <div>
        {/* rectangulo que abarque todo el ancho con tailwind */}
        

        <div className=" pt-20 pb-20 pl-8 pr-8">
        <div className="mt-6">
            
            <div className="grid sm:grid-cols-3 items-start gap-14 p-10  mx-auto max-w-8xl bg-[white] rounded-md shadow-[0_2px_20px_2px_rgba(0,0,0,0.6)] rounded-md">
                <div>
                    <h1 className="text-[var(--color-hover-buttons)] text-3xl ">Contactanos</h1>
                    <p className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, exercitationem quos? Quibusdam eum molestias nobis soluta voluptatum, dignissimos rerum quas officia ipsam sit dicta maiores blanditiis voluptas ut adipisci illum!</p>

                    <div className="mt-12 md:block hidden">
                        <h2 className="text-[var(--color-hover-buttons)] text-base font-bold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div className="bg-[#e9e6e6] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='black'
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />
                                    </svg>
                                </div>
                                <a href="javascript:void(0)" className="text-black text-sm ml-4">
                                    <small className="block">Atencion a clientes</small>
                                    <strong>atencionaclientes@</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12 md:block hidden">
                        <h2 className="text-[var(--color-hover-buttons)] text-base font-bold ">Redes Sociales</h2>

                        <ul className="flex mt-4 space-x-4">
                            <li className="bg-[#e9e6e6] h-10 w-10 rounded-full flex items-center justify-center shrink-0 ">
                                <a href="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='black'
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                            data-original="#000000" />
                                    </svg>
                                </a>
                            </li>
                            
                            <li className="bg-[#e9e6e6] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='black'
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <form className="ml-auo space-y-4">
                    
                    <input type='text' placeholder='Nombre'
                    
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)]" />
                        
                    <input type='email' placeholder='Correo'
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)]" />
                    <input type='text' placeholder='Telefono'
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[var(--color-hover-buttons)]" />
                    <textarea placeholder='Mensaje' rows="6"
                        className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-[var(--color-hover-buttons)]"></textarea>
                    <button type='button'
                        className="text-white bg-[var(--color-h2)] hover:bg-[var(--color-hover-buttons)] rounded-md text-sm px-4 py-3 w-full !mt-6 ">Enviar</button>
                </form>
               
                <div className="z-10 relative h-full max-md:min-h-[200px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465.55557322101686!2d-103.3002344424214!3d20.68005235455825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b164176ae483%3A0xb42c93f2823d1db3!2sNew%20Concept!5e0!3m2!1sen!2smx!4v1722524310006!5m2!1sen!2smx"
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0"
                    ></iframe>
            </div>
            </div>
        </div>
        </div>
        
        </div>
    );
    }

export default FormClients;