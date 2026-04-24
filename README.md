# Ruan Kaylo - Portfolio

Portfolio pessoal desenvolvido com Next.js 16, React 19 e Tailwind CSS 4. Uma landing page moderna, responsiva e otimizada para performance, apresentando informações profissionais, habilidades técnicas, projetos e repositórios do GitHub.

[![Netlify Status](https://api.netlify.com/api/v1/badges/7dd4b2f0-6602-400b-b9bf-552aad9268f0/deploy-status)](https://app.netlify.com/sites/ruankaylo/deploys)
[![Author](https://img.shields.io/badge/Author-RuanAyram-brightgreen.svg)](https://ruankaylo.netlify.app)

#### [Netlify - Serviço de hospedagem grátis e deploy](https://www.netlify.com/)

## Demonstração

O site apresenta as seguintes seções:

- **Hero Section**: Apresentação inicial com nome, título e links sociais
- **Sobre Mim**: Breve descrição profissional e formação acadêmica
- **Skills**: Habilidades técnicas organizadas por categoria (Front-end, Programação, Outros)
- **Portfolio**: Projetos em destaque com imagens e descrições
- **Repositórios**: Últimos repositórios do GitHub (integração com API)
- **Footer**: Informações de contato e créditos

## Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Next.js](https://nextjs.org/) | 16.0.3 | Framework React para produção |
| [React](https://react.dev/) | 19.2.0 | Biblioteca para interfaces de usuário |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Superset JavaScript com tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.9 | Framework CSS utilitário |
| [SWR](https://swr.vercel.app/) | 2.3.7 | React Hooks para data fetching |
| [Lucide React](https://lucide.dev/) | 0.454.0 | Biblioteca de ícones |
| [Radix UI](https://www.radix-ui.com/) | - | Componentes acessíveis e sem estilo |

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18.17 ou superior)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/) ou [bun](https://bun.sh/)
- [Git](https://git-scm.com/)

## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/RuanAyram/Ruan_LP.git
cd Ruan_LP
```

### 2. Instale as dependências

```bash
# Com npm
npm install

# Com yarn
yarn install

# Com pnpm
pnpm install

# Com bun
bun install
```

### 3. Execute o servidor de desenvolvimento

```bash
# Com npm
npm run dev

# Com yarn
yarn dev

# Com pnpm
pnpm dev

# Com bun
bun dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção otimizada |
| `npm run start` | Inicia o servidor de produção |
| `npm run lint` | Executa o ESLint para análise de código |

## Estrutura do Projeto

```
portfolio/
├── app/
│   ├── globals.css        # Estilos globais e tokens de design
│   ├── layout.tsx         # Layout raiz da aplicação
│   └── page.tsx           # Página principal
├── components/
│   ├── ui/                # Componentes base (shadcn/ui)
│   ├── header.tsx         # Navegação principal
│   ├── hero-section.tsx   # Seção inicial
│   ├── about-section.tsx  # Seção sobre mim
│   ├── skills-section.tsx # Seção de habilidades
│   ├── portfolio-section.tsx    # Seção de projetos
│   ├── repositories-section.tsx # Seção de repositórios GitHub
│   ├── section-header.tsx # Componente de título de seção
│   └── footer.tsx         # Rodapé
├── hooks/                 # React Hooks customizados
├── lib/                   # Utilitários e funções auxiliares
├── public/                # Arquivos estáticos (imagens, fontes)
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração do TypeScript
└── next.config.mjs        # Configuração do Next.js
```

## Deploy em VPS

### Opção 1: Deploy com Node.js

#### 1. Preparar o servidor

```bash
# Atualize o sistema
sudo apt update && sudo apt upgrade -y

# Instale Node.js (via NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verifique a instalação
node --version
npm --version
```

#### 2. Clone e configure o projeto

```bash
# Clone o repositório
git clone https://github.com/RuanAyram/Ruan_LP.git
cd Ruan_LP

# Instale as dependências
npm install

# Gere o build de produção
npm run build
```

#### 3. Configure o PM2 (Process Manager)

```bash
# Instale o PM2 globalmente
sudo npm install -g pm2

# Inicie a aplicação
pm2 start npm --name "portfolio" -- start

# Configure para iniciar automaticamente
pm2 startup
pm2 save
```

#### 4. Configure o Nginx como Reverse Proxy

```bash
# Instale o Nginx
sudo apt install nginx -y

# Crie o arquivo de configuração
sudo nano /etc/nginx/sites-available/portfolio
```

Adicione a seguinte configuração:

```nginx
server {
    listen 80;
    server_name seudominio.com.br www.seudominio.com.br;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Ative o site
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/

# Teste a configuração
sudo nginx -t

# Reinicie o Nginx
sudo systemctl restart nginx
```

#### 5. Configure SSL com Certbot (Opcional, mas recomendado)

```bash
# Instale o Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtenha o certificado SSL
sudo certbot --nginx -d seudominio.com.br -d www.seudominio.com.br

# O certificado será renovado automaticamente
```

### Opção 2: Deploy com Docker

#### 1. Crie o Dockerfile

```dockerfile
FROM node:20-alpine AS base

# Instalar dependências apenas quando necessário
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Build da aplicação
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Imagem de produção
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### 2. Crie o docker-compose.yml

```yaml
version: '3.8'

services:
  portfolio:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
```

#### 3. Execute com Docker

```bash
# Build e inicie o container
docker-compose up -d --build

# Veja os logs
docker-compose logs -f
```

## Personalização

### Alterando Informações Pessoais

Edite os seguintes arquivos para personalizar o conteúdo:

- **`components/hero-section.tsx`**: Nome, título e links sociais
- **`components/about-section.tsx`**: Descrição pessoal e formação
- **`components/skills-section.tsx`**: Habilidades técnicas
- **`components/portfolio-section.tsx`**: Projetos em destaque
- **`components/repositories-section.tsx`**: Username do GitHub (linha com a URL da API)

### Alterando Cores e Tema

Edite o arquivo `app/globals.css` para modificar os tokens de design:

```css
:root {
  --background: 220 20% 10%;      /* Cor de fundo */
  --foreground: 210 40% 98%;      /* Cor do texto */
  --primary: 175 80% 50%;         /* Cor de destaque */
  /* ... outras variáveis */
}
```

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Padrões de Código

- Utilize TypeScript para tipagem estática
- Siga as convenções do ESLint configuradas no projeto
- Mantenha componentes pequenos e reutilizáveis
- Utilize Tailwind CSS para estilização

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2018-2026 Ruan Kaylo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Contato

**Ruan Kaylo** - Full Stack Developer

- GitHub: [@RuanAyram](https://github.com/RuanAyram)
- LinkedIn: [Ruan Kaylo](https://br.linkedin.com/in/ruan-kaylo-99805812b)

---

Desenvolvido com Next.js e hospedado na Netlify.
