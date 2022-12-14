import React from 'react'

import Container from '../elements/Container';
import Description from '../elements/Description';
import Title from '../elements/Title';
import BuildCompanyImageCards from '../elements/BuildCompanyImageCards';

import featureIcon01 from '../../assets/feature-tile-icon-01.svg';
import featureIcon02 from '../../assets/feature-tile-icon-02.svg';
import featureIcon03 from '../../assets/feature-tile-icon-03.svg';
import featureIcon04 from '../../assets/feature-tile-icon-04.svg';
import featureIcon05 from '../../assets/feature-tile-icon-05.svg';
import featureIcon06 from '../../assets/feature-tile-icon-06.svg';

const dataFeatures = [
    {
        id: 447,
        image: featureIcon01,
        title: 'Distribuição de conteúdo',
        description: 'Fornecermos um canlendário semanal com posts para todas as redes sociais da empresa, aumentando a distribuição do conteúdo pelo SEO.',
    },
    {
        id: 448,
        image: featureIcon02,
        title: 'Fotografia',
        description: 'Através do nosso grupo de fotógrafos, atualizamos as imagens de todos os produtos, aumentando a credibilidade transmitida ao cliente.',
    },
    {
        id: 449,
        image: featureIcon03,
        title: 'Internacionalização',
        description: 'Após a estruturação da empresa no Brasil, utilizamos recursos de tráfego pago para que a empresa realize vendas pela mundo tudo.',
    },
    {
        id: 450,
        image: featureIcon04,
        title: 'Gestão de estoque',
        description: 'Com a nossa ferramenta avalizamos as vendas mensais, gerando um relátorio dos produtos informando quais foram mais vendidos inidicar reposição.',
    },
    {
        id: 451,
        image: featureIcon05,
        title: 'Feedback do cliente',
        description: 'Analisamos as avalições de cada cliente, coletando pontos para melhorar e aumentando a relação empresa-cliente.',
    },
    {
        id: 452,
        image: featureIcon06,
        title: 'Conversão',
        description: 'Uma boa estrtura não gera venda, por isso nossos profissionais ficam ativos em horários de picos de utilização das redes sociais.',
    }
]

const BuildCompanyImage = () => {
    return (
        <section className='py-12 sm:py-20'>
            <Container>
                <Title 
                    text='Engajamento & conversão 🔥'
                />
                <Description 
                    text='Quando engajados, os colaboradores, além de cumprirem suas funções com excelência, se sentem mais valorizados e conectados aos objetivos corporativos.'
                />
                <div className='pt-12 grid justify-center gap-8 grid-cols-sm-feature sm:grid-cols-2 sm:pt-20 sm:gap-16 lg:grid-cols-3'>
                    {
                        dataFeatures.map((feature, index) => <BuildCompanyImageCards key={feature.id} dataFeature={feature} indexFeature={index}/>)
                    }
                </div>
            </Container>
        </section>
    )
}

export default BuildCompanyImage