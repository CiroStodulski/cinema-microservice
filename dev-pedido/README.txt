
npm i helmet --save
A csp configura o cabeçalho Content-Security-Policy para ajudar a evitar ataques de cross-site scripting e outras injeções cross-site.
A hidePoweredBy remove o cabeçalho X-Powered-By.
A hpkp inclui os cabeçalhos Public Key Pinning para evitar ataques man-in-the-middle com certificados falsificados.
A hsts configura o cabeçalho Strict-Transport-Security que impinge conexões seguras (HTTP sobre SSL/TLS) com o servidor.
A ieNoOpen configura o X-Download-Options para o IE8+.
A noCache configura os cabeçalhos Cache-Control e Pragma para desativar o armazenamento em cache no lado do cliente.
A noSniff configura o X-Content-Type-Options para evitar que os navegadores procurem por MIME uma resposta a partir do content-type declarado.
A frameguard configura o cabeçalho X-Frame-Options para fornecer proteção clickjacking.
A xssFilter configura o X-XSS-Protection para ativar o filtro de Cross-site scripting (XSS) nos navegadores da web mais recentes.