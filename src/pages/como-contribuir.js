import React from 'react'
import { Grid } from '@material-ui/core'

import { Text, Heading } from '@atoms'
import { PageTitle } from '@molecules'

const Donate = () => (
  <>
    <PageTitle title="Como contribuir" />
    <Grid container spacing={3}>
      <Text>
        São mais de 50 familias atenditas mesalmente pela Fundação com recursos materiais e
        espirituais. Além do Abrigo – Casa de passagem que toda noite abriga mais de 20 pessoas
        vivem em situação de rua. E agora contamos com a Casa Pai Nosso que irá acomodar mães e
        filhos em situação de risco. Para que esses projeto continuem acontecendo precisamos da sua
        participação. Conheça todos os projetos da Fundação Aprisco{' '}
      </Text>
      <Text quote>
        Para que tudo isso se realize, contamos com o apoio de diversos parceiros que juntamente
        conosco sonham em fazer dessa cidade uma terra de mais oportunidades.
      </Text>
      <Heading type="h3">Doação em dinheiro</Heading>
      <Text>
        As doações em dinheiro pode ser feita através do Pagseguro ou depositado em nossa conta:
        Igreja Evangélica Ministério Aprisco Banco do Brasil Agência: 3886-5 C.Corrente:20.480-3
        Caixa Econômica Federal Agencia: 3138 Conta : 0475-1 | Op: 003
      </Text>
      <Heading type="h3">Todas as doações</Heading>
      <Text>
        Qualquer doação, seja de alimentos, em dinheiro, ou o que estiver ao seu alcance pode ser
        entregue no nosso endereço: Rua João Martins da Silva, 526 1º andar, bairro São João, ou
        entrar em contato: 75 3226-4433 contato@fundacaoaprisco.org
      </Text>
      <form
        action="https://web.archive.org/web/20170825073505/https://pagseguro.uol.com.br/checkout/v2/donation.html"
        method="post"
        target="pagseguro"
      >
        <input
          alt="Pague com PagSeguro - é rápido, grátis e seguro!"
          name="submit"
          src="https://web.archive.org/web/20170825073505im_/https://p.simg.uol.com.br/out/pagseguro/i/botoes/doacoes/209x48-doar-assina.gif"
          type="image"
        />
      </form>
    </Grid>
  </>
)

export default Donate
