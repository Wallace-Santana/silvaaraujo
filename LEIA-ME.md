# Silva & Araújo Advogados — Site institucional

Site em HTML + CSS + JavaScript puro (sem build). Basta subir os arquivos para qualquer hospedagem.

## Estrutura

```
silvaaraujo/
├── index.html              # Página inicial
├── trabalhista.html        # Landing — Direito Trabalhista
├── consumidor.html         # Landing — Direito do Consumidor
├── direito-previdenciario.html     # Landing — Direito Previdenciário
├── politica-de-privacidade.html    # Política de Privacidade (LGPD)
├── .htaccess               # Redirecionamentos, HTTPS, cache
├── robots.txt
├── sitemap.xml
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── img/
        ├── logo.jpg             # Logo horizontal (usado no header)
        ├── logo-dark.jpg        # Logo em fundo preto
        ├── logo-mark.jpg        # Monograma S&A (dourado sobre branco)
        ├── logo-mark-dark.jpg   # Monograma S&A (dourado sobre preto)
        └── seal-dark.jpg        # Selo circular (dourado sobre preto)
```

## Como subir na HostGator

1. **Entre no cPanel** da HostGator (link no email de contratação).
2. Abra o **Gerenciador de Arquivos** (`File Manager`).
3. Navegue até a pasta `public_html/` do domínio `silvaaraujoadvogados.com.br`.
4. **Apague os arquivos existentes** dessa pasta (se houver algo da instalação anterior).
5. Clique em **Upload** e envie **TODOS** os arquivos e pastas desta pasta local.
   - Alternativa: comprima tudo em um `.zip` local, envie o zip e use "Extract" no cPanel.
6. Confirme que os arquivos estão na raiz de `public_html/` (não dentro de uma subpasta como `public_html/silvaaraujo/`).
7. Acesse `https://silvaaraujoadvogados.com.br` — pronto.

## Alternativa: FTP (FileZilla)

- Host: `ftp.silvaaraujoadvogados.com.br` (ou o que a HostGator informou)
- Usuário/senha: dados do cPanel
- Envie tudo para `/public_html/`

## Antes de publicar — coisas que você precisa revisar

1. **Nomes dos sócios**: `index.html` está com placeholders `[Sócio 1]` / `[Sócia 2]` na seção Equipe. Me passa os nomes reais + bio de cada um que eu ajusto.
2. **Email de contato**: usei `contato@silvaaraujoadvogados.com.br` como padrão. Se for outro, me avisa. (Precisa criar essa conta de email no cPanel também.)
3. **Endereço**: mantive o mesmo endereço do site anterior (Av. Tancredo Neves, 1632 — Salvador Trade Center). Confirma se continua.
4. **WhatsApp**: `(71) 99600-0692` — se o número mudou, me passa o novo (aparece em vários lugares).
5. **Logo no header**: hoje uso o **monograma S&A** ao lado do texto. Se quiser a logo horizontal completa, é só me avisar.
6. **OAB do escritório**: no footer eu deixei uma menção genérica ao Provimento nº 205/2021 da OAB. Se você quiser mostrar o número da inscrição ("OAB/BA XXX.XXX"), me passa que eu insiro.

## SEO — configurar depois do deploy

- Criar conta no **Google Search Console** e apontar para `https://silvaaraujoadvogados.com.br`.
- Enviar o `sitemap.xml`.
- Criar/atualizar perfil no **Google Meu Negócio** com o novo domínio.
- Se o cliente ainda tem acesso ao Google Analytics/Tag Manager, me passa o ID que eu adiciono nas 4 páginas.

## Rodar localmente (opcional)

Basta abrir `index.html` no navegador (duplo clique). Ou, se quiser um servidor local (recomendado):

```bash
# Python 3
python -m http.server 8080
# depois abre http://localhost:8080
```
